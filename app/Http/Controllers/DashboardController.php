<?php

namespace App\Http\Controllers;

use App\Models\LoginActivity;
use App\Models\Payment;
use App\Models\Setting;
use App\Models\Stake;
use App\Models\User;
use App\Models\WalletAddress;
use App\Models\Withdrawan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function dashboard(Request $request)
    {
        $user = auth()->user();
        $roiPercent = Setting::getValue('daily_roi_percent', 1.0); // fallback to 1%

        //$stakes = Stake::where('user_id', $user->id)->get();
        $stakes = Payment::where('user_id', $user->id)->get();
        $total_staked = Payment::where('user_id', $user->id)
                ->sum(DB::raw('CAST(paid_amount AS DECIMAL(16,8))'));
        
        $coin_value_usd = DB::table('settings')
            ->where('key', 'coin_value_usd')
            ->value('value');

        $total_coin = Stake::where('user_id', $user->id)
            ->sum(DB::raw('CAST(coin AS DECIMAL(12,2))'));
        
        // calculate cent to RWC
        $total_earn_coin = 0;
        if ($coin_value_usd && is_numeric($coin_value_usd)) {
            $total_earn_coin = ($total_staked * 100) / (float) $coin_value_usd;
        }

        $total_rwc = (float) $total_earn_coin + (float) $total_coin;
       
        // Convert RWC to USD
        $usd = number_format($total_rwc / 100, 2, '.', '');
        $total_usd = $usd - $user->amount_usd;
        //$total_usd = (15.08 - 12.00)
       
        // Optional: if you want integer cents
        $usd_cents = (int) round($total_rwc);
        
        $total_coin = Stake::sum('coin'); 
        $total_earn_coin = $user->wallet_balance + $user->referral_bonus;
       
        $total_balance = $total_earn_coin + $total_staked;
        
        return view('pages.User.dashboard', compact(
            'stakes',
            'roiPercent',
            'total_staked',
            'total_earn_coin',
            'total_balance', 
            'total_coin', 
            'usd', 
            'total_usd'
        ));
    }


    public function logout()
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user->active_status = 0;
            $user->save();

            $loginActivity = LoginActivity::find(Session::get('loginActivityID'));
            $loginActivity->logout_at = Carbon::now();
            $loginActivity->update();
            Auth::logout();
        }

        return redirect()->route('login')->with('success', 'Logged out successfully.');
    }

    public function referral(Request $request)
    {
        $user = Auth::user();

        $referrals = $user->referredUsers;
        
        return view('pages.User.referral', compact('referrals'));
    }

    public function stake(Request $request)
    {
        $coinValueSetting = Setting::where('key', 'coin_value_usd')->first();
        //$coinValue = $coinValueSetting ? floatval($coinValueSetting->value) : 0;
        $coinValue = $coinValueSetting ? $coinValueSetting->value : 0;
        $userStakes = Stake::where('user_id', Auth::id())->latest()->take(10)->get();
        
        return view('pages.User.stake', compact('coinValue', 'userStakes'));
    }

    public function profile(Request $request)
    {
        return view('pages.User.profile');
    }

    public function withdrawal(Request $request)
    {
        $user = auth()->user();

        //$withdrawalRequest = User::with('stakes')->where('user_type', 2)->whereIn('withdrawan_status', [1, 2, 3])->get();
        $withdrawalRequest = Withdrawan::with('user')->whereIn('status', [1, 2, 3])->get();

        $total_staked = Payment::where('user_id', $user->id)
            ->sum(DB::raw('CAST(paid_amount AS DECIMAL(16,8))'));

        $coin_value_usd = DB::table('settings')
            ->where('key', 'coin_value_usd')
            ->value('value');

        $total_coin = Stake::where('user_id', $user->id)
            ->sum(DB::raw('CAST(coin AS DECIMAL(12,2))'));

        $total_earn_coin = 0;
        if ($coin_value_usd && is_numeric($coin_value_usd)) {
            $total_earn_coin = ($total_staked * 100) / (float) $coin_value_usd;
        }

        $total_rwc = (float) $total_earn_coin + (float) $total_coin;

        // available USD balance (before withdrawals)
        $totalUsd = $total_rwc / 100;

        // subtract already withdrawn
        $alreadyWithdrawn = $user->amount_usd ?? 0;
        $usd = number_format($totalUsd - $alreadyWithdrawn, 2, '.', '');

        if ($request->isMethod('GET')) {
            return view('pages.User.withdrawal', compact('usd', 'total_rwc', 'withdrawalRequest'));
        }

        if ($request->isMethod('POST')) {
            $request->validate([
                'amount_usd' => ['required', 'numeric', 'min:0.01'],
            ]);

            $amount = (float) $request->amount_usd;

            // validate against *remaining* balance
            if ($amount > $usd) {
                return back()->withErrors([
                    'amount_usd' => 'Withdrawal amount exceeds available balance.'
                ])->withInput();
            }

            // update user withdrawal
            $user->amount_usd = $alreadyWithdrawn + $amount;
            $user->withdrawan_status = 1;
            $data = $user->save();
            if ($data) {
                $withdrawan = new Withdrawan();
                $withdrawan->user_id = $user->id;
                $withdrawan->amount = $amount;
                $withdrawan->date = Carbon::now();
                $withdrawan->status = 1;
                $withdrawan->save();
            }

            return redirect()->route('withdrawal')
                            ->with('success', 'Withdrawal request submitted successfully!');
        }
    }

    public function walletHistory(Request $request)
    {
        $coinValueSetting = Setting::where('key', 'coin_value_usd')->first();
        //$coinValue = $coinValueSetting ? floatval($coinValueSetting->value) : 0;
        $coinValue = $coinValueSetting ? $coinValueSetting->value : 0;
        $userStakes = Stake::where('user_id', Auth::id())->latest()->take(10)->get();
        return view('pages.User.walletHistory', compact('coinValueSetting', 'coinValue','userStakes'));
    }

    public function profitReports(Request $request)
    {
        $user = auth()->user();
        $roiPercent = Setting::getValue('daily_roi_percent', 1.0); // fallback to 1%

        //$stakes = Stake::where('user_id', $user->id)->get();
        $stakes = Payment::where('user_id', $user->id)->get();
        $total_staked = Payment::where('user_id', $user->id)
                ->sum(DB::raw('CAST(paid_amount AS DECIMAL(16,8))'));
       
        $coin_value_usd = DB::table('settings')
            ->where('key', 'coin_value_usd')
            ->value('value');

        $total_coin = Stake::where('user_id', $user->id)
            ->sum(DB::raw('CAST(coin AS DECIMAL(12,2))'));

        // calculate cent to RWC
        $total_earn_coin = 0;
        if ($coin_value_usd && is_numeric($coin_value_usd)) {
            $total_earn_coin = ($total_staked * 100) / (float) $coin_value_usd;
        }

        $total_rwc = (float) $total_earn_coin + (float) $total_coin;

        // Convert RWC to USD
        $usd = number_format($total_rwc / 100, 2, '.', ''); 
        $total_usd = $usd - $user->amount_usd;
        
        // Optional: if you want integer cents
        $usd_cents = (int) round($total_rwc);

        $total_coin = Stake::sum('coin'); 
        $total_earn_coin = $user->wallet_balance + $user->referral_bonus;
        $total_balance = $total_earn_coin + $total_staked;
        
        return view('pages.User.profitReports', compact('total_usd', 'total_coin', 'total_earn_coin'));
    }


    public function walletAddress(Request $request)
    {
        $user = auth()->user();
        $wallet = WalletAddress::first();

        if ($request->isMethod('POST')) {
            $request->validate([
                'name' => 'required|string|max:255',
            ]);

            if ($wallet) {
                $wallet->user_id = $user->id;
                $wallet->name = $request->name;
                $wallet->save();
                $message = 'Wallet address updated successfully!';
            } else {
                WalletAddress::create([
                    'user_id' => $user->id,
                    'name' => $request->name,
                ]);
                $message = 'Wallet address added successfully!';
            }

            return redirect()->route('walletAddress')->with('success', $message);
        }

        return view('pages.User.withdrawan_address', compact('wallet'));
    }
}
