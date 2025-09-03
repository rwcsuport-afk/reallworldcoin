<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LoginActivity;
use App\Models\Notification;
use App\Models\ReferralSetting;
use App\Models\Setting;
use App\Models\Stake;
use App\Models\User;
use App\Models\WalletAddress;
use App\Models\Withdrawan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function settings()
    {
        $roi = Setting::getValue('daily_roi_percent', 1.0);
        $coinValue = Setting::getCoinValue();
        $bonus = ReferralSetting::first();
        $presaleEndDate = Setting::getValue('presale_end_date', now()->toDateString());
        
        return view('pages.Admin.settings', compact('roi', 'bonus', 'coinValue', 'presaleEndDate'));
    }

    public function updateSettings(Request $request)
    {
        $request->validate([
            'daily_roi_percent' => 'required|numeric|min:0.1|max:100',
            'coin_value_usd' => 'required|numeric|min:0.001',
        ]);

        Setting::setValue('daily_roi_percent', $request->daily_roi_percent);
        Setting::setCoinValue($request->coin_value_usd);

        return back()->with('success', 'Daily ROI percentage updated!');
    }

    public function viewAllUsers(Request $request)
    {
        $all_users = User::with('stakes')->where('user_type', 2)->get();
        return view('pages.Admin.viewuser', compact('all_users'));
    }

    public function updateReferralBonus(Request $request)
    {
        $request->validate([
            'bonus_percent' => 'required|numeric|min:0|max:100',
        ]);

        ReferralSetting::updateOrCreate([], ['bonus_percent' => $request->bonus_percent]);

        return redirect()->back()->with('success', 'Referral bonus updated successfully.');
    }

    public function activityReports(Request $request) 
    {
        $activities = LoginActivity::with('user')->latest()->get();

        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pages.Admin.activity_reports_pdf', compact('activities'));

        return $pdf->download('login_activity_report.pdf');
    }

    public function investmentReports(Request $request)
    {
        $investment = Stake::with('user')->latest()->get();

        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pages.Admin.investment_reports_pdf', compact('investment'));

        return $pdf->download('investment_report.pdf');
    }

    public function showUserGrowthForm(User $user)
    {
        return view('admin.user-growth-form', compact('user'));
    }

    public function updateUserGrowth(Request $request, User $user)
    {
        $request->validate([
            'custom_growth_percent' => 'nullable|numeric|min:0|max:100',
        ]);

        DB::table('users')
            ->where('id', $user->id)
            ->update([
                'wallet_balance' => DB::raw("wallet_balance + " . floatval($request->custom_growth_percent))
            ]);

        return redirect()->route('view.all.users')->with('success', 'Growth % updated for ' . $user->name);
    }

    public function sendNotification(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Insert into notifications table
        Notification::create([
            'name' => $request->name,
        ]);

        return back()->with('success', 'Notification updated successfully.');
    }

    public function updatePresale(Request $request)
    {
        $request->validate([
            'presale_end_date' => 'required|date',
        ]);

        DB::table('settings')->updateOrInsert(
            ['key' => 'presale_end_date'],
            ['value' => $request->presale_end_date]
        );

        return back()->with('presale_success', 'Presale end date updated successfully.');
    }

    public function withdrawalRequest(Request $request)
    {
        //$all_users = User::with('stakes')->where('user_type', 2)->whereIn('withdrawan_status', [1, 2, 3])->get();
        $all_users = Withdrawan::with('user')->whereIn('status', [1, 2, 3])->get();
        return view('pages.Admin.withdrawal_request', compact('all_users'));
    }

    public function acceptWithdrawal($id)
    {
        $user = Withdrawan::findOrFail($id);
        $user->status = 2; // Accepted
        $user->save();

        return back()->with('success', 'Withdrawal request accepted.');
    }

    public function rejectWithdrawal($id)
    {
        $user = Withdrawan::findOrFail($id);
        $user->status = 3; // Rejected
        $user->save();

        return back()->with('error', 'Withdrawal request rejected.');
    }

    public function walletAddress(Request $request)
    {
        $all_users = WalletAddress::with('user')->get();
        return view('pages.Admin.wallet_address', compact('all_users'));
    }
}
