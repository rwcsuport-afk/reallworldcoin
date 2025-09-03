<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\UserAgentHelper;
use App\Http\Controllers\Controller;
use App\Models\LoginActivity;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use PHPMailer\PHPMailer\PHPMailer;
use Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if ($request->isMethod('get')) {
            return view('auth.login'); // Show login form
        }
        // POST method - process login
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
            'captcha'  => 'required|captcha',
        ]);
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            Auth::user()->update(['active_status' => 1]);
            $os = UserAgentHelper::getOS($request->userAgent());
            if (Auth::user()->user_type == 2) { 
                $loginActivity = new LoginActivity();
                $loginActivity->login_id = Auth::User()->id;
                $loginActivity->user_agent = $request->userAgent();
                $loginActivity->os = $os;
                $loginActivity->ip = request()->ip();
                $loginActivity->login_at = Carbon::now();
                $loginActivity->save();
                session(['loginActivityID' => $loginActivity->id]);
                return redirect()->route('user.dashboard');
            } elseif (Auth::user()->user_type == 1) { 
                $loginActivity = new LoginActivity();
                $loginActivity->login_id = Auth::User()->id;
                $loginActivity->user_agent = $request->userAgent();
                $loginActivity->os = $os;
                $loginActivity->ip = request()->ip();
                $loginActivity->login_at = Carbon::now();
                $loginActivity->save();
                return redirect()->route('admin.dashboard');
            } else {
                Auth::logout();
                return redirect()->route('login')->withErrors(['access' => 'Unauthorized user type']);
            }
        } else {
                return redirect()->route('login')->withErrors(['email' => 'Invalid credentials.']);
        }
    }

    public function register(Request $request)
    {
        if ($request->isMethod('get')) {
            $referralCode = $request->query('referral_link');
            return view('auth.register', compact('referralCode'));
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',
        ]);

        $referrer = null;

        if ($request->filled('referral_code')) {
            $referrer = User::where('unique_id', $request->referral_code)->first();
            if (!$referrer) {
                return back()->withErrors(['referral_code' => 'Referral code not valid'])->withInput();
            }
        }
        $uniqueFormId = $this->generateUniqueFormId();
        $user = User::create([
            'name'        => $request->name,
            'email'       => $request->email,
            'password'    => Hash::make($request->password),
            'user_type'   => 2,
            'unique_id'   => $uniqueFormId,
            'referral_id' => $request->referral_code,
        ]);

        return redirect()->route('login')->with('registered_user', [
            'name' => $user->name,
            'email' => $user->email,
            'unique_id' => $user->unique_id,
            'referral_id' => $user->referral_id,
        ]);
    }

    public function checkReferral(Request $request)
    {
        $code = $request->query('code');
        $exists = User::where('unique_id', $code)->exists();

        return response()->json(['valid' => $exists]);
    }

    public static function generateUniqueFormId()
    {
        $date = date('Y');
        $prefix = 'RWC' . $date;

        do {
            // Generate a random 5-digit number (padded with leading zeros if needed)
            $random = str_pad(mt_rand(0, 99999), 5, '0', STR_PAD_LEFT);

            $value = $prefix . $random;
        } while (User::where('unique_id', $value)->exists());

        return $value;
    }

    public function forgotPassword(Request $request)
    {
        if ($request->isMethod('get')) {
            return view('auth.forgotPassword');
        }

        $request->validate([
            'email' => 'required|email|exists:users,email',
        ]);

        $user = User::where('email', $request->email)->first();

        // Generate a token
        $token = \Illuminate\Support\Str::random(64);
        DB::table('password_resets')->updateOrInsert(
            ['email' => $user->email],
            [
                'email' => $user->email,
                'token' => $token,
                'created_at' => now()
            ]
        );

        // Send reset email using PHPMailer
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = env('MAIL_HOST');
            $mail->SMTPAuth = true;
            $mail->Username = env('MAIL_USERNAME');
            $mail->Password = env('MAIL_PASSWORD');
            $mail->SMTPSecure = env('MAIL_ENCRYPTION', 'tls');
            $mail->Port = env('MAIL_PORT');

            $mail->setFrom(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));
            $mail->addAddress($user->email);

            $mail->isHTML(true);
            $mail->Subject = 'Password Reset Link - Real World Coin';

            $resetLink = url('/reset-password/' . $token);

            $mail->Body = "
                <h3>Hello {$user->name},</h3>
                <p>You requested a password reset for your Real World Coin account.</p>
                <p><strong>Click below to reset your password:</strong></p>
                <p><a href='{$resetLink}' style='padding: 10px 20px; background-color: #4F46E5; color: white; border-radius: 5px; text-decoration: none;'>Reset Password</a></p>
                <br>
                <p>If you did not request this, please ignore this email.</p>
                <p>Thanks,<br>Real World Coin Team</p>
            ";

        //     $mail->Body = view('emails.resetPassword', [
        //     'token' => $token,
        //     'user' => $user
        // ])->render();

            $mail->send();
            // return redirect()->back()->with('status', 'We have sent you a password reset link!');
            return redirect()->route('reset.password')->with('status', 'We have sent you a password reset link!');
        } catch (Exception $e) {
            return back()->withErrors(['email' => 'Failed to send email. Error: ' . $mail->ErrorInfo]);
        }
    }

    public function resetPassword(Request $request)
    {
        if ($request->isMethod('get')) {
            return view('auth.resetPassword', [
                'token' => $request->token,
                'email' => $request->email,
            ]);
        }

        $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|min:6|confirmed',
            'token' => 'required'
        ]);

        $reset = DB::table('password_resets')
            ->where('email', $request->email)
            ->where('token', $request->token)
            ->first();

        if (!$reset) {
            return back()->withErrors(['token' => 'Invalid or expired token.']);
        }

        $user = User::where('email', $request->email)->first();
        $user->password = bcrypt($request->password);
        $user->save();

        DB::table('password_resets')->where('email', $request->email)->delete();

        return redirect()->route('login')->with('status', 'Password has been reset. You can now log in.');
    }

}
