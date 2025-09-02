<!DOCTYPE html>
<html>
<head>
    <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif;">
    <h2>Hi {{ $user->name }},</h2>
    <p>You requested to reset your password for Real World Coin.</p>
    <p>Click the button below to reset it:</p>

    <a href="{{ url('/reset-password?token=' . $token . '&email=' . urlencode($user->email)) }}"
       style="display: inline-block; background-color: #0d6efd; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Reset Password
    </a>

    <p>If you didn’t request this, you can ignore this email.</p>
    <p>Thanks,<br>Real World Coin Team</p>
</body>
</html>
