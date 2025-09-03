<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomepageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController as ControllersHomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\StakeController;
use Illuminate\Support\Facades\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
     return redirect('/homepage');
});

Route::get('/reload-captcha', function () {
    return response()->json(['captcha' => captcha_img()]);
});

Route::get('/buy-token', function () {
    return view('buy-tokens');
});

Route::match(['get', 'post'],'/login', [AuthController::class, 'login'])->name('login');
Route::match(['get', 'post'],'/register', [AuthController::class, 'register'])->name('register');
Route::get('/check-referral', [AuthController::class, 'checkReferral']);
Route::match(['get', 'post'],'/forgot-password', [AuthController::class, 'forgotPassword'])->name('forgot.password');
Route::match(['get', 'post'], '/reset-password', [AuthController::class, 'resetPassword'])->name('reset.password');
Route::get('homepage', [HomepageController::class, 'homepage'])->name('homepage');
Route::get('oldhomepage', [HomepageController::class, 'oldhomepage'])->name('oldhomepage');
Route::get('/about', [HomepageController::class, 'about'])->name('about');
Route::get('/contact', [HomepageController::class, 'contact'])->name('contact');

Route::middleware(['auth'])->group(function () {
    Route::get('/user/dashboard', [DashboardController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/logout', [DashboardController::class, 'logout'])->name('logout');
    Route::get('/referral', [DashboardController::class,'referral'])->name('referral');
    Route::get('/stake', [DashboardController::class,'stake'])->name('stake');
    Route::post('/stake', [StakeController::class, 'store'])->name('stake.store');
    Route::get('/profile', [DashboardController::class,'profile'])->name('profile');
    Route::match(['get', 'post'],'/withdrawal', [DashboardController::class, 'withdrawal'])->name('withdrawal');
    Route::get('/walletHistory', [DashboardController::class,'walletHistory'])->name('walletHistory');
    Route::get('/profit-reports', [DashboardController::class,'profitReports'])->name('profitReports');
    Route::match(['get', 'post'],'/wallet-addresses', [DashboardController::class, 'walletAddress'])->name('walletAddresses');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [HomeController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/adminLogout', [HomeController::class, 'logout'])->name('Admin.logout');
    Route::get('/admin/settings', [\App\Http\Controllers\Admin\AdminController::class, 'settings'])->name('admin.settings');
    Route::post('/admin/settings', [\App\Http\Controllers\Admin\AdminController::class, 'updateSettings'])->name('admin.settings.update');
    Route::get('/view-all-users', [\App\Http\Controllers\Admin\AdminController::class,'viewAllUsers'])->name('view.all.users');
    Route::post('/admin/referral-bonus/update', [\App\Http\Controllers\Admin\AdminController::class, 'updateReferralBonus'])->name('admin.referral.bonus.update');
    Route::get('/admin/roi-logs', [App\Http\Controllers\Admin\ROIlogController::class, 'index'])->name('admin.roi.logs');
    Route::get('/activity-reports', [\App\Http\Controllers\Admin\AdminController::class,'activityReports'])->name('activity.reports');
    Route::get('/investment-reports', [\App\Http\Controllers\Admin\AdminController::class,'investmentReports'])->name('investment.reports');
    Route::get('/withdrawal-requests', [\App\Http\Controllers\Admin\AdminController::class,'withdrawalRequest'])->name('withdrawal.requests');
    Route::post('/admin/withdrawal/accept/{id}', [\App\Http\Controllers\Admin\AdminController::class, 'acceptWithdrawal'])->name('admin.withdrawal.accept');
    Route::post('/admin/withdrawal/reject/{id}', [\App\Http\Controllers\Admin\AdminController::class, 'rejectWithdrawal'])->name('admin.withdrawal.reject');
    Route::get('/wallet-address', [\App\Http\Controllers\Admin\AdminController::class,'walletAddress'])->name('walletAddress');

    Route::get('/admin/growth/user/{user}', [\App\Http\Controllers\Admin\AdminController::class, 'showUserGrowthForm'])->name('admin.growth.user.form');
    Route::post('/admin/growth/user/{user}', [\App\Http\Controllers\Admin\AdminController::class, 'updateUserGrowth'])->name('admin.growth.user.update');
    Route::post('/admin/send-notification', [\App\Http\Controllers\Admin\AdminController::class, 'sendNotification'])->name('admin.notification.send');
    Route::post('/admin/presale-update', [\App\Http\Controllers\Admin\AdminController::class, 'updatePresale'])->name('admin.presale.update');
});

Route::get('/admin/download-report/{filename}', function ($filename) {
    $path = storage_path("app/reports/{$filename}");
    if (!file_exists($path)) abort(404);
    return response()->download($path);
})->middleware(['auth', 'admin'])->name('admin.download.report');

/** Route for CoinRemitter Payments */
Route::post('/create-payment', [PaymentController::class, 'createPayment'])->name('create.payment');
Route::post('/coinremitter/webhook', [PaymentController::class, 'handleWebhook'])->name('coinremitter.webhook');

Route::get('/payment-success', [PaymentController::class, 'success'])->name('payment.success');
Route::get('/payment-failed', [PaymentController::class, 'failed'])->name('payment.failed');



