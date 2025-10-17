<?php

namespace App\Http\Controllers;

use App\Models\LoginActivity;
use App\Models\Payment;
use App\Models\RWCs;
use App\Models\Setting;
use App\Models\Stake;
use App\Models\User;
use App\Models\WalletAddress;
use App\Models\WalletBalance;
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

        //new calculate cent to RWC
        $coin_value_usd = DB::table('settings')
            ->where('key', 'coin_value_usd')
            ->value('value');

        $total_amount = Stake::where('from_address', $user->user_id)->sum('amount');
        $total_usd = ($total_amount * 100) / (float) $coin_value_usd;
        //$total_usd = $total_amount * ((float) $coin_value_usd / 100);

        $total_coin = Stake::where('user_id', $user->id)
            ->sum(DB::raw('CAST(coin AS DECIMAL(12,2))'));

        //old calculate cent to RWC
        $total_earn_coin = 0;
        if ($coin_value_usd && is_numeric($coin_value_usd)) {
            $total_earn_coin = ($total_staked * 100) / (float) $coin_value_usd;
        }

        $total_rwc = (float) $total_earn_coin + (float) $total_coin;

        // Convert RWC to USD
        // $usd = number_format($total_rwc / 100, 2, '.', '');
        // $total_usd = $usd - $user->amount_usd;
        //$total_usd = (15.08 - 12.00)

        // Optional: if you want integer cents
        $usd_cents = (int) round($total_rwc);

        $total_coin = Stake::where('from_address', $user->user_id)->sum('coin');
        $tt = Stake::where('from_address', $user->user_id)->sum('amount');

        // Sum amounts grouped by coin
        $totals = Stake::where('from_address', $user->user_id)
            ->selectRaw('coin, SUM(amount) as total_amount')
            ->groupBy('coin')
            ->get();

        $total_earn_coin = $user->wallet_balance;

        $total_balance = $total_earn_coin + $total_staked;

        $total_wallet_balance = WalletBalance::where('from_address', $user->user_id)->value('amount');

        $new_rwc_coin = RWCs::where('from_address', $user->user_id)->sum('rwc_coin');

        return view('pages.User.dashboard', compact(
            'stakes',
            'roiPercent',
            'total_staked',
            'total_earn_coin',
            'total_balance',
            'total_coin',
            // 'usd',
            'total_usd',
            'tt',
            'totals',
            'total_wallet_balance',
            'new_rwc_coin'
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
        $user = auth()->user();
        $coinValueSetting = Setting::where('key', 'coin_value_usd')->first();
        //$coinValue = $coinValueSetting ? floatval($coinValueSetting->value) : 0;
        $coinValue = $coinValueSetting ? $coinValueSetting->value : 0;
        $userStakes = WalletBalance::where('from_address', $user->user_id)->latest()->take(10)->get();

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

            return redirect()->route('withdrawal')->with('success', 'Withdrawal request submitted successfully!');
        }
    }

    public function walletHistory(Request $request)
    {
        $user = auth()->user();
        $coinValueSetting = Setting::where('key', 'coin_value_usd')->first();
        //$coinValue = $coinValueSetting ? floatval($coinValueSetting->value) : 0;
        $coinValue = $coinValueSetting ? $coinValueSetting->value : 0;
        $userStakes = Stake::where('from_address', $user->user_id)->latest()->take(10)->get();
        return view('pages.User.walletHistory', compact('coinValueSetting', 'coinValue', 'userStakes'));
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

    public function buyRwc(Request $request)
    {
        $request->validate([
            'from_address' => 'required|string',
            'rwc_coins_to_buy' => 'required|numeric|min:0.000000000001',
        ]);

        $fromAddress = $request->from_address;
        $coinsToBuy = (float) $request->rwc_coins_to_buy;

        // Fetch wallet balance
        $wallet = WalletBalance::where('from_address', $fromAddress)->first();

        if (!$wallet) {
            return back()->withErrors(['wallet' => 'Wallet not found.']);
        }

        $currentAmount = (float) $wallet->amount;
        $currentDebited = (float) $wallet->amount_debited;

        // Check balance
        if ($coinsToBuy > $currentAmount) {
            return back()->withErrors(['rwc_coins_to_buy' => 'Insufficient wallet balance']);
        }

        // Deduct from amount and add to amount_debited
        $newAmount = round($currentAmount - $coinsToBuy, 8);
        $newDebited = round($currentDebited + $coinsToBuy, 8);

        // Update in DB
        WalletBalance::where('from_address', $wallet->from_address)->update([
            'amount' => $newAmount,
            'amount_debited' => $newDebited,
            'updated_at' => now(),
        ]);

        $coin_value_usd = DB::table('settings')
            ->where('key', 'coin_value_usd')
            ->value('value');

        $total_amount = WalletBalance::where('from_address', $wallet->from_address)->value('amount_debited');
        $total_rwc = ($total_amount * 100) / (float) $coin_value_usd;

        // Insert into RWCs table
        RWCs::create([
            'from_address' => $wallet->from_address,
            'rwc_coin' => $total_rwc,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Wallet balance updated successfully!');
    }

    public function withdrawal_referral(Request $request)
    {
        // Get the logged-in user
        $user = auth()->user();

        if ($request->isMethod('post')) {
            // Validate the input
            $request->validate([
                'amount_usd' => 'required|numeric|min:0.01|max:' . $user->referral_bonus,
            ]);

            $amount = $request->amount_usd;

            // Deduct from referral_bonus
            $user->referral_bonus -= $amount;
            $user->save();

            // Insert into referral_bonuses table
            DB::table('referral_bonuses')->insert([
                'user_id'          => $user->id,              // The current user withdrawing
                'referred_user_id' => $user->id,              // You can adjust if you have the referred user
                'bonus_amount'     => $amount,
                'created_at'       => now(),
                'updated_at'       => now(),
            ]);

            return redirect()->back()->with('status', 'Referral bonus withdrawn successfully!');
        }

        // For GET request, just show the page
        $referralBonus = $user->referral_bonus ?? 0;
        return view('pages.User.withdrawal_referral', compact('referralBonus'));
    }

}
