<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Admin Panel - Users List</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <!-- DataTables CSS -->
    <link href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css" rel="stylesheet">
    <!-- DataTables Responsive CSS -->
    <link href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.bootstrap5.min.css" rel="stylesheet">

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
            font-size: 1.50rem;
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

        .modal-content {
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
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

        table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child::before,
        table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child::before {
            background-color: white !important;
            color: #111827 !important;
            /* dark text/icon for contrast */
            border: none;
            font-weight: bold;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
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

            <!-- Page Title -->
            <div class="section-title">Withdrawal Request Lists</div>
            <div class="card shadow bg-dark text-white p-3">
                <div class="table-responsive">
                    <table id="withdrawTable"
                        class="table table-bordered table-hover table-dark text-white align-middle">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Wallet Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($all_users as $user)
                                <tr>
                                    <td>{{ $user->user->name }}</td>
                                    <td>{{ $user->user->email }}</td>
                                    <td>{{ $user->name }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>

                <!-- Alerts -->
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
                </div>
                <!-- DataTable -->
            </div>
        </div>

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
            <a href="#">
                <i class="bi bi-file-earmark-text d-block"></i>
                Reports
            </a>
        </div>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
        <script src="https://cdn.datatables.net/responsive/2.5.0/js/responsive.bootstrap5.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script>
            $(document).ready(function() {
                $('#usersTable').DataTable({
                    responsive: true
                });
            });

            document.getElementById("openSidebar").addEventListener("click", function() {
                document.getElementById("sidebar").classList.add("show");
            });

            document.getElementById("closeSidebar").addEventListener("click", function() {
                document.getElementById("sidebar").classList.remove("show");
            });
        </script>

        <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
        <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
        <script>
            $(document).ready(function() {
                $('#withdrawTable').DataTable({
                    "pageLength": 10,
                    "order": [
                        [2, "desc"]
                    ], // order by amount desc
                });
            });
        </script>

</body>

</html>
