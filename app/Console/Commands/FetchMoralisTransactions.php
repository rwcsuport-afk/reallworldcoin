<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use App\Models\Stake;
use App\Models\WalletBalance;
use Illuminate\Support\Facades\Http;

class FetchMoralisTransactions extends Command
{
    protected $signature = 'moralis:fetch-stakes';
    protected $description = 'Fetch wallet transactions from Moralis API and insert into stakes table';

    public function handle()
    {
        $walletAddress = '0x0a1ad99042f75253faaaA5a448325e7c0069E9fd';
        $apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjI0MDU0ZDRjLWZjNmYtNGUxMS1iMTM4LTY3NDk0ZmNjZjk3ZiIsIm9yZ0lkIjoiNDc1MzM0IiwidXNlcklkIjoiNDg5MDAyIiwidHlwZUlkIjoiYWNkODVlNTktZTIxNC00NjI3LTg1MjMtNTAxY2YyNjc3ZjNlIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NjAxNzI2NzEsImV4cCI6NDkxNTkzMjY3MX0.7YlrJB2HoK294Qye1Rh58DGTzICuwxuRDu0_PjQameU';
        $client = new Client();

        try {
            $response = $client->request('GET', "https://deep-index.moralis.io/api/v2.2/wallets/$walletAddress/history", [
                'query' => [
                    'chain' => 'bsc',
                    'order' => 'DESC',
                    'limit' => 100
                ],
                'headers' => [
                    'Accept' => 'application/json',
                    'X-API-Key' => $apiKey,
                ],
            ]);

            $data = json_decode($response->getBody(), true);

            if (!empty($data['result'])) {
                foreach ($data['result'] as $tx) {
                    $transfer = $tx['native_transfers'][0] ?? $tx['erc20_transfers'][0] ?? null;
                    // Check if transaction already exists
                    if (!Stake::where('hash', $tx['hash'])->exists()) {
                        $coin = strtoupper($transfer['token_symbol'] ?? '');

                        // Store only BNB and USDT transactions
                        if (isset($tx['hash']) && in_array($coin, ['BNB', 'USDT'])) {
                            Stake::create([
                                'user_id' => null, // set if you have mapping of wallet to user
                                'hash' => $tx['hash'],
                                'from_address' => $tx['from_address'],
                                'to_address' => $tx['to_address'],
                                'token_symbol' => $coin,
                                'value' => $transfer['value'] ?? null,
                                'value_formatted' => $transfer['value_formatted'] ?? null,
                                'summary' => $tx['summary'] ?? null,
                                'block_timestamp' => $tx['block_timestamp'],
                                'transaction_fee' => $tx['transaction_fee'] ?? null,
                                'amount' => $transfer['value_formatted'] ?? null,
                                'coin' => $coin,
                                'start_date' => now(),
                                'wallet_update_status' => 0,
                            ]);
                        }
                    }

                    $bnbPrice = 1;
                    $response = Http::get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');

                    if ($response->successful()) {
                        $bnbPrice = floatval($response->json()['price']);
                    }

                    // Fetch all stakes with wallet_update_status = 0
                    $pendingStakes = Stake::where('wallet_update_status', 0)->get();

                    foreach ($pendingStakes as $stake) {
                        $fromAddress = $stake->from_address;
                        $hash = $stake->hash;
                        $amount = floatval($stake->amount ?? 0);

                        // Convert BNB amount to USD
                        //$amount = $amount * $bnbPrice;

                        // ✅ Apply conversion dynamically
                        if ($stake->coin === 'BNB') {
                            $amount = $amount * $bnbPrice;
                            // use live price
                        } elseif ($stake->coin === 'USDT') {
                            $amount = $amount * 1;
                        }

                        // Check if wallet balance for this from_address exists
                        $wallet = WalletBalance::where('from_address', $fromAddress)->first();

                        if ($wallet) {
                            // Update existing WalletBalance
                            $wallet->update([
                                'amount' => strval(floatval($wallet->amount) + $amount),
                                'hash' => $hash,
                                'updated_at' => now(),
                            ]);
                        } else {
                            // Create new WalletBalance
                            WalletBalance::create([
                                'from_address' => $fromAddress,
                                'hash' => $hash,
                                'amount' => strval($amount),
                                'created_at' => now(),
                                'updated_at' => now(),
                            ]);
                        }

                        // Update wallet_update_status in stakes table
                        if ($stake) {
                            $stake->wallet_update_status = 1;
                            $stake->save();
                        }
                    }
                }
            }

            $this->info('Transactions inserted into stakes table successfully.');

        } catch (\Exception $e) {
            $this->error('Error: '.$e->getMessage());
        }
    }
}
