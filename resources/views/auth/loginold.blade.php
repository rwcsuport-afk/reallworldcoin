<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login - Real World Coin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #111827;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .login-card {
            background-color: #111827;
            color: white;
            padding: 30px;
            border-radius: 20px;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .form-control {
            background-color: #1f2937;
            border: none;
            color: #ffffff;
        }

        .form-control::placeholder {
            color: #9ca3af;
        }

        .btn-login {
            background-color: #e5efff;
            color: #000;
            font-weight: 600;
        }

        .btn-login:hover {
            background-color: #dbeafe;
        }

        a {
            color: #93c5fd;
            font-size: 0.9rem;
        }

        a:hover {
            text-decoration: underline;
        }

        .text-center small {
            color: #9ca3af;
        }

        .captcha-img {
            display: inline-block;
            margin-right: 10px;
        }
    </style>
</head>

<body>

    <div class="login-card">
        <div class="text-center mb-4">
            <h5 class="fw-bold">Real World Coin</h5>
            <h4 class="fw-semibold">Welcome back</h4>
        </div>

        {{-- Session Error --}}
        @if (session('error'))
            <div class="alert alert-danger">{{ session('error') }}</div>
        @endif

        {{-- Validation Errors --}}
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul class="mb-0">
                    @foreach ($errors->all() as $error)
                        <li class="small">{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="mb-3">
                <input type="email" name="email" class="form-control" placeholder="Email" required
                    value="{{ old('email') }}" />
            </div>
            <div class="mb-3">
                <input type="password" name="password" class="form-control" placeholder="Password" required />
            </div>
            <div class="mb-3 text-end">
                <a href="{{ route('forgot.password') }}">Forgot password?</a>
            </div>

            {{-- CAPTCHA --}}
            <div class="mb-3">
                <label for="captcha" class="form-label d-block text-white">Captcha</label>
                <div class="d-flex align-items-center mb-2">
                    <span class="captcha-img" id="captcha-img">{!! captcha_img() !!}</span>
                    <button type="button" class="btn btn-sm btn-outline-light" id="reload">↻</button>
                </div>
                <input type="text" name="captcha" class="form-control" placeholder="Enter captcha" required>
                @if ($errors->has('captcha'))
                    <span class="text-danger small">{{ $errors->first('captcha') }}</span>
                @endif
            </div>

            <div class="d-grid mb-3">
                <button type="submit" class="btn btn-login">Log In</button>
            </div>

            <div class="text-center">
                <a href="{{ route('register') }}">Don't have an account? Sign up</a>
            </div>
        </form>
    </div>

    {{-- Registration Success Modal --}}
    @if (session('registered_user'))
        <div class="modal fade" id="registeredUserModal" tabindex="-1" aria-labelledby="registeredUserLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-white border-0 rounded-4 shadow-lg">
                    <div class="modal-header border-0">
                        <h5 class="modal-title" id="registeredUserLabel">🎉 Registration Successful!</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Name:</strong> {{ session('registered_user.name') }}</p>
                        <p><strong>Email:</strong> {{ session('registered_user.email') }}</p>
                        <p><strong>Referral ID:</strong> {{ session('registered_user.referral_id') ?? 'N/A' }}</p>
                        <p><strong>Unique ID:</strong> {{ session('registered_user.unique_id') }}</p>
                        <hr>
                        <p class="text-success">You can now log in to your Real World Coin account.</p>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    @endif

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Reload captcha
        document.getElementById('reload').onclick = function() {
            fetch('/reload-captcha')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('captcha-img').innerHTML = data.captcha;
                });
        };

        // Show success popup
        @if (session('registered_user'))
            const successPopup = new bootstrap.Modal(document.getElementById('registeredUserModal'));
            successPopup.show();

            // Optional: Auto-close after 5 seconds
            setTimeout(() => {
                successPopup.hide();
            }, 5000);
        @endif
    </script>
</body>

</html>
