<!DOCTYPE html>
<html>
<head>
    <title>Reset Password</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="background: #111827; display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div class="card p-4 text-white bg-dark shadow-lg" style="width: 100%; max-width: 400px;">
        <h4 class="mb-3 text-center">Reset Password</h4>

        @if ($errors->any())
            <div class="alert alert-danger small">
                <ul class="mb-0">
                    @foreach ($errors->all() as $error)
                        <li class="small">{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="{{ route('reset.password') }}">
            @csrf
            {{-- <input type="hidden" name="token" value="{{ $token }}">
            <input type="hidden" name="email" value="{{ $email }}"> --}}

            <div class="mb-3">
                <input type="password" name="password" class="form-control" placeholder="New Password" required>
            </div>

            <div class="mb-3">
                <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm Password" required>
            </div>

            <div class="d-grid">
                <button type="submit" class="btn btn-primary">Update Password</button>
            </div>
        </form>
    </div>
</body>
</html>
