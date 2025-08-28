<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Forgot Password - Real World Coin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #111827;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .reset-card {
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

        .btn-reset {
            background-color: #e5efff;
            color: #000;
            font-weight: 600;
        }

        .btn-reset:hover {
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
    </style>
</head>

<body>

    <div class="reset-card">
        <div class="text-center mb-4">
            <h5 class="fw-bold">Real World Coin</h5>
            <h4 class="fw-semibold">Reset Password</h4>
        </div>

        @if (session('status'))
            <div class="alert alert-success small">
                {{ session('status') }}
            </div>
        @endif

        @if ($errors->any())
            <div class="alert alert-danger small">
                <ul class="mb-0">
                    @foreach ($errors->all() as $error)
                        <li class="small">{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="{{ route('forgot.password') }}">
            @csrf
            <div class="mb-3">
                <input type="email" name="email" class="form-control" placeholder="Enter your email" required
                    value="{{ old('email') }}" />
            </div>

            <div class="d-grid mb-3">
                <button type="submit" class="btn btn-reset">Send Reset Link</button>
            </div>

            <div class="text-center">
                <a href="{{ route('login') }}">Back to Login</a>
            </div>
        </form>
    </div>

</body>

</html>
