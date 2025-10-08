<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LoginActivity;
use App\Models\Payment;
use App\Models\RWCs;
use App\Models\Stake;
use App\Models\User;
use App\Models\WalletBalance;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    public function dashboard(Request $request)
    {
        $active_user = User::where('user_type', 2)->where('active_status', 1)->count();
        $total_user = User::where('user_type', 2)->count();

        $total_investment = Stake::sum('amount');
        //$total_investment = Payment::sum('paid_amount');
        $total_coin = Stake::sum('coin');
        $total_roi = \App\Models\RoiLog::sum('amount');
        $current_roi = DB::table('settings')
            ->where('key', 'daily_roi_percent')
            ->value('value') ?? 0;

        //$investments = Stake::with('user')->latest()->limit(10)->get();
        // $investments = Payment::with('user')->where('status', 'paid')->latest()->limit(10)->get();
        $investments = Stake::orderBy('block_timestamp', 'desc')->get();
        $coin_value_usd = DB::table('settings')
            ->where('key', 'coin_value_usd')
            ->value('value');
        $total_amount = Stake::sum('amount');
        //$total_rwc_earn = ($total_amount * 100) / (float) $coin_value_usd;
        $total_rwc_earn = RWCs::sum('rwc_coin');
        return view("pages.Admin.dashboard", compact("total_user", "active_user", "total_investment", "total_roi", "investments", "current_roi", "total_coin", "total_rwc_earn"));
    }

    public function logout()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user->active_status = 0;
            $user->save();

            $loginActivityId = Session::get('loginActivityID');
            if ($loginActivityId) {
                $loginActivity = LoginActivity::find($loginActivityId);
                if ($loginActivity) {
                    $loginActivity->logout_at = Carbon::now();
                    $loginActivity->update();
                }
            }

            Auth::logout();
        }

        return redirect()->route('login')->with('success', 'Logged out successfully.');
    }

    public function test()
    {
        $bnbPrice = 1;
        $response = Http::get('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');

        if ($response->successful()) {
            $bnbPrice = floatval($response->json()['price']);
        }

        // Group stakes by from_address and sum their amounts per coin
        $pendingStakes = Stake::where('wallet_update_status', 0)
            ->select('from_address', 'coin', DB::raw('SUM(amount) as total_amount'))
            ->groupBy('from_address', 'coin')
            ->get();

        foreach ($pendingStakes as $stake) {
            $fromAddress = $stake->from_address;
            $totalAmount = floatval($stake->total_amount);

            // Convert based on coin type
            if ($stake->coin === 'BNB') {
                $totalAmount = $totalAmount * $bnbPrice;
            } 
            elseif ($stake->coin === 'USDT') {
                $totalAmount = $totalAmount * 1;
            }

            // Check if wallet balance exists
            $wallet = WalletBalance::where('from_address', $fromAddress)->first();

            if ($wallet) {
                // Update existing wallet
                $wallet->update([
                    'amount' => strval(floatval($wallet->amount) + $totalAmount),
                    'updated_at' => now(),
                ]);
            } else {
                // Create new wallet
                WalletBalance::create([
                    'from_address' => $fromAddress,
                    'amount' => strval($totalAmount),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

}
