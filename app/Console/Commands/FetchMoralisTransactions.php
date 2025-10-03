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
        $walletAddress = '0xbf614db09ce9763a69f2731aef99b1623410b926';
        $apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjAyOTUzMzQ0LTFiYTQtNGIzOC05MzRjLWUwMGJlNTYzNTY3MiIsIm9yZ0lkIjoiNDcyMzE5IiwidXNlcklkIjoiNDg1ODgwIiwidHlwZUlkIjoiMmNmY2RmODctYzcwNy00ZTdhLWI5ZGQtYmEwMzc2Y2I4MzU1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTg3ODE5MzUsImV4cCI6NDkxNDU0MTkzNX0.UkFUd8C-547pdI7T36e0_yAzX1rHiLDSOiMXyEinCi0';

        $client = new Client();

        try {
            $response = $client->request('GET', "https://deep-index.moralis.io/api/v2.2/wallets/$walletAddress/history", [
                'query' => [
                    'chain' => 'bsc',
                    'order' => 'DESC',
                    'limit' => 25
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
                        Stake::create([
                            'user_id' => null, // set if you have mapping of wallet to user
                            'hash' => $tx['hash'],
                            'from_address' => $tx['from_address'],
                            'to_address' => $tx['to_address'],
                            'token_symbol' => $transfer['token_symbol'] ?? $transfer['token_symbol'] ?? null, // USDT or BNB
                            'value' => $transfer['value'] ?? null,
                            'value_formatted' => $transfer['value_formatted'] ?? null,
                            'summary' => $tx['summary'] ?? null,
                            'block_timestamp' => $tx['block_timestamp'],
                            'transaction_fee' => $tx['transaction_fee'] ?? null,
                            'amount' => $transfer['value_formatted'] ?? null,
                            'coin' => $transfer['token_symbol'] ?? null,
                            'start_date' => now(), // you can customize if needed
                            'wallet_update_status' => 0
                        ]);
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

                        // ✅ Apply conversion dynamically
                        if ($stake->coin === 'BNB') {
                            $amount = $amount * $bnbPrice; // use live price
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
