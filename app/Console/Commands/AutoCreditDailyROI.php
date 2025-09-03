<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Stake;
use App\Models\Setting;
use App\Models\RoiLog;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class AutoCreditDailyROI extends Command
{
    protected $signature = 'roi:credit-daily';
    protected $description = 'Auto-credit daily ROI to all users based on their stakes';

    public function handle()
    {
        $roiPercent = Setting::getValue('daily_roi_percent', 1.0); // Default 1%
        $stakes = Stake::with('user')->get();

        foreach ($stakes as $stake) {
            $user = $stake->user;
            if (!$user) continue;

            $roi = $stakes->sum('coin') * ($roiPercent / 100); // 1-day ROI
            dd($roi);
            // Avoid duplicate ROI credit for today
            $alreadyCredited = RoiLog::where('user_id', $user->id)
                ->whereDate('credited_date', today())
                ->exists();

            if ($alreadyCredited) {
                continue; // skip if already credited today
            }

            DB::transaction(function () use ($user, $roi) {
                $user->increment('wallet_balance', $roi);
            });

            // ✅ Log the ROI credit
            RoiLog::create([
                'user_id' => $user->id,
                'amount' => $roi,
                'credited_date' => today(),
            ]);
        }

        $this->info('Daily ROI credited and logged for all users.');
    }
}
