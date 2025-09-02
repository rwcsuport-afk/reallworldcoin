<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RoiLog;
use Illuminate\Http\Request;

class ROIlogController extends Controller
{
    public function index()
    {
        $logs = RoiLog::with('user')->latest()->paginate(20);
        return view('pages.Admin.roi_log', compact('logs'));
    }
}
