<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Register - Real World Coin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #111827;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .register-card {
            background-color: #111827;
            color: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            width: 100%;
            max-width: 420px;
            margin: 20px auto;
        }

        .form-control {
            background-color: #1f2937;
            border: none;
            color: #ffffff;
        }

        .form-control::placeholder {
            color: #9ca3af;
        }

        .btn-register {
            background-color: #e5efff;
            color: #000;
            font-weight: 600;
        }

        .btn-register:hover {
            background-color: #dbeafe;
        }

        a {
            color: #93c5fd;
            font-size: 0.9rem;
        }

        a:hover {
            text-decoration: underline;
        }

        #referral-status {
            font-size: 0.9rem;
        }

        #referral-status.valid {
            color: #4ade80;
        }

        #referral-status.invalid {
            color: #f87171;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
            <div class="register-card">
                <div class="text-center mb-4">
                    <h5 class="fw-bold">Real World Coin</h5>
                    <h4 class="fw-semibold">Create an account</h4>
                </div>

                {{-- Display Errors --}}
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                @if (session('success'))
                    <div class="alert alert-success">{{ session('success') }}</div>
                @endif

                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="mb-3">
                        <input type="text" name="name" class="form-control" placeholder="Full Name" value="{{ old('name') }}" required />
                    </div>
                    <div class="mb-3">
                        <input type="email" name="email" class="form-control" placeholder="Email" value="{{ old('email') }}" required />
                    </div>
                    <div class="mb-3">
                        <input type="password" name="password" class="form-control" placeholder="Password" required />
                    </div>
                    <div class="mb-3">
                        <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm Password" required />
                    </div>
                    <div class="mb-2 position-relative">
                        <input type="text"
                               name="referral_code"
                               id="referral_code"
                               class="form-control @error('referral_code') is-invalid @enderror"
                               placeholder="Referral Code (Optional)"
                               value="{{ old('referral_code', $referralCode ?? '') }}"
                        />
                        <div id="referral-status" class="mt-1"></div>
                        @error('referral_code')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="d-grid mb-3">
                        <button type="submit" class="btn btn-register">Sign Up</button>
                    </div>
                    <div class="text-center">
                        <a href="{{ route('login') }}">Already have an account? Log in</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const referralInput = document.getElementById('referral_code');
        const statusEl = document.getElementById('referral-status');

        const checkReferral = (code) => {
            if (!code) {
                statusEl.textContent = '';
                statusEl.className = '';
                return;
            }

            fetch(`/check-referral?code=${encodeURIComponent(code)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.valid) {
                        statusEl.textContent = 'Referral matched ✅';
                        statusEl.className = 'valid';
                    } else {
                        statusEl.textContent = 'Referral not found ❌';
                        statusEl.className = 'invalid';
                    }
                })
                .catch(() => {
                    statusEl.textContent = 'Error checking referral';
                    statusEl.className = 'invalid';
                });
        };

        // Listen for manual input
        referralInput.addEventListener('input', function () {
            checkReferral(this.value.trim());
        });

        // Auto-check if field is pre-filled
        if (referralInput.value.trim()) {
            checkReferral(referralInput.value.trim());
        }
    });
</script>
</body>
</html>
