<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Profile Panel</title>

    <!-- Bootstrap & Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <style>
        body {
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: #e5e7eb;
            margin: 0;
            padding: 0;
            font-family: "Segoe UI", sans-serif;
        }

        .main-wrapper {
            display: flex;
            min-height: 100vh;
        }

        /* Sidebar */
        .sidebar {
            background: #111827;
            width: 250px;
            padding: 20px;
            z-index: 1050;
            box-shadow: 3px 0 15px rgba(0, 0, 0, 0.5);
        }

        .sidebar a {
            color: #9ca3af;
            text-decoration: none;
            display: block;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 6px;
            transition: 0.3s;
        }

        .sidebar a:hover,
        .sidebar a.active {
            background: linear-gradient(135deg, #2563eb, #3b82f6);
            color: #fff;
            font-weight: 600;
            box-shadow: 0 0 8px #3b82f6;
        }

        /* Dashboard Content */
        .dashboard-card {
            background: transparent;
            padding: 25px;
            flex-grow: 1;
        }

        /* Profile Box */
        .profile-box {
            background: #1f2937;
            padding: 25px;
            border-radius: 16px;
            color: #d1d5db;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.2);
        }

        .profile-box h5 {
            color: #fff;
        }

        .profile-box strong {
            color: #93c5fd;
        }

        /* Avatar */
        .profile-avatar {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: 3px solid #2563eb;
            box-shadow: 0 0 15px rgba(37, 99, 235, 0.7);
        }

        /* Bottom Nav */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #111827;
            border-top: 1px solid #1f2937;
            display: flex;
            justify-content: space-around;
            padding: 12px 0;
            z-index: 1000;
        }

        .bottom-nav a {
            text-decoration: none;
            color: #9ca3af;
            font-size: 0.9rem;
            text-align: center;
            transition: 0.3s;
        }

        .bottom-nav a.active,
        .bottom-nav a:hover {
            color: #3b82f6;
        }

        /* Mobile Sidebar */
        .mobile-sidebar {
            position: fixed;
            top: 0;
            left: -250px;
            height: 100vh;
            transition: left 0.3s ease-in-out;
        }

        .mobile-sidebar.show {
            left: 0;
        }

        @media (min-width: 768px) {
            .mobile-sidebar {
                position: static;
                height: auto;
                left: 0;
                transition: none;
            }

            .bottom-nav {
                display: none;
            }
        }

        @media (max-width: 767px) {
            .dashboard-card {
                padding-bottom: 80px;
            }
        }
    </style>
</head>

<body>

    <div class="main-wrapper">
        <!-- Sidebar -->
        @include('pages.layouts.sidebar')

        <!-- Dashboard Content -->
        <div class="dashboard-card">
            <!-- Mobile Header -->
            <div class="d-md-none d-flex justify-content-between align-items-center mb-4">
                <i class="bi bi-list fs-4" id="openSidebar" style="cursor:pointer;"></i>
                <h5 class="mb-0 fw-bold text-light">Profile</h5>
                <div style="width: 24px;"></div>
            </div>

            <h4 class="fw-bold mb-3 text-light">User Profile</h4>

            <div class="profile-box">
                <div class="text-center mb-4">
                    <!-- User Avatar -->
                    <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" class="profile-avatar"
                        alt="User">

                    <!-- User Info -->
                    <h5 class="mt-3">{{ Auth::user()->name }}</h5>
                    <p class="text small">Unique ID: {{ Auth::user()->unique_id }}</p>
                </div>

                <hr class="bg-secondary">

                <div class="mb-3">
                    <strong>Email:</strong><br>
                    <span class="text-light small">{{ Auth::user()->email }}</span>
                </div>

                <div class="mb-3">
                    <strong>Referral ID:</strong><br>
                    <span class="text-light small">{{ Auth::user()->referral_id ?? 'N/A' }}</span>
                </div>

                <div class="mb-3">
                    <strong>User Type:</strong><br>
                    <span class="text-light small">{{ Auth::user()->user_type == 1 ? 'Admin' : 'User' }}</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav d-md-none">
        <a href="{{ route('user.dashboard') }}"><i class="bi bi-house-door-fill d-block"></i>Home</a>
        <a href="{{ route('stake') }}"><i class="bi bi-file-earmark-text d-block"></i>Staking</a>
        <a href="{{ route('referral') }}"><i class="bi bi-gear-fill d-block"></i>Referrals</a>
        <a href="{{ route('profile') }}" class="active"><i class="bi bi-person-fill d-block"></i>Profile</a>
    </div>

    <!-- Sidebar Toggle Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.getElementById("openSidebar").addEventListener("click", function() {
            document.getElementById("sidebar").classList.add("show");
        });

        document.getElementById("closeSidebar")?.addEventListener("click", function() {
            document.getElementById("sidebar").classList.remove("show");
        });
    </script>
</body>

</html>
