<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>User Panel - Dashboard</title>

    <!-- Bootstrap & Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <style>
        body {
            background: radial-gradient(circle at top left, #0a0a1f, #111827);
            color: #e5e7eb;
            font-family: "Segoe UI", sans-serif;
            margin: 0;
            padding: 0;
        }

        .main-wrapper {
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Sidebar */
        .sidebar {
            background: linear-gradient(180deg, #0d0d24, #1f1f3d);
            width: 250px;
            padding: 20px;
            border-right: 1px solid #2d2d55;
            z-index: 1050;
        }

        .sidebar a {
            color: #9ca3af;
            text-decoration: none;
            display: block;
            padding: 10px 12px;
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

        /* Mobile Sidebar */
        @media (max-width: 767px) {
            .sidebar {
                position: fixed;
                top: 0;
                bottom: 0;
                left: -250px;
                transition: left 0.3s ease-in-out;
            }

            .sidebar.show {
                left: 0;
            }
        }

        /* Dashboard Content */
        .dashboard-card {
            flex-grow: 1;
            padding: 20px;
            width: 100%;
        }

        /* Welcome Box */
        .welcome-box {
            background: #1f2937;
            padding: 25px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(37, 99, 235, 0.2);
            margin-bottom: 20px;
        }

        .welcome-box h5 {
            color: #fff;
            font-weight: 600;
        }

        .welcome-box .ref-id {
            color: #93c5fd;
            font-size: 0.9rem;
        }

        /* Card Boxes */
        .card-box {
            background: linear-gradient(145deg, #1e293b, #0f172a);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid #334155;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
        }

        .card-box h6 {
            color: #cbd5e1;
            font-size: 0.9rem;
        }

        .card-box p {
            font-size: 1rem;
            font-weight: bold;
            margin: 0;
            color: #f9fafb;
        }

        .card-box img {
            width: 32px;
            height: 32px;
            margin-right: 10px;
        }

        /* Referral Link */
        .referral-link-box {
            background: #0f172a;
            padding: 15px;
            border-radius: 12px;
            border: 1px solid #1d4ed8;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .referral-link-box input {
            background: #1e293b;
            border: none;
            color: #f9fafb;
            padding: 12px;
            border-radius: 8px;
            font-size: 0.9rem;
            width: 100%;
        }

        .copy-btn {
            background: linear-gradient(90deg, #2563eb, #1d4ed8);
            color: white;
            border: none;
            padding: 10px 14px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.85rem;
            transition: opacity 0.2s;
            flex: 1;
        }

        .copy-btn:hover {
            opacity: 0.9;
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

        @media (min-width: 768px) {
            .bottom-nav {
                display: none;
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
                <i class="bi bi-list fs-3" id="openSidebar" style="cursor:pointer;"></i>
                <h5 class="mb-0 fw-bold text-light">User Dashboard</h5>
                <div style="width: 24px;"></div>
            </div>

            <!-- Welcome Box -->
            <div class="welcome-box">
                <h5>Welcome <i class="bi bi-person-fill"></i> {{ Auth::user()->name }}</h5>
                <div class="ref-id">Referral ID: {{ Auth::user()->unique_id }}</div>
            </div>

            <!-- ROI Section -->
            <h6 class="text-info fw-semibold mb-3">ROI & Stats</h6>
            <div class="row g-3 mb-3">
                <div class="col-6">
                    <div class="card-box d-flex align-items-center">
                        <img src="{{ asset('a.webp') }}" alt="ROI">
                        <div>
                            <h6>Current ROI</h6>
                            <p>{{ $roiPercent }}%</p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-box d-flex align-items-center">
                        <img src="{{ asset('a.webp') }}" alt="Stake">
                        <div>
                            <h6>Total Staked</h6>
                            <p>${{ number_format($total_staked, 2) }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-box d-flex align-items-center">
                        <img src="{{ asset('a.webp') }}" alt="Coin">
                        <div>
                            <h6>Total Coin</h6>
                            <p>{{ number_format($total_coin) }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-box d-flex align-items-center">
                        <img src="{{ asset('a.webp') }}" alt="Earned">
                        <div>
                            <h6>Total Earn ROI</h6>
                            <p>{{ $total_earn_coin }}</p>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card-box d-flex align-items-center">
                        <img src="{{ asset('a.webp') }}" alt="Earned">
                        <div>
                            <h6>Total Earn</h6>
                            <p>{{ $total_earn_coin + $total_coin }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card-box d-flex align-items-center">
                        <img src="{{ asset('a.webp') }}" alt="Earned">
                        <div>
                            <h6>Total Available USD</h6>
                            <p> ${{ $total_usd }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Referral Link -->
            <h6 class="text-info fw-semibold mb-3">Your Referral Link</h6>
            <div class="referral-link-box">
                <input type="text"
                    value="{{ route('register', ['referral_link' => auth()->user()->unique_id ?? 'demo123']) }}"
                    readonly id="refLink" />

                <div class="d-flex gap-2">
                    <button class="copy-btn" onclick="copyReferralLink()">Copy Link</button>
                    <button class="copy-btn" onclick="copyShareTag()">Copy & Share</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav d-md-none">
        <a href="{{ route('user.dashboard') }}" class="active"><i class="bi bi-house-door-fill d-block"></i>Home</a>
        <a href="{{ route('stake') }}"><i class="bi bi-cash-coin d-block"></i>Staking</a>
        <a href="{{ route('referral') }}"><i class="bi bi-people-fill d-block"></i>Referrals</a>
        <a href="{{ route('profile') }}"><i class="bi bi-person-fill d-block"></i>Profile</a>
    </div>

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        function copyReferralLink() {
            const input = document.getElementById('refLink');
            input.select();
            input.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(input.value).then(() => {
                alert("Referral link copied!");
            });
        }

        function copyShareTag() {
            const tag = '@{{ auth() - > user() - > unique_id ?? "demo123" }}';
            navigator.clipboard.writeText(tag).then(() => {
                alert("Referral tag copied!");
            });
        }

        // Sidebar toggle
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.getElementById('openSidebar');
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    </script>
    <script>
        document.getElementById("openSidebar").addEventListener("click", function() {
            document.getElementById("sidebar").classList.add("show");
        });

        document.getElementById("closeSidebar")?.addEventListener("click", function() {
            document.getElementById("sidebar").classList.remove("show");
        });
    </script>
    <script src="{{ mix('/js/wallet.js') }}"></script>
</body>

</html>
