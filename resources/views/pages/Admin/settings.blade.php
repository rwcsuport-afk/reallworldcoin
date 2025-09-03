<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Admin Panel - ROI Settings</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">

    <style>
        body {
            background-color: #cfd8dc;
            margin: 0;
            padding: 0;
        }

        .main-wrapper {
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            background-color: #111827;
            color: white;
            width: 250px;
            padding: 20px;
            z-index: 1050;
        }

        .sidebar h5 {
            margin-bottom: 20px;
        }

        .sidebar a {
            color: #9ca3af;
            text-decoration: none;
            display: block;
            padding: 8px 0;
        }

        .sidebar a.active {
            color: white;
            font-weight: bold;
        }

        .dashboard-card {
            background-color: #111827;
            color: white;
            padding: 20px;
            flex-grow: 1;
        }

        .section-title {
            font-weight: 600;
            margin-bottom: 15px;
        }

        .card-box {
            background-color: #1f2937;
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 15px;
        }

        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #111827;
            border-top: 1px solid #1f2937;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            z-index: 1000;
        }

        .bottom-nav a {
            text-decoration: none;
            color: #9ca3af;
            font-size: 0.85rem;
            text-align: center;
        }

        .bottom-nav a.active {
            color: white;
        }

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

            .dashboard-card {
                max-width: 100%;
                border-radius: 0;
            }
        }

        @media (max-width: 767px) {
            .dashboard-card {
                max-width: 430px;
                margin: auto;
                border-radius: 20px;
                padding-bottom: 80px;
            }
        }
    </style>
</head>

<body>

    <div class="main-wrapper">
        <!-- Sidebar -->
        @include('pages.Admin.layouts.sidebar')

        <!-- Dashboard Content -->
        <div class="dashboard-card">
            <!-- Mobile Header -->
            <div class="d-md-none d-flex justify-content-between align-items-center mb-4">
                <i class="bi bi-list fs-4" id="openSidebar" style="cursor:pointer;"></i>
                <h5 class="mb-0 fw-bold">Admin Panel</h5>
                <div style="width: 24px;"></div>
            </div>

            <!-- ROI Section -->
            <div class="section-title">ROI Settings</div>
            <div class="card-box text-white">
                @if (session('success'))
                    <div class="alert alert-success">{{ session('success') }}</div>
                @endif

                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form method="POST" action="{{ route('admin.settings.update') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="daily_roi_percent" class="form-label">Daily ROI %</label>
                        <input type="number" name="daily_roi_percent" step="0.01" min="0.1" max="100"
                            class="form-control" value="{{ $roi }}" required>
                    </div>
                    <div class="mb-3">
                        <label for="coin_value_usd" class="form-label">1 RWC Value (cents)</label>
                        <input type="number" name="coin_value_usd" step="0.0001" min="0.0001" class="form-control"
                            value="{{ $coinValue }}" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Update ROI</button>
                </form>
            </div>

            <!-- Referral Bonus Section -->
            <div class="section-title">Referral Bonus Settings</div>

            <div class="card-box text-white">

                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <form method="POST" action="{{ route('admin.referral.bonus.update') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="bonus_percent" class="form-label">Referral Bonus %</label>
                        <input type="number" name="bonus_percent" step="0.1" min="0" max="100"
                            class="form-control" value="{{ $bonus->bonus_percent ?? 5 }}" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Update Bonus</button>
                </form>
            </div>

            <div class="section-title">Presale End Date</div>

            <div class="card-box text-white mt-3">
                @if (session('presale_success'))
                    <div class="alert alert-success">{{ session('presale_success') }}</div>
                @endif

                <form method="POST" action="{{ route('admin.presale.update') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="presale_end_date" class="form-label">Presale End Date</label>
                        <input type="date" name="presale_end_date" class="form-control"
                            value="{{ $presaleEndDate }}" required>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Update Presale Date</button>
                </form>
            </div>

        </div>
    </div>

    <!-- Bottom Nav for Mobile -->
    <div class="bottom-nav d-md-none">
        <a href="{{ route('admin.dashboard') }}">
            <i class="bi bi-house-door-fill d-block"></i>
            Dashboard
        </a>
        <a href="{{ route('view.all.users') }}">
            <i class="bi bi-person-fill d-block"></i>
            Users
        </a>
        <a href="{{ route('admin.settings') }}" class="active">
            <i class="bi bi-gear-fill d-block"></i>
            Settings
        </a>
        <a href="{{ route('admin.roi.logs') }}">
            <i class="bi bi-file-earmark-text d-block"></i>
            Roi Logs
        </a>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.getElementById("openSidebar").addEventListener("click", function() {
            document.getElementById("sidebar").classList.add("show");
        });

        document.getElementById("closeSidebar").addEventListener("click", function() {
            document.getElementById("sidebar").classList.remove("show");
        });
    </script>
</body>

</html>
