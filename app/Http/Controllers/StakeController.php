<?php

namespace App\Http\Controllers;

use App\Models\ReferralBonus;
use App\Models\ReferralSetting;
use App\Models\Stake;
use App\Models\User;
use Illuminate\Http\Request;

class StakeController extends Controller
{
    public function store(Request $request)
    {
        // Validate how many coins user wants to buy
        $request->validate([
            'coins_to_buy' => 'required|integer|min:1',
        ]);

        $user = auth()->user();
        $coinValue = \App\Models\Setting::where('key', 'coin_value_usd')->value('value') ?? 0;
        //$totalAmount = $request->coins_to_buy * $coinValue;
        Stake::create([
            'user_id'    => $user->id,
            'coin'       => $request->coins_to_buy,
            //'amount'     => $totalAmount,
            'amount' => $request->coins_to_buy,
            'start_date' => now(),
        ]);

        $stakeCount = Stake::where('user_id', $user->id)->count();
        if ($stakeCount === 1 && $user->referral_id) {
            $alreadyGiven = ReferralBonus::where('referred_user_id', $user->id)->exists();

            if (! $alreadyGiven) {
                $referrer = User::where('unique_id', $user->referral_id)->first();

                if ($referrer) {
                    $settings = ReferralSetting::first();
                    $bonusPercent = $settings ? $settings->bonus_percent : 5;

                    $bonusAmount = $request->coins_to_buy * ($bonusPercent / 100);
                    $referrer->referral_bonus += $bonusAmount;
                    $referrer->save();
                    ReferralBonus::create([
                        'user_id' => $referrer->id,
                        'referred_user_id' => $user->id,
                        'bonus_amount' => $bonusAmount,
                    ]);
                }
            }
        }
        //return redirect()->away('https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp');
        //return back()->with('success', 'Coins purchased and staking successful!');
        return redirect()->away('trust://');
    }

}
