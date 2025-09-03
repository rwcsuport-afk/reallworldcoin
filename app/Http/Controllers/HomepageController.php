<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\Setting;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function homepage(Request $request)
    {
        $notifications = Notification::orderBy('created_at', 'desc')->take(5)->get();
        $presaleEnd = Setting::where('key', 'presale_end_date')->value('value');
        $coinValue = Setting::where('key', 'coin_value_usd')->value('value');

        return view('homepage', compact('notifications', 'presaleEnd', 'coinValue'));
    }
    
    public function oldhomepage(Request $request)
    {
        $notifications = Notification::latest()->take(5)->get();
        $presaleEnd = Setting::where('key', 'presale_end_date')->value('value');
        $coinValue = Setting::where('key', 'coin_value_usd')->value('value');

        return view('homepageOld', compact('notifications', 'presaleEnd', 'coinValue'));
    }

    public function about(Request $request)
    {
        $notifications = Notification::latest()->take(5)->get();
        
        return view('about', compact('notifications'));
    }

    public function contact(Request $request)
    {
        return view('contact');
    }
}
