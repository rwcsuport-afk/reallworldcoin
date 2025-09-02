<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Stake;
use Carbon\Carbon;
use Coinremitter\Coinremitter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{
    public function createPayment(Request $request)
    {
        $data = $request->validate([
            'user_id'  => 'required|integer|exists:users,id',
            'amount'   => 'required|numeric|min:0.0001',
            'currency' => 'required|string',
            'name'     => 'nullable|string',
            'email'    => 'nullable|email',
            'coin'     => 'nullable|string',
        ]);

        $coin = strtoupper($data['coin'] ?? 'BTC');
        $merchantInvoiceId = uniqid('INV_');
        $wallet = new Coinremitter($coin);
        
        $params = [
            'user_id'                  => $data['user_id'],
            'amount'                   => $data['amount'],          
            'fiat_currency'            => $data['currency'],     
            'name'                     => $data['name'] ?? null,
            'email'                    => $data['email'] ?? null,
            'custom_data1'             => $merchantInvoiceId,     
            'notify_url'               => route('coinremitter.webhook'),
            'success_url'              => route('payment.success'),
            'fail_url'                 => route('payment.failed'),
            // optional: 'expiry_time_in_minutes' => 60,
        ];

        $invoice = $wallet->createInvoice($params);
        if (!empty($invoice['success']) && !empty($invoice['data']['url'])) {

            Payment::create([
                'user_id'            => $data['user_id'],
                'invoice_id'         => $merchantInvoiceId,
                'external_invoice_id'=> $invoice['data']['invoice_id'] ?? null,
                'coin'               => $coin,
                'amount'             => $data['amount'],
                'currency'           => $data['currency'],
                'status'             => $invoice['data']['status'] ?? 'pending',
                'invoice_url'        => $invoice['data']['url'] ?? null,
            ]);

            // Redirect user to CoinRemitter's payment page
            return redirect()->away($invoice['data']['url']);
        }

        // handle error
        Log::error('CoinRemitter createInvoice failed', $invoice ?? []);
        return back()->withErrors(['msg' => $invoice['msg'] ?? 'Unable to create payment invoice.']);
    }

    // Webhook: CoinRemitter will POST here with transaction data
    public function handleWebhook(Request $request)
    {
        Log::info('CoinRemitter webhook payload:', $request->all());

        $userId            = $request->input('user-id') ?? null;
        $merchantInvoiceId = $request->input('custom_data1') ?? null;
        $externalInvoiceId = $request->input('invoice_id') ?? null;
        $status            = strtolower($request->input('status') ?? 'pending');

        $paidAmountData = $request->input('paid_amount') ?? null;
        if (is_array($paidAmountData)) {
            $paidAmount = $paidAmountData['TCN'] ?? null;
        } else {
            $paidAmount = $paidAmountData;
        }

        $txid = $request->input('txn_id') ?? $request->input('txid') ?? null;

        if ($merchantInvoiceId) {
            $payment = Payment::where('invoice_id', $merchantInvoiceId)->first();
        } else {
            $payment = Payment::where('external_invoice_id', $externalInvoiceId)->first();
        }

        if ($payment) {
            $payment->status               = $status;
            $payment->paid_amount          = $paidAmount;
            $payment->txid                 = $txid;
            $payment->external_invoice_id  = $externalInvoiceId ?? $payment->external_invoice_id;
            $payment->save();

            $coin_value_usd = DB::table('settings')
                ->where('key', 'coin_value_usd')
                ->value('value');

            if ($coin_value_usd && is_numeric($coin_value_usd) && $payment->paid_amount) {
                $total_earn_coin = ($payment->paid_amount * 100) / (float) $coin_value_usd;

                Stake::create([
                    'user_id'    => $payment->user_id,
                    'amount'     => $payment->paid_amount,
                    'coin'       => $total_earn_coin,
                    'start_date' => now(),
                ]);
            }

        } else {
            Payment::create([
                'user_id'             => $userId,
                'invoice_id'          => $merchantInvoiceId ?? ('unknown_' . uniqid()),
                'external_invoice_id' => $externalInvoiceId,
                'coin'                => $request->input('coin') ?? 'BNB',
                'amount'              => $request->input('amount') ?? null,
                'currency'            => $request->input('fiat_currency') ?? null,
                'status'              => $status,
                'paid_amount'         => $paidAmount,
                'txid'                => $txid,
                'invoice_url'         => $request->input('url') ?? null,
            ]);
        }

        return response()->json(['success' => true]);
    }


    public function success()
    {
        return view('paymet-success');
    }

    public function failed()
    {
        return view('payment-failed');
    }
}
