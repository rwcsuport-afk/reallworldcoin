<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'txHash' => 'required|string|unique:transactions,tx_hash',
            'from' => 'required|string',
            'amount' => 'required|numeric',
            'tokenReceived' => 'required|numeric'
        ]);

        $transaction = Transaction::create([
            'tx_hash' => $request->txHash,
            'from_address' => $request->from,
            'amount' => $request->amount,
            'token_received' => $request->tokenReceived
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Transaction saved successfully',
            'data' => $transaction
        ], 201);
    }
}
