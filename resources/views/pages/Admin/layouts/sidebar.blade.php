<div id="sidebar" class="sidebar mobile-sidebar">
    <h5>Admin Panel <button class="btn-close btn-close-white float-end d-md-none" id="closeSidebar"></button></h5>
    <a href="{{ route('admin.dashboard') }}" class="active">
        <i class="bi bi-speedometer2 me-2"></i>Dashboard
    </a>

    <a href="{{ route('view.all.users') }}">
        <i class="bi bi-people-fill me-2"></i>Users
    </a>

    <a href="{{ route('admin.settings') }}">
        <i class="bi bi-gear-fill me-2"></i>Settings
    </a>

    <a href="{{ route('admin.roi.logs') }}">
        <i class="bi bi-journal-text me-2"></i>Roi Logs
    </a>

    <a href="{{ route('withdrawal.requests') }}">
        <i class="bi bi-arrow-up-circle me-2"></i>Withdrawal Requests
    </a>

    <a href="{{ route('walletAddress') }}">
        <i class="bi bi-geo-alt-fill me-2"></i>Wallet Address
    </a>

    <a href="{{ route('Admin.logout') }}">
        <i class="bi bi-box-arrow-right me-2"></i>Logout
    </a>

</div>
