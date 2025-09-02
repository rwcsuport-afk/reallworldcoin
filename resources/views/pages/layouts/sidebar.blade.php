 <div id="sidebar" class="sidebar mobile-sidebar">
     <h5>User Panel
         <button class="btn-close btn-close-white float-end d-md-none" id="closeSidebar"></button>
     </h5>
     <a href="{{ route('user.dashboard') }}" class="active">
         <i class="bi bi-speedometer2 me-2"></i>Dashboard
     </a>

     <a href="{{ route('profile') }}">
         <i class="bi bi-person-badge-fill me-2"></i>Profile
     </a>

     <a href="{{ route('walletHistory') }}">
         <i class="bi bi-wallet2 me-2"></i>Wallet History
     </a>

     <a href="{{ route('stake') }}">
         <i class="bi bi-cash-stack me-2"></i>Staking and ROI
     </a>

     <a href="{{ route('referral') }}">
         <i class="bi bi-people-fill me-2"></i>My Network
     </a>

     <a href="{{ route('withdrawal') }}">
         <i class="bi bi-arrow-up-circle me-2"></i>Withdrawal / Convert
     </a>

     <a href="{{ route('walletAddresses') }}">
         <i class="bi bi-geo-alt-fill me-2"></i>Withdrawal Address
     </a>

     <a href="{{ route('profitReports') }}">
         <i class="bi bi-bar-chart-fill me-2"></i>Profit Reports / Chart
     </a>

     <a href="{{ route('logout') }}">
         <i class="bi bi-box-arrow-right me-2"></i>Logout
     </a>

 </div>
