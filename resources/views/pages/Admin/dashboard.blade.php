<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Admin Panel - Dashboard</title>

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

        .user-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .user-item img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .user-info {
            flex-grow: 1;
        }

        .slider-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .report-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1f2937;
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 10px;
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

            <!-- Content -->
            <div class="section-title">Overview</div>
            <div class="row g-2 mb-3">
                <div class="col-sm-6">
                    <div class="card card-body bg-dark text-white d-flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="Active Users"
                            style="width: 24px; height: 24px; margin-right: 10px;">
                        <div>
                            <div class="small">Total Active Users</div>
                            <div class="fs-5 fw-bold text-center">{{ $active_user }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card card-body bg-dark text-white d-flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Total Users"
                            style="width: 24px; height: 24px; margin-right: 10px;">
                        <div>
                            <div class="small">Total Users</div>
                            <div class="fs-5 fw-bold text-center">{{ $total_user }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-2 mb-3">
                <div class="col-sm-6">
                    <div class="card card-body bg-dark text-white d-flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Investments"
                            style="width: 24px; height: 24px; margin-right: 10px;">
                        <div>
                            <div class="small">Total Investments</div>
                            <div class="fs-5 fw-bold text-center">${{ number_format($total_investment, 2) }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card card-body bg-dark text-white d-flex align-items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1486/1486485.png" alt="ROI"
                            style="width: 24px; height: 24px; margin-right: 10px;">
                        <div>
                            <div class="small">Total Coin Buy</div>
                            <div class="fs-5 fw-bold text-center">{{ $total_coin }}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="section-title">User Investments</div>

            <div class="table-responsive">
                <table id="investmentsTable" class="table table-dark table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Coin</th>
                            <th>Amount (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($investments as $stake)
                            @if ($stake->user)
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src="https://i.pravatar.cc/40?u={{ $stake->user->name }}"
                                                alt="{{ $stake->user->name }}" class="rounded-circle me-2"
                                                width="40" height="40">
                                            <span>{{ $stake->user->name }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <img src="{{ asset('a.jpeg') }}" alt="Coin"
                                            style="width: 18px; height: 18px; margin-right: 6px;">
                                        {{ $stake->coin }}
                                    </td>
                                    <td>${{ number_format($stake->amount, 2) }}</td>
                                </tr>
                            @endif
                        @endforeach
                    </tbody>
                </table>
            </div>

            <div class="section-title">ROI Settings</div>
            <div class="card-box mb-4">
                <div class="slider-container">
                    <div>Current ROI (%)</div>
                    <div>{{ $current_roi }}</div>
                </div>
                <input type="range" class="form-range mt-2" min="0" max="25" step="0.5"
                    value="{{ $current_roi }}" disabled />
            </div>

            <div class="section-title">Notification</div>
            <div class="card-box mb-4">
                <form action="{{ route('admin.notification.send') }}" method="POST" class="mt-3">
                    @csrf
                    <div class="mb-2">
                        <label for="name" class="form-label text-white">Name</label>
                        <input type="text" name="name" id="name" class="form-control"
                            placeholder="Enter notification" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Save Notification</button>
                </form>
            </div>
            {{-- <div class="card-box d-flex justify-content-between align-items-center mb-4">
                <div>
                    <i class="bi bi-people-fill fs-5 me-2"></i>
                    Referral Program
                    <div class="small text-muted">Referrals: 15</div>
                </div>
                <div class="fs-6">15</div>
            </div> --}}

            <div class="section-title">Reports</div>
            <div class="report-box">
                <div>
                    <a href="{{ route('investment.reports') }}" class="active"><i class="bi bi-download me-2"></i>
                        Download Investment Report</a>
                </div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="report-box">
                <div>
                    <a href="{{ route('activity.reports') }}" class="active"><i class="bi bi-download me-2"></i>
                        Download User Activity Report
                    </a>
                </div>
                <i class="bi bi-chevron-right"></i>
            </div>

        </div>
    </div>
    {{-- <div class="card bg-dark text-white p-3">
    <h5 class="mb-3">Download Daily Reports</h5>
    @foreach (\Storage::files('reports') as $file)
        <div class="mb-2">
            <a href="{{ route('admin.download.report', ['filename' => basename($file)]) }}" class="btn btn-sm btn-outline-light">
                {{ basename($file) }}
            </a>
        </div>
    @endforeach
</div> --}}


    <!-- Bottom Nav for Mobile -->
    <div class="bottom-nav d-md-none">
        <a href="{{ route('admin.dashboard') }}">
            <i class="bi bi-house-door-fill d-block"></i>
            Dashboard
        </a>
        <a href="{{ route('view.all.users') }}" class="active">
            <i class="bi bi-person-fill d-block"></i>
            Users
        </a>
        <a href="{{ route('admin.settings') }}">
            <i class="bi bi-gear-fill d-block"></i>
            Settings
        </a>
        <a href="{{ route('admin.roi.logs') }}">
            <i class="bi bi-file-earmark-text d-block"></i>
            Roi Logs
        </a>
    </div>

    <!-- Bootstrap JS + Sidebar Toggle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.getElementById("openSidebar").addEventListener("click", function() {
            document.getElementById("sidebar").classList.add("show");
        });

        document.getElementById("closeSidebar").addEventListener("click", function() {
            document.getElementById("sidebar").classList.remove("show");
        });
    </script>

    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#investmentsTable').DataTable({
                responsive: true,
                pageLength: 10,
                lengthMenu: [5, 10, 25, 50],
                order: [
                    [2, "desc"]
                ] // default sort by Amount
            });
        });
    </script>
</body>

</html>
