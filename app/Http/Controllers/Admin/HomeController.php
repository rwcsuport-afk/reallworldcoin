<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LoginActivity;
use App\Models\Payment;
use App\Models\Stake;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function dashboard(Request $request)
    {
        $active_user = User::where('user_type', 2)->where('active_status', 1)->count();
        $total_user = User::where('user_type', 2)->count();

        //$total_investment = Stake::sum('amount');
        $total_investment = Payment::sum('paid_amount');
        $total_coin = Stake::sum('coin');
        $total_roi = \App\Models\RoiLog::sum('amount');
        $current_roi = DB::table('settings')
            ->where('key', 'daily_roi_percent')
            ->value('value') ?? 0;

        //$investments = Stake::with('user')->latest()->limit(10)->get();
        $investments = Payment::with('user')->where('status', 'paid')->latest()->limit(10)->get();
        return view("pages.Admin.dashboard", compact("total_user", "active_user", "total_investment", "total_roi", "investments","current_roi","total_coin"));
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

}
