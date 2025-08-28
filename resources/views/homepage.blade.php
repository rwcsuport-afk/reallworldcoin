<!doctype html>
<html lang="en">



<!-- Mirrored from html.xpressbuddy.com/Real World Coin/index_ico.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Aug 2025 04:47:21 GMT -->

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="thumbnail" content="assets/images/ico_template_thumbnail.webp">
    <meta name="description" content="Real World Coin - Site Template">
    <meta name="keywords" content="Crypto Currency Bootstrap Site Template">
    <meta name="author" content="xpressbuddy">

    <title>Real World Coin</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="shortcut icon" href="{{ asset('assets/images/site_logo/favicon_1.svg') }}">

    <!-- Fraimwork - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap.min.css') }}">

    <!-- Icon Font - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/fontawesome.css') }}">

    <!-- Animation - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/cursor.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/animate.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/aos.css') }}">

    <!-- Carousel - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/swiper-bundle.min.css') }}">

    <!-- Video & Image Popup - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/magnific-popup.min.css') }}">

    <!-- Counter - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/odometer.min.css') }}">

    <!-- Custom - CSS Include -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">
    <style>
        .hero_title {
            font-style: italic;
            font-weight: 700;
            /*  font-size: 2rem; */
            line-height: 1.3;
            text-transform: uppercase;
            background: linear-gradient(90deg, white, white);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 2px;
        }

        .hero_title p {
            margin: 0;
        }

        .marquee-container {
            overflow: hidden;
            white-space: nowrap;
            background: #0e0827;
            color: #fff;
            padding: 17px 0;
            position: relative;
        }

        .marquee-content {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        @keyframes blink {
            to {
                visibility: hidden;
            }
        }

        @media (max-width: 576px) {
            .usdt-text {
                white-space: normal;
                /* allow wrapping */
                text-align: right;
            }
        }

        /* On larger screens keep it in one line */
        @media (min-width: 577px) {
            .usdt-text {
                white-space: nowrap;
                /* prevent wrapping */
            }
        }

        logo-img {
            width: 150px;
            /* smaller on desktop */
            height: auto;
        }

        /* Mobile size */
        @media (max-width: 767px) {
            .logo-img {
                width: 200px;
                /* bigger on mobile */
            }
        }

        /* Mobile size */
        @media (max-width: 767px) {
            .logo-img {
                width: 200px;
                /* bigger on mobile */
            }
        }

        /* Default (desktop) → keep inline */
        .progress_value {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: nowrap;
        }

        @media (max-width: 576px) {
            .d-flex.justify-content-center.gap-1 {
                flex-direction: column !important;
                align-items: stretch !important;
            }

            .d-flex.justify-content-center.gap-1 button {
                width: 100%;
                display: flex;
                justify-content: center;
                /* Horizontal center */
                align-items: center;
                /* Vertical center */
                text-align: center;
                /* Ensures text stays centered */
            }

            .d-flex.justify-content-center.gap-1 button+button {
                margin-top: 8px;
            }
        }
    </style>

</head>


<body class="index_ico">

    <!-- Body Wrap - Start -->
    <div class="page_wrapper">

        <!-- Back To Top - Start -->
        <div class="backtotop">
            <a href="#" class="scroll">
                <i class="fa-solid fa-arrow-up"></i>
            </a>
        </div>
        <!-- Back To Top - End -->

        <!-- Preloader - Start -->
        <div id="preloader">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
            <div class="line-4"></div>
        </div>
        <!-- Preloader - End -->

        <!-- Site Header - Start
      ================================================== -->
        <header class="site_header">
            <div class="nav_wrapper">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-5 d-flex align-items-center">
                            <div class="site_logo">
                                <a class="site_link" href="{{ route('homepage') }}">
                                    <img loading="lazy" src="{{ asset('bb.png') }}" alt="ICO Site Logo"
                                        class="logo-img">
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-2">
                            <nav class="main_menu navbar navbar-expand-lg">
                                <div class="main_menu_inner collapse navbar-collapse justify-content-center"
                                    id="main_menu_dropdown">
                                    <ul class="main_menu_list unordered_list text-uppercase">
                                        <li class="dropdown active">
                                            <a class="nav-link" href="#" id="homes_submenu" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="nav_link_label" data-text="Home">Home</span>
                                                {{-- <span class="nav_link_icon">
                                                    <i class="fa-solid fa-angle-down"></i>
                                                </span> --}}
                                            </a>
                                            {{-- <ul class="dropdown-menu" aria-labelledby="homes_submenu">
                                                <li class="active">
                                                    <a class="dropdown-item" href="index_ico.html">
                                                        <span class="nav_link_label">Real World Coin ICO</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="index_memecoin.html">
                                                        <span class="nav_link_label">Memecoin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="index_pepecoin.html">
                                                        <span class="nav_link_label">Pepecoin</span>
                                                    </a>
                                                </li>
                                            </ul> --}}
                                        </li>
                                        <li>
                                            <a class="nav-link scrollspy_btn" href="#id_ico_about_section">
                                                <span class="nav_link_label" data-text="About ICO">About</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="nav-link scrollspy_btn" href="#id_ico_service_section">
                                                <span class="nav_link_label" data-text="Features">Features</span>
                                            </a>
                                        </li>
                                        <li class="dropdown">
                                            <a class="nav-link" href="#" id="help_submenu" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="nav_link_label"
                                                    data-text="My
                                                            Account">My
                                                    Account</span>
                                                <span class="nav_link_icon">
                                                    <i class="fa-solid fa-angle-down"></i>
                                                </span>
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="help_submenu">
                                                {{-- <li>
                                                    <a class="dropdown-item scrollspy_btn"
                                                        href="#id_ico_roadmap_section">
                                                        <span class="nav_link_label">Roadmap</span>
                                                    </a>
                                                </li>
                                                <li class="dropdown">
                                                    <a class="dropdown-item" href="#" id="blog_submenu"
                                                        role="button" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span class="nav_link_label" data-text="Blog">Blog</span>
                                                        <span class="nav_link_icon">
                                                            <i class="fa-solid fa-angle-right"></i>
                                                        </span>
                                                    </a>
                                                    <ul class="dropdown-menu" aria-labelledby="blog_submenu">
                                                        <li>
                                                            <a class="dropdown-item" href="blog.html">
                                                                <span class="nav_link_label">Blogs</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="blog_details.html">
                                                                <span class="nav_link_label">Blog Details</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li> --}}
                                                {{-- <li>
                                                    <a class="dropdown-item" href="contact.html">
                                                        <span class="nav_link_label">Help Center</span>
                                                    </a>
                                                </li> --}}
                                                <li class="dropdown">
                                                    <a class="dropdown-item" href="{{ route('register') }}"
                                                        id="register_submenu" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span class="nav_link_label" data-text="Blog">Sign In</span>
                                                        <span class="nav_link_icon">
                                                            {{-- <i class="fa-solid fa-angle-right"></i> --}}
                                                        </span>
                                                    </a>
                                                    <a class="dropdown-item" href="{{ route('login') }}"
                                                        id="register_submenu" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        <span class="nav_link_label" data-text="Blog">Sign Up</span>
                                                        <span class="nav_link_icon">
                                                            {{-- <i class="fa-solid fa-angle-right"></i> --}}
                                                        </span>
                                                    </a>
                                                    {{-- <ul class="dropdown-menu" aria-labelledby="register_submenu">
                                                        <li>
                                                            <a class="dropdown-item" href="{{ route('register') }}">
                                                                <span class="nav_link_label">Sign In</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="{{ route('login') }}">
                                                                <span class="nav_link_label">Sign Up</span>
                                                            </a>
                                                        </li>
                                                    </ul> --}}
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="{{ route('contact') }}">
                                                <span class="nav_link_label" data-text="Contact">Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="col-lg-3 col-5">
                            <ul class="btns_group unordered_list p-0 justify-content-end">
                                <li class="d-lg-none">
                                    <button class="mobile_menu_btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#main_menu_dropdown" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <i class="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <a class="ico_btn_outline" href="{{ route('login') }}">
                                        <span class="btn_icon">
                                            <i class="fa-solid fa-user"></i>
                                        </span>
                                        <span class="btn_label">Login</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Site Header - End
      ================================================== -->

        <!-- Main Body - Start
      ================================================== -->
        <main class="page_content">

            <!-- Hero Section - Start
        ================================================== -->

            <section class="ico_hero_section text-center"
                style="background-image: url('assets/images/shapes/shape_net_ico_hero_section_bg.svg');">
                <div class="container">
                    <h4>
                        <p style="animation: blink 1s steps(2, start) infinite; color: #C10BE3;">
                            * Pre sale is live *
                        </p>
                    </h4>
                    <h6 class="hero_title d-none d-lg-block" data-aos="fade-up" data-aos-duration="800">
                        <p style="font-size: 2rem">BEST CRYPTO</p>
                        <p style="font-size: 4rem">INVESTMENT</p>
                        <p style="font-size: 2rem">OPPORTUNITY</p>
                    </h6>
                    <h6 class="hero_title d-block d-lg-none" data-aos="fade-up" data-aos-duration="800">
                        <p style="font-size: 1.5rem; color: white;">BEST CRYPTO</p>
                        <p style="font-size: 3rem; color: white; font-weight: bold;">INVESTMENT</p>
                        <p style="font-size: 1.5rem; color: white;">OPPORTUNITY</p>
                    </h6>
                    <ul class="btns_group unordered_list justify-content-center p-0" data-aos="fade-up"
                        data-aos-duration="800" data-aos-delay="100">
                        {{-- <li>
                            <a class="ico_creative_btn" href="#!">
                                <span class="btn_wrapper">
                                    <span class="btn_icon_left">
                                        <small class="dot_top"></small>
                                        <small class="dot_bottom"></small>
                                        <svg class="icon_arrow_left" viewBox="0 0 28 23"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                            <path
                                                d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                            <path
                                                d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                        </svg>
                                    </span>
                                    <span class="btn_label">Purchase a Token</span>
                                    <span class="btn_icon_right">
                                        <small class="dot_top"></small>
                                        <small class="dot_bottom"></small>
                                        <svg class="icon_arrow_right" viewBox="0 0 27 23"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                            <path
                                                d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                            <path
                                                d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </li> --}}
                        <li>
                            <a class="ico_creative_btn" href="{{ asset('whitepaper.pdf') }}">
                                <span class="btn_wrapper">
                                    <span class="btn_icon_left">
                                        <small class="dot_top"></small>
                                        <small class="dot_bottom"></small>
                                        <svg class="icon_arrow_left" viewBox="0 0 28 23"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                            <path
                                                d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                            <path
                                                d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                        </svg>
                                    </span>
                                    <span class="btn_label">Read Documents</span>
                                    <span class="btn_icon_right">
                                        <small class="dot_top"></small>
                                        <small class="dot_bottom"></small>
                                        <svg class="icon_arrow_right" viewBox="0 0 27 23"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                            <path
                                                d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                            <path
                                                d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                        <div class="ico_countdown_progress_box">
                            <div class="ico_heading_block text-center mb-0">
                                <h2 class="highlight_title mb-0">
                                    Start buy Real World Coin now!
                                </h2>
                            </div>
                            <ul class="countdown_timer_block unordered_list justify-content-center"
                                data-countdown="{{ \Carbon\Carbon::parse($presaleEnd)->format('Y/m/d H:i:s') }}"
                                style="background-image: url('{{ asset('assets/images/shapes/shape_bg_ico_countdown.svg') }}')">
                            </ul>
                            <div class="ico_progress">
                                <ul class="progress_range_step unordered_list justify-content-between">
                                    {{-- <li>Soft Cap: $1.75m</li>
                                    <li>Hard Cap: $4.75m</li> --}}
                                    <li>RWC</li>
                                </ul>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <ul class="progress_value unordered_list justify-content-between">
                                    <li>UNTIL PRICE RISE</li>
                                    <li class="usdt-text">USDT Raised: 150000000 / 150000000</li>
                                </ul><br>
                                <div class="card-body">
                                    <div class="mb-4">
                                        <h3 class="fst-italic" style="color: #18DB1B;">Buy RWC Token Now</h3>
                                    </div>
                                    {{-- <div class="container mt-4">
                                        <div class="row justify-content-center">
                                            <div class="col-md-6">
                                                <div class="card text-center shadow-lg">
                                                    <div class="card-body py-4">
                                                        <h5 class="card-title mb-4 fst-italic">Interact with Wallet
                                                        </h5>
                                                        <div class="d-flex justify-content-center gap-3 flex-wrap">
                                                            <!-- AppKit Buttons -->
                                                            <appkit-button></appkit-button>
                                                            <appkit-network-button></appkit-network-button>

                                                            <!-- Custom Action -->
                                                            <button class="btn btn-success btn-lg"
                                                                onclick="sendTransaction()">
                                                                Send 0.0001 ETH
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> --}}
                                   <div class="container text-center mt-5">
    <h2>Buy $PEPETO Tokens</h2>

    <!-- Connect Buttons -->
    <button id="connectMetaMask" class="btn btn-primary m-2">Connect MetaMask</button>
    <button id="connectWC" class="btn btn-success m-2">Connect WalletConnect</button>

    <!-- Show Wallet Address -->
    <p id="walletAddress" class="mt-3 text-info"></p>

    <!-- Buy Section -->
    <div class="mt-4">
        <input type="number" id="bnbAmount" class="form-control w-25 mx-auto" placeholder="Enter BNB" />
        <button id="buyTokens" class="btn btn-warning mt-2">Buy Tokens</button>
    </div>

    <!-- Result -->
    <p id="result" class="mt-4 text-success"></p>
</div>
                                  
                                
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="shape_bottom">
                    <img src="{{ asset('assets/images/shapes/shape_ico_hero_section_bottom.svg') }}"
                        alt="Bottom Line Shape">
                </div>
                {{-- <div class="decoration_item shape_globe">
                    <img src="{{ asset('a.webp') }}" alt="Shape Globe">
                </div>
                <div class="decoration_item shape_coin">
                    <img src="{{ asset('a.webp') }}" alt="Shape Coin">
                </div> --}}
            </section>
            <!-- Hero Section - End
        ================================================== -->
            <section class="partner_section">
                <div class="container">
                    <div class="ico_heading_block text-center">
                        <h2 class="highlight_title mb-0" style="font-size: 40px" data-aos="fade-up"
                            data-aos-duration="600">
                            Our top Partner
                        </h2>
                    </div>

                    <div class="partner_logo_carousel z-2 position-relative" data-aos="fade-up"
                        data-aos-duration="600" data-aos-delay="200">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/coin.png') }}" alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/grcko.png') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/trust.webp') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/coin.png') }}" alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/grcko.png') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/trust.webp') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/coin.png') }}" alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/grcko.png') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/trust.webp') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/coin.png') }}" alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/grcko.png') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/trust.webp') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/coin.png') }}" alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/grcko.png') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="ico_partner_logo">
                                    <a class="logo_wrap" href="#!">
                                        <img src="{{ asset('assets/images/partners/trust.webp') }}"
                                            alt="Partner Logo">
                                        <span class="dot_1"></span>
                                        <span class="dot_2"></span>
                                        <span class="dot_3"></span>
                                        <span class="dot_4"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br><br><br>
            <!-- Partner Section - Start
        ================================================== -->
            <section class="partner_section">
                <div class="container">
                    <div class="ico_heading_block text-center">
                        <h2 class="highlight_title mb-0" style="font-size:40px" data-aos="fade-up"
                            data-aos-duration="600">
                            BREAKING
                        </h2>
                    </div>
                    <div class="marquee-container">
                        <div class="marquee-content fs-5">
                            @foreach ($notifications as $key => $notification)
                                <span class="mx-2">{{ $notification->name }}</span>
                                @if ($key !== count($notifications) - 1)
                                    <span class="text-warning">|</span>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
            </section>


            <!-- Partner Section - End
        ================================================== -->

            <!-- About Section - Start
        ================================================== -->
            <section id="id_ico_about_section" class="ico_about_section section_space pb-0 section_decoration">
                <div class="container">
                    <div class="row justify-content-lg-between">
                        <div class="col-lg-6">
                            <div class="ico_heading_block" data-aos="fade-up" data-aos-duration="600">
                                <h2 class="heading_text mb-0">
                                    Introducing Real World Coin
                                </h2>
                            </div>
                            <ul class="about_ico_block unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                    <h3 class="title_text">
                                        What is an Real World Coin?
                                    </h3>
                                    <p class="info_description mb-0">
                                        Real World Coin is a decentralized digital currency enabling peer-to-peer
                                        transactions
                                        without intermediaries.
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                    <h3 class="title_text">
                                        Why it’s need?
                                    </h3>
                                    <p class="info_description mb-0">
                                        Real World Coin is needed to provide a decentralized alternative to traditional
                                        financial systems. It allows secure, transparent, and borderless transactions
                                        without relying on banks or governments. This empowers individuals with
                                        financial freedom,
                                    </p>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <h3 class="title_text">
                                        Market Opportunity
                                    </h3>
                                    <p class="info_description mb-0">
                                        Real World Coin's market opportunity stems from its growing adoption as a
                                        digital asset
                                        and payment method. As interest from investors, businesses, and institutions
                                        increases, It’s finance and retail is expanding, boosting its value and utility.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-5 d-lg-flex flex-lg-column-reverse">
                            {{-- <ul class="about_ico_block unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                    <h3 class="title_text">
                                        Market Opportunity
                                    </h3>
                                    <p class="info_description mb-0">
                                        Real World Coin's market opportunity stems from its growing adoption as a digital asset
                                        and payment method. As interest from investors, businesses, and institutions
                                        increases, It’s finance and retail is expanding, boosting its value and utility.
                                    </p>
                                </li>
                            </ul> --}}
                            <div class="ico_about_image text-center">
                                <div class="ripple_shape mb-lg-5">
                                    <svg viewBox="0 0 501 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M500.5 227.5C500.5 352.824 388.618 454.5 250.5 454.5C112.382 454.5 0.5 352.824 0.5 227.5C0.5 102.176 112.382 0.5 250.5 0.5C388.618 0.5 500.5 102.176 500.5 227.5Z"
                                            stroke="url(#sro_paint0)" />
                                        <path
                                            d="M463.5 247.5C463.5 361.81 368.15 454.5 250.5 454.5C132.85 454.5 37.5 361.81 37.5 247.5C37.5 133.19 132.85 40.5 250.5 40.5C368.15 40.5 463.5 133.19 463.5 247.5Z"
                                            stroke="url(#sro_paint1)" />
                                        <path
                                            d="M425.5 268C425.5 371.031 347.12 454.5 250.5 454.5C153.88 454.5 75.5 371.031 75.5 268C75.5 164.969 153.88 81.5 250.5 81.5C347.12 81.5 425.5 164.969 425.5 268Z"
                                            stroke="url(#sro_paint2)" />
                                        <path
                                            d="M379.5 268C379.5 343.97 321.715 405.5 250.5 405.5C179.285 405.5 121.5 343.97 121.5 268C121.5 192.03 179.285 130.5 250.5 130.5C321.715 130.5 379.5 192.03 379.5 268Z"
                                            stroke="url(#sro_paint3)" />
                                        <defs>
                                            <linearGradient id="sro_paint0" x1="250.5" y1="0"
                                                x2="250.5" y2="455" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#2A246D" />
                                                <stop offset="1" stop-color="#2A246D" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="sro_paint1" x1="250.5" y1="40"
                                                x2="250.5" y2="455" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#2A246D" />
                                                <stop offset="1" stop-color="#2A246D" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="sro_paint2" x1="250.5" y1="81"
                                                x2="250.5" y2="455" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#2A246D" />
                                                <stop offset="1" stop-color="#2A246D" stop-opacity="0" />
                                            </linearGradient>
                                            <linearGradient id="sro_paint3" x1="250.5" y1="130"
                                                x2="250.5" y2="406" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#2A246D" />
                                                <stop offset="1" stop-color="#2A246D" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="coin_image">
                                    <img src="{{ asset('a.webp') }}" style="height: 300px; width: 300px;"
                                        alt="About Image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="decoration_item shape_shadow_1">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
                <div class="decoration_item shape_shadow_2">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
            </section>
            <!-- About Section - End
        ================================================== -->

            <!-- Problem and Solution Section - Start
        ================================================== -->
            <section class="problem_solution_section section_space pb-0">
                <div class="container">
                    <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="600">
                        <h2 class="heading_text mb-0">
                            Real World Coin Problem & Solution
                        </h2>
                    </div>
                    <div class="ico_problem_solution_table" data-aos="fade-up" data-aos-duration="600"
                        data-aos-delay="100">
                        <div class="column_wrapper">
                            <div class="column_problem">
                                <h3 class="heading_text">
                                    <span class="icon">
                                        <img src="{{ asset('assets/icons/icon_man_question.svg') }}"
                                            alt="Icon Man With Question">
                                    </span>
                                    <span class="text">RWC Problem</span>
                                </h3>
                                <ul class="iconlist_block unordered_list_block">
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Identify the Issue.
                                            <small class="iconlist_info">
                                                We ensure transparency with clear updates.
                                            </small>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Impact of the Problem.
                                            <small class="iconlist_info">
                                                The Problem in an ICO attracts investor confidence.
                                            </small>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Reduced Investment.
                                            <small class="iconlist_info">
                                                Less trust means fewer investments.
                                            </small>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Scaling and Absolete Tool.
                                            <small class="iconlist_info">
                                                Limited scalability hinders growth and expansion.
                                            </small>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="column_solution">
                                <h3 class="heading_text">
                                    <span class="icon">
                                        <img src="{{ asset('assets/icons/icon_bulb.svg') }}" alt="Icon Bulb">
                                    </span>
                                    <span class="text">RWC Solution</span>
                                </h3>
                                <ul class="iconlist_block unordered_list_block">
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Introduce the Project and Token.
                                            <small class="iconlist_info">
                                                Our ICO Vision building a Decentralized Ad Network.
                                            </small>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Key Features or Innovations.
                                            <small class="iconlist_info">
                                                Advanced tech, top security, and smooth scalability.
                                            </small>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Benefits to Users and Investors.
                                            <small class="iconlist_info">
                                                Transparency, security, and growth potential.
                                            </small>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="iconlist_icon">
                                            <img src="{{ asset('assets/icons/icon_check.svg') }}" alt="Icon Check">
                                        </span>
                                        <span class="iconlist_label">
                                            Global Single-Platform.
                                            <small class="iconlist_info">
                                                Seamless access and transactions worldwide.
                                            </small>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Problem and Solution Section - End
        ================================================== -->

            <!-- Ico Feature Section - Start
        ================================================== -->
            <section class="ico_feature_section section_space section_decoration">
                <div class="container">
                    <div class="row justify-content-lg-between">
                        <div class="col-lg-12">
                            <div class="ico_heading_block" data-aos="fade-up" data-aos-duration="600">
                                <h2 class="heading_text mb-0">
                                    HOW TO BUY?
                                </h2>
                            </div>
                            <ul class="ico_features_group unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_dollar.svg') }}" alt="Icon Dollar">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">SWAP USDT BNB FOR RWC</h3>
                                            <p class="iconbox_description mb-0">In the vibrant and ever-evolving world
                                                of cryptocurrency, where innovation and creativity reign.</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_chart.svg') }}" alt="Icon Chart">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">PURCHASE RWC</h3>
                                            <p class="iconbox_description mb-0">In the vibrant and ever-evolving world
                                                of cryptocurrency, where innovation and creativity reign.</p>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        {{-- <div class="col-lg-6">
                            <ul class="ico_investment_value unordered_list justify-content-md-between"
                                data-aos="fade-up" data-aos-duration="600">
                                <li>
                                    <h4 class="heading_text">Amount invested</h4>
                                    <div class="investment_value">
                                        <span class="odometer" data-count="60000">0</span>
                                        <span>$</span>
                                    </div>
                                </li>
                                <li>
                                    <h4 class="heading_text">Quantity Real World Coin</h4>
                                    <div class="investment_value">
                                        <span class="odometer" data-count="600000">0</span>
                                        <span>Real World Coin</span>
                                    </div>
                                </li>
                            </ul>

                            <div class="ico_coin_purchase_price" data-aos="fade-up" data-aos-duration="600"
                                data-aos-delay="100">
                                <p class="purchase_price_rate mb-0 text-secondary">
                                    Purchase Price Real World Coin <strong>0.166$</strong>
                                </p>
                                <div class="chart_image">
                                    <img src="assets/images/shapes/shape_chart.svg" alt="Shape Chart">
                                </div>
                                <div class="live_values">
                                    <span>100$</span>
                                    <span>100.000$</span>
                                </div>
                            </div>

                            <div class="ico_calculation_range" data-aos="fade-up" data-aos-duration="600"
                                data-aos-delay="200">
                                <div class="live_values">
                                    <span>Calculation Time</span>
                                    <span>Q3 2025</span>
                                </div>
                                <div class="range_image">
                                    <img src="assets/images/shapes/shape_range.svg" alt="Shape Range">
                                </div>
                                <div class="live_values">
                                    <span>100$</span>
                                    <span>100.000$</span>
                                </div>
                            </div>
                        </div> --}}
                    </div>
                </div>
                <div class="decoration_item shape_shadow_1">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
                <div class="decoration_item shape_shadow_2">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
            </section>
            <!-- Ico Feature Section - End
        ================================================== -->
            <!-- Ico Feature Section - Start
        ================================================== -->
            <section class="ico_feature_section section_space section_decoration">
                <div class="container">
                    <div class="row justify-content-lg-between">
                        <div class="col-lg-5">
                            <div class="ico_heading_block" data-aos="fade-up" data-aos-duration="600">
                                <h2 class="heading_text mb-0">
                                    Why RWC is Worth Buying Today?
                                </h2>
                            </div>
                            <ul class="ico_features_group unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_dollar.svg') }}" alt="Icon Dollar">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Expected Investment Value Yearly</h3>
                                            <p class="iconbox_description mb-0">ROI = 365%</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_chart.svg') }}" alt="Icon Chart">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Expected Investment Value Monthly</h3>
                                            <p class="iconbox_description mb-0">ROI = 30%</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_gift.svg') }}" alt="Icon Gift">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Expected Investment Value Daily</h3>
                                            <p class="iconbox_description mb-0">ROI = 1%</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul class="ico_investment_value unordered_list justify-content-md-between"
                                data-aos="fade-up" data-aos-duration="600">
                                <li>
                                    <h4 class="heading_text">Amount invested</h4>
                                    <div class="investment_value">
                                        <span class="odometer" data-count="100000">0</span>
                                        <span>$</span>
                                    </div>
                                </li>
                                <li>
                                    <h4 class="heading_text">Quantity RWC</h4>
                                    <div class="investment_value">
                                        <span class="odometer" data-count="10000000">0</span>
                                        <span>RWC</span>
                                    </div>
                                </li>
                            </ul>

                            <div class="ico_coin_purchase_price" data-aos="fade-up" data-aos-duration="600"
                                data-aos-delay="100">
                                {{-- <p class="purchase_price_rate mb-0 text-secondary">
                                    Purchase Price Coinpay <strong>0.166$</strong>
                                </p> --}}
                                <div class="chart_image" style="text-align: center; padding: 10px 15px 20px 25px;">
                                    <img src="{{ asset('a.webp') }}" style="height: 50%; width: 80%;"
                                        alt="Shape Chart">
                                </div>
                                {{-- <div class="live_values">
                                    <span>100$</span>
                                    <span>100.000$</span>
                                </div> --}}
                            </div>

                            {{-- <div class="ico_calculation_range" data-aos="fade-up" data-aos-duration="600"
                                data-aos-delay="200">
                                <div class="live_values">
                                    <span>Calculation Time</span>
                                    <span>Q3 2025</span>
                                </div>
                                <div class="range_image">
                                    <img src="{{ asset('assets/images/shapes/shape_range.svg') }}" alt="Shape Range">
                                </div>
                                <div class="live_values">
                                    <span>100$</span>
                                    <span>100.000$</span>
                                </div>
                            </div> --}}
                        </div>
                    </div>
                </div>
                <div class="decoration_item shape_shadow_1">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
                <div class="decoration_item shape_shadow_2">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
            </section>
            <!-- Ico Feature Section - End
        ================================================== -->
            <!-- Service Section - Start
        ================================================== -->
            <section id="id_ico_service_section"
                class="ico_service_section section_space pb-0 section_decoration section_shadow_top">
                <div class="decoration_item shape_divider_1">
                    <img src="{{ asset('assets/images/shapes/shape_section_divider_1.svg') }}" alt="Shape Divider">
                </div>
                <div class="container">
                    <div class="ico_heading_block text-center mt-lg-4" data-aos="fade-up" data-aos-duration="600">
                        <h2 class="heading_text mb-0">
                            Why You Choose RWC?
                        </h2>
                    </div>
                    <div class="row m-lg-0 justify-content-center">

                        {{-- <div class="col-lg-4 p-lg-0 order-lg-first" data-aos="fade-up" data-aos-duration="600"
                            data-aos-delay="200">
                            <div class="ico_iconbox_block">
                                <div class="iconbox_icon">
                                    <img src="{{ asset('assets/icons/icon_dollar_2.svg') }}" alt="Icon Dollar">
                                </div>
                                <div class="iconbox_info">
                                    <h3 class="iconbox_title">
                                        Universal ATM
                                    </h3>
                                    <p class="iconbox_description mb-0">
                                        ATM for stable currency unicast any other currencies.
                                    </p>
                                </div>
                            </div>
                        </div> --}}
                        {{-- <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600"
                            data-aos-delay="300">
                            <div class="ico_iconbox_block">
                                <div class="iconbox_icon">
                                    <img src="{{ asset('assets/icons/icon_bank_building.svg') }}"
                                        alt="Icon Bank Building">
                                </div>
                                <div class="iconbox_info">
                                    <h3 class="iconbox_title">
                                        Smart Banking Branch
                                    </h3>
                                    <p class="iconbox_description mb-0">
                                        kyc handles lender negotiation or insurance procedures.
                                    </p>
                                </div>
                            </div>
                        </div> --}}
                        <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600"
                            data-aos-delay="400">
                            <div class="ico_iconbox_block">
                                <div class="iconbox_icon">
                                    <img src="{{ asset('assets/icons/icon_scan.svg') }}" alt="Icon Scan">
                                </div>
                                <div class="iconbox_info">
                                    <h3 class="iconbox_title">
                                        Automation
                                    </h3>
                                    <p class="iconbox_description mb-0">
                                        Payment of invoices, create, deposited or integration for betting offices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600"
                            data-aos-delay="100">
                            <div class="ico_service_image" style="text-align: center">
                                <img src="{{ asset('a.webp') }}" style="height: 250px; width: 250px;"
                                    alt="ICO Service Icon">
                            </div>
                        </div>
                        <div class="col-lg-4 p-lg-0" data-aos="fade-up" data-aos-duration="600"
                            data-aos-delay="500">
                            <div class="ico_iconbox_block">
                                <div class="iconbox_icon">
                                    <img src="{{ asset('assets/images/services/icon_pinpoint.png') }}"
                                        alt="Icon Pinpoint">
                                </div>
                                <div class="iconbox_info">
                                    <h3 class="iconbox_title">
                                        Decentralization
                                    </h3>
                                    <p class="iconbox_description mb-0">
                                        All transactions are in a blockchain, each machine is a network builder.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="decoration_item shape_shadow_1">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
                <div class="decoration_item shape_shadow_2">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
            </section>
            <!-- Service Section - End
        ================================================== -->

            <!-- Tokenomics Section - Start
        ================================================== -->
            <section id="id_ico_tokenomics_section" class="ico_tokenomics_section section_space pb-0">
                <div class="container">
                    <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="600">
                        <h2 class="heading_text mb-0">
                            Real World Coin Tokenomics
                        </h2>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-4 position-relative z-1">
                            <ul class="tokenomics_block unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                    <div class="percent">30%</div>
                                    <div class="info">
                                        <h4 class="heading_text">Presale</h4>
                                        <div class="value">
                                            [<span class="odometer" data-count="300000000">0</span><span></span>]
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                    <div class="percent">30%</div>
                                    <div class="info">
                                        <h4 class="heading_text">CEX & DEX Liquidity</h4>
                                        <div class="value">
                                            [<span class="odometer" data-count="300000000">0</span><span></span>]
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <div class="percent">20%</div>
                                    <div class="info">
                                        <h4 class="heading_text">Team</h4>
                                        <div class="value">
                                            [<span class="odometer" data-count="200000000">0</span><span></span>]
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                    <div class="percent">10%</div>
                                    <div class="info">
                                        <h4 class="heading_text">Community Incentives</h4>
                                        <div class="value">
                                            [<span class="odometer" data-count="100000000">0</span><span></span>]
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                    <div class="percent">10%</div>
                                    <div class="info">
                                        <h4 class="heading_text">Marketing</h4>
                                        <div class="value">
                                            [<span class="odometer" data-count="100000000">0</span><span></span>]
                                        </div>
                                    </div>
                                </li>
                                {{-- <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                    <div class="percent">28%</div>
                                    <div class="info">
                                        <h4 class="heading_text">Treasury and Ecosystem Growth</h4>
                                        <div class="value">
                                            [<span class="odometer" data-count="1200000000">0</span><span>$</span>]
                                        </div>
                                    </div>
                                </li> --}}
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <div class="icon_coins_image" style="padding-right: 180px; text-align: right;">
                                <img src="{{ asset('a.webp') }}" style="height:60%; width:60%;"
                                    alt="ICO Coin Image">
                            </div>
                        </div>
                        <div class="col-lg-4 position-relative z-1">
                            <ul class="ico_features_group unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_token_supply.svg') }}"
                                                alt="Icon Token Supply">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Total Token Supply</h3>
                                            <p class="iconbox_description mb-0">1000000000</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('bbb.png') }}" alt="Icon Token Network">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Token Network</h3>
                                            <p class="iconbox_description mb-0">BEP-20</p>
                                        </div>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_estimated_launch_price.svg') }}"
                                                alt="Icon Estimated Launch Price">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Estimated Launch price</h3>
                                            <p class="iconbox_description mb-0">0.6$</p>
                                        </div>
                                    </div>
                                </li>
                                {{-- <li data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                    <div class="ico_iconbox_icon_left">
                                        <div class="iconbox_icon">
                                            <img src="{{ asset('assets/icons/icon_expected_ripple_price.svg') }}"
                                                alt="Icon Expected Ripple Price">
                                        </div>
                                        <div class="iconbox_info">
                                            <h3 class="iconbox_title">Expected Ripple price</h3>
                                            <p class="iconbox_description mb-0">0.80</p>
                                        </div>
                                    </div>
                                </li> --}}
                            </ul>
                        </div>
                    </div><br><br>

                    <div class="btns_group pb-0 justify-content-center" data-aos="fade-up" data-aos-duration="600">
                        <a class="ico_creative_btn" href="#!">
                            <span class="btn_wrapper">
                                <span class="btn_icon_left">
                                    <small class="dot_top"></small>
                                    <small class="dot_bottom"></small>
                                    <svg class="icon_arrow_left" viewBox="0 0 28 23"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                        <path
                                            d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                        <path
                                            d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                    </svg>
                                </span>
                                <span class="btn_label">Purchase a Token</span>
                                <span class="btn_icon_right">
                                    <small class="dot_top"></small>
                                    <small class="dot_bottom"></small>
                                    <svg class="icon_arrow_right" viewBox="0 0 27 23"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                        <path
                                            d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                        <path
                                            d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <!-- Tokenomics Section - End
        ================================================== -->

            <!-- ICO Roadmap Section - Start
        ================================================== -->
            <section id="id_ico_roadmap_section" class="ico_roadmap_section section_space mt-lg-5 section_decoration">
                <div class="container">
                    <div class="ico_heading_block text-center mt-lg-5 pt-lg-5" data-aos="fade-up"
                        data-aos-duration="600">
                        <h2 class="heading_text mb-0">
                            Roadmap
                        </h2>
                    </div>

                    <div class="ico_roadmap_flexbox" data-aos="fade-up" data-aos-duration="600"
                        data-aos-delay="100">
                        <div class="roadmap_block">
                            <div class="badge" style="color: #6c757d;">Q1 - 2025</div>
                            <h3 class="heading_text">
                                RWC'S CALL TO ACTION
                            </h3>
                            <ul class="iconlist_block unordered_list_block">
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Concept & Planning.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Conduct in-depth analysis to identify market opportunities and
                                        challenges.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Develop a clear and innovative concept tailored to industry needs.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Prepare a comprehensive document detailing the project’s vision,
                                        goals, and tokenomics.
                                    </span>
                                </li>
                            </ul>
                            <div class="hover_shape">
                                <img src="{{ asset('assets/images/shapes/shape_circle_1.webp') }}"
                                    alt="Shape Circle">
                            </div>
                        </div>
                        <div class="roadmap_block">
                            <div class="badge" style="color: #6c757d;">Q2 - 2025</div>
                            <h3 class="heading_text">
                                RWC'S EVOLUTION
                            </h3>
                            <ul class="iconlist_block unordered_list_block">
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Community Building.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Connect with potential investors and users to create awareness.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Leverage social platforms to grow the community and keep them
                                        informed.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Offer rewards and bonuses to early supporters to build trust.
                                    </span>
                                </li>
                            </ul>
                            <div class="hover_shape">
                                <img src="{{ asset('assets/images/shapes/shape_circle_1.webp') }}"
                                    alt="Shape Circle">
                            </div>
                        </div>
                        <div class="roadmap_block">
                            <div class="badge" style="color: #6c757d;">Q3 - 2026</div>
                            <h3 class="heading_text">
                                RWC's ASCENT
                            </h3>
                            <ul class="iconlist_block unordered_list_block">
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        30% Token sale
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Strong community interest and early investments that build
                                        momentum.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Achieving target funding goals during the ICO period, project
                                        viability.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Key feature milestones achieved.
                                    </span>
                                </li>
                            </ul>
                            <div class="hover_shape">
                                <img src="{{ asset('assets/images/shapes/shape_circle_1.webp') }}"
                                    alt="Shape Circle">
                            </div>
                        </div>
                        <div class="roadmap_block">
                            <div class="badge" style="color: #6c757d;">Q4 - 2026</div>
                            <h3 class="heading_text">
                                WEBSITE LAUNCH: THE OFFICIAL RWC
                            </h3>
                            <ul class="iconlist_block unordered_list_block">
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        First decentrlize exchange listing.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Tokens for public sale to investors.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Allocate tokens for the team.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Set aside tokens for future needs.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Tokens will drive community and marketing efforts.
                                    </span>
                                </li>
                                <li>
                                    <span class="iconlist_icon">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span class="iconlist_label">
                                        Reward participants for promotion.
                                    </span>
                                </li>
                            </ul>
                            <div class="hover_shape">
                                <img src="{{ asset('assets/images/shapes/shape_circle_1.webp') }}"
                                    alt="Shape Circle">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="decoration_item shape_divider_1">
                    <img src="{{ asset('assets/images/shapes/shape_section_divider_2.svg') }}" alt="Shape Divider">
                </div>
            </section>
            <!-- ICO Roadmap Section - End
        ================================================== -->

            <!-- Team Section - Start
        ================================================== -->
            <section id="id_ico_team_section"
                class="ico_team_section section_decoration section_shadow_top section_space">
                <div class="decoration_item shape_divider_1">
                    <img src="{{ asset('assets/images/shapes/shape_section_divider_1.svg') }}" alt="Shape Divider">
                </div>
                <div class="container">
                    <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="800">
                        <h2 class="heading_text mb-0">
                            Active Team & Advisors
                        </h2>
                    </div>

                    <div class="tab_block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                        <div class="d-flex justify-content-center">
                            <ul class="nav unordered_list justify-content-md-center" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-target="#tab_advisory_team"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="true">Advisory Team</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-target="#tab_management_team"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="false">Management Team</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-target="#tab_marketing_team"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="false">Marketing Team</button>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" role="tabpanel" id="tab_advisory_team">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_1.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_1.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Levi Harrison</h3>
                                                    <span class="team_member_designation mb-0">Compliance
                                                        Officer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Compliance Officer ensuring regulatory adherence and risk
                                                        management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">James Anderson</h4>
                                                    <span class="team_member_designation mb-0">Compliance
                                                        Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_2.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_2.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Luna Seraphine</h3>
                                                    <span class="team_member_designation mb-0">Financial
                                                        Officer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Financial Officer focused on profitability and resource
                                                        management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">William Harris</h4>
                                                    <span class="team_member_designation mb-0">Financial
                                                        Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_3.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_3.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Elias Maverick</h3>
                                                    <span class="team_member_designation mb-0">Founder & CEO</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        A hands on founder who loves building scaling businesses with
                                                        clients.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Charles Bennett</h4>
                                                    <span class="team_member_designation mb-0">Founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_4.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_4.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Atticus Graham</h3>
                                                    <span class="team_member_designation mb-0">Technical
                                                        Support</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Passionate in seeking solutions for your problems.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Atticus Graham</h4>
                                                    <span class="team_member_designation mb-0">Technical
                                                        Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_5.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_5.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Amara Noelle</h3>
                                                    <span class="team_member_designation mb-0">CTO Manager</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        CTO Manager driving tech innovation and overseeing development
                                                        strategies.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Amara Noelle</h4>
                                                    <span class="team_member_designation mb-0">CTO Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_6.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_6.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Ethan Mitchell</h3>
                                                    <span class="team_member_designation mb-0">Blockchain
                                                        Developer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Blockchain Developer building secure and scalable decentralized
                                                        solutions.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Ethan Mitchell</h4>
                                                    <span class="team_member_designation mb-0">Blockchain
                                                        Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_7.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_7.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Aurora Selene</h3>
                                                    <span class="team_member_designation mb-0">Legal Advisor</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Legal Advisor providing expert guidance on legal matters and
                                                        risk management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Aurora Selene</h4>
                                                    <span class="team_member_designation mb-0">Legal Advisor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_8.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_8.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Orion Maxwell</h3>
                                                    <span class="team_member_designation mb-0">Project Manager</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Committed to delivering successful projects consistently.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Orion Maxwell</h4>
                                                    <span class="team_member_designation mb-0">Project Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> --}}
                                </div>
                            </div>
                            <div class="tab-pane fade" role="tabpanel" id="tab_management_team">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_1.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_1.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Levi Harrison</h3>
                                                    <span class="team_member_designation mb-0">Compliance
                                                        Officer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Compliance Officer ensuring regulatory adherence and risk
                                                        management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Emily Thompson</h4>
                                                    <span class="team_member_designation mb-0">Compliance
                                                        Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_2.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_2.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Luna Seraphine</h3>
                                                    <span class="team_member_designation mb-0">Financial
                                                        Officer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Financial Officer focused on profitability and resource
                                                        management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Sarah Mitchell</h4>
                                                    <span class="team_member_designation mb-0">Financial
                                                        Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_3.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_3.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Elias Maverick</h3>
                                                    <span class="team_member_designation mb-0">Founder & CEO</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        A hands on founder who loves building scaling businesses with
                                                        clients.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Olivia Carter</h4>
                                                    <span class="team_member_designation mb-0">Founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_4.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_4.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Atticus Graham</h3>
                                                    <span class="team_member_designation mb-0">Technical
                                                        Support</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Passionate in seeking solutions for your problems.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Atticus Graham</h4>
                                                    <span class="team_member_designation mb-0">Technical
                                                        Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_5.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_5.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Amara Noelle</h3>
                                                    <span class="team_member_designation mb-0">CTO Manager</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        CTO Manager driving tech innovation and overseeing development
                                                        strategies.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Amara Noelle</h4>
                                                    <span class="team_member_designation mb-0">CTO Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_6.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_6.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Ethan Mitchell</h3>
                                                    <span class="team_member_designation mb-0">Blockchain
                                                        Developer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Blockchain Developer building secure and scalable decentralized
                                                        solutions.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Ethan Mitchell</h4>
                                                    <span class="team_member_designation mb-0">Blockchain
                                                        Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_7.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_7.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Aurora Selene</h3>
                                                    <span class="team_member_designation mb-0">Legal Advisor</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Legal Advisor providing expert guidance on legal matters and
                                                        risk management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Aurora Selene</h4>
                                                    <span class="team_member_designation mb-0">Legal Advisor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_8.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_8.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Orion Maxwell</h3>
                                                    <span class="team_member_designation mb-0">Project Manager</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Committed to delivering successful projects consistently.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Orion Maxwell</h4>
                                                    <span class="team_member_designation mb-0">Project Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> --}}
                                </div>
                            </div>
                            <div class="tab-pane fade" role="tabpanel" id="tab_marketing_team">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_1.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_1.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Levi Harrison</h3>
                                                    <span class="team_member_designation mb-0">Compliance
                                                        Officer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Compliance Officer ensuring regulatory adherence and risk
                                                        management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Daniel Robinson</h4>
                                                    <span class="team_member_designation mb-0">Compliance
                                                        Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_2.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_2.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Luna Seraphine</h3>
                                                    <span class="team_member_designation mb-0">Financial
                                                        Officer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Financial Officer focused on profitability and resource
                                                        management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Matthew Clarke</h4>
                                                    <span class="team_member_designation mb-0">Financial
                                                        Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_3.svg');">
                                                        <div class="avatar_wrap">
                                                            {{-- <img src="{{ asset('assets/images/avatars/avatar_3.webp') }}"
                                                                alt="Avatar"> --}}
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Elias Maverick</h3>
                                                    <span class="team_member_designation mb-0">Founder & CEO</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        A hands on founder who loves building scaling businesses with
                                                        clients.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Sophia Collins</h4>
                                                    <span class="team_member_designation mb-0">Founder & CEO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_4.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_4.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Atticus Graham</h3>
                                                    <span class="team_member_designation mb-0">Technical
                                                        Support</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Passionate in seeking solutions for your problems.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Atticus Graham</h4>
                                                    <span class="team_member_designation mb-0">Technical
                                                        Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_5.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_5.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Amara Noelle</h3>
                                                    <span class="team_member_designation mb-0">CTO Manager</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        CTO Manager driving tech innovation and overseeing development
                                                        strategies.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Amara Noelle</h4>
                                                    <span class="team_member_designation mb-0">CTO Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_6.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_6.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Ethan Mitchell</h3>
                                                    <span class="team_member_designation mb-0">Blockchain
                                                        Developer</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Blockchain Developer building secure and scalable decentralized
                                                        solutions.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Ethan Mitchell</h4>
                                                    <span class="team_member_designation mb-0">Blockchain
                                                        Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_7.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_7.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Aurora Selene</h3>
                                                    <span class="team_member_designation mb-0">Legal Advisor</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Legal Advisor providing expert guidance on legal matters and
                                                        risk management.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Aurora Selene</h4>
                                                    <span class="team_member_designation mb-0">Legal Advisor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 col-sm-6">
                                        <div class="ico_team_block">
                                            <div class="ico_team_block_inner">
                                                <div class="front_side_content">
                                                    <div class="team_avatar"
                                                        style="background-image: url('assets/images/shapes/shape_circle_8.svg');">
                                                        <div class="avatar_wrap">
                                                            <img src="assets/images/avatars/avatar_8.webp"
                                                                alt="Avatar">
                                                        </div>
                                                    </div>
                                                    <h3 class="team_member_name">Orion Maxwell</h3>
                                                    <span class="team_member_designation mb-0">Project Manager</span>
                                                </div>
                                                <div class="back_side_content">
                                                    <p class="team_member_description">
                                                        Committed to delivering successful projects consistently.
                                                    </p>
                                                    <ul class="social_block unordered_list justify-content-center">
                                                        <li>
                                                            <a href="#!">
                                                                <i class="fa-brands fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <h4 class="team_member_name">Orion Maxwell</h4>
                                                    <span class="team_member_designation mb-0">Project Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Team Section - End
        ================================================== -->

            <!-- White Paper Section - Start
        ================================================== -->
            <section id="id_ico_whitepaper_section"
                class="ico_whitepaper_section section_space pb-0 section_decoration section_shadow_top">
                <div class="decoration_item shape_divider_1">
                    <img src="{{ asset('assets/images/shapes/shape_section_divider_1.svg') }}" alt="Shape Divider">
                </div>
                <div class="container">
                    <div class="ico_heading_block text-center mt-lg-4" data-aos="fade-up" data-aos-duration="800">
                        <h2 class="heading_text mb-0">
                            Whitepaper
                        </h2>
                    </div>

                    <div class="whitepaper_content" data-aos="fade-up" data-aos-duration="800"
                        data-aos-delay="100">
                        <div class="row m-0 align-items-center">
                            <div class="col-lg-6 p-0">
                                <div class="whitepaper_image_wrap"
                                    style="background-image: url('assets/images/about/whitepaper_image_bg.webp');">
                                    <div class="image_block"><a href="{{ asset('whitepaper.pdf') }}">
                                            <img src="{{ asset('assets/images/about/ico_whitepager_image.webp') }}"
                                                alt="ICO White Paper Image"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 p-0">
                                <div class="whitepaper_info_wrap">
                                    <div class="info_wrap_1">
                                        <h3 class="heading_text">Audit Results</h3>
                                        <p>
                                            Real World Coin has been successfully audited by the trusted organizations
                                            BitTorrent and Stacks. Passing these audits underscores our dedication to
                                            building a safe and robust solution for all users.
                                        </p>
                                        <ul class="partners_group unordered_list">
                                            <li>
                                                <div class="ico_partner_logo">
                                                    <a class="logo_wrap" href="#!">
                                                        <img src="{{ asset('assets/images/partners/coin.png') }}"
                                                            alt="Partner Logo">
                                                        <span class="dot_1"></span>
                                                        <span class="dot_2"></span>
                                                        <span class="dot_3"></span>
                                                        <span class="dot_4"></span>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="ico_partner_logo">
                                                    <a class="logo_wrap" href="#!">
                                                        <img src="{{ asset('assets/images/partners/grcko.png') }}"
                                                            alt="Partner Logo">
                                                        <span class="dot_1"></span>
                                                        <span class="dot_2"></span>
                                                        <span class="dot_3"></span>
                                                        <span class="dot_4"></span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="info_wrap_2">
                                        <h3 class="heading_text">Explore Whitepaper</h3>
                                        <p>
                                            Here is our full documents that help you to understand deeply about us and
                                            our operation.
                                        </p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <img src="{{ asset('assets/icons/icon_check.svg') }}"
                                                                alt="Icon Check">
                                                        </span>
                                                        <span class="iconlist_label">
                                                            White Paper.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <img src="{{ asset('assets/icons/icon_check.svg') }}"
                                                                alt="Icon Check">
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Privacy & Policy.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-6">
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <img src="{{ asset('assets/icons/icon_check.svg') }}"
                                                                alt="Icon Check">
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Terms Of Coin Sale.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <img src="{{ asset('assets/icons/icon_check.svg') }}"
                                                                alt="Icon Check">
                                                        </span>
                                                        <span class="iconlist_label">
                                                            One Pager.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="ico_creative_btn" href="{{ asset('whitepaper.pdf') }}"
                                            target="_blank">
                                            <span class="btn_wrapper">
                                                <span class="btn_icon_left">
                                                    <small class="dot_top"></small>
                                                    <small class="dot_bottom"></small>
                                                    <svg class="icon_arrow_left" viewBox="0 0 28 23"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                                        <path
                                                            d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                                        <path
                                                            d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                                    </svg>
                                                </span>
                                                <span class="btn_label">Download White Papper</span>
                                                <span class="btn_icon_right">
                                                    <small class="dot_top"></small>
                                                    <small class="dot_bottom"></small>
                                                    <svg class="icon_arrow_right" viewBox="0 0 27 23"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                                        <path
                                                            d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                                        <path
                                                            d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                                    </svg>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- White Paper Section - End
        ================================================== -->

            <!-- Event Section - Start
        ================================================== -->
            <section class="ico_event_section section_space pb-0 section_decoration mt-lg-5">
                <div class="container">
                    <div class="ico_heading_block text-center mt-lg-5 pt-lg-5" data-aos="fade-up"
                        data-aos-duration="800">
                        <h2 class="heading_text mb-0">
                            Our Upcoming Events
                        </h2>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 order-lg-last">
                            <ul class="event_loop_builder unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div class="event_card_block">
                                        <a class="event_image" href="#!">
                                            <img src="{{ asset('pexels-ds-stories-7267598.jpg') }}"
                                                alt="Event Image">
                                        </a>
                                        {{-- <div class="event_date">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            <span>24, Dec 2025</span>
                                        </div> --}}
                                        <div class="event_info">
                                            <div class="event_location">
                                                <i class="fa-regular fa-location-dot"></i>
                                                USA.
                                            </div>
                                            <h3 class="event_title">
                                                <a href="#!">
                                                    Blockchain Horizons The Future of Digital Finance.
                                                </a>
                                            </h3>
                                            <a class="ico_btn_link" href="#!">
                                                <span class="btn_label">Get a Tickets</span>
                                                <span class="btn_icon">
                                                    <svg class="icon_arrow" viewBox="0 0 27 23"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z">
                                                        </path>
                                                        <path
                                                            d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z">
                                                        </path>
                                                        <path
                                                            d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul class="event_loop_builder unordered_list_block">
                                <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                    <div class="event_block_left_image">
                                        <a class="event_image" href="#!">
                                            <img src="{{ asset('pexels-babydov-7788006.jpg') }}" alt="Event Image">
                                        </a>
                                        <div class="event_info">
                                            <div class="event_location">
                                                <i class="fa-regular fa-location-dot"></i>
                                                Dubai.
                                            </div>
                                            <h3 class="event_title mb-0">
                                                <a href="#!">
                                                    Digital Assets Forum Navigating the Crypto Landscape.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                                {{-- <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div class="event_block_left_image">
                                        <a class="event_image" href="#!">
                                            <img src="{{ asset('assets/images/events/event_image_4.jpg') }}"
                                                alt="Event Image">
                            
                                        </a>
                                        <div class="event_info">
                                            <div class="event_location">
                                                <i class="fa-regular fa-location-dot"></i>
                                                New York, NY 10036, USA.
                                            </div>
                                            <h3 class="event_title mb-0">
                                                <a href="#!">
                                                    Real World Coin Impact Rising Stars in the Crypto Space.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </li> --}}
                                {{-- <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                                    <div class="event_block_left_image">
                                        <a class="event_image" href="#!">
                                            <img src="{{ asset('assets/images/events/event_image_3.webp') }} alt="Event
                                                Image">
                                        </a>
                                        <div class="event_info">
                                            <div class="event_location">
                                                <i class="fa-regular fa-location-dot"></i>
                                                139 W, 46th Street, Australia.
                                            </div>
                                            <h3 class="event_title mb-0">
                                                <a href="#!">
                                                    Mining Matters Maximizing Returns in Crypto Mining.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </li> --}}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="decoration_item shape_divider_1">
                    <img src="{{ asset('assets/images/shapes/shape_section_divider_2.svg') }}" alt="Shape Divider">
                </div>
                <div class="decoration_item shape_shadow_1">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
                <div class="decoration_item shape_shadow_2">
                    <img src="{{ asset('assets/images/shapes/shape_poligon.svg') }}" alt="Shape Color Shadow">
                </div>
            </section>
            <!-- Event Section - End
        ================================================== -->

            <!-- FAQ Section - Start
        ================================================== -->
            <section class="faq_section section_space">
                <div class="container">
                    <div class="ico_heading_block text-center" data-aos="fade-up" data-aos-duration="800">
                        <h2 class="heading_text mb-0">
                            FAQ
                        </h2>
                    </div>

                    <div class="tab_block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                        <div class="d-flex justify-content-center">
                            {{-- <ul class="nav unordered_list justify-content-md-center" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-target="#tab_general_question"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="true">General Question</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-target="#tab_ico_questions"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="false">ICO Questions</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-target="#tab_tokens_sales"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="false">Tokens Sales</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-target="#tab_clients_releted"
                                        data-bs-toggle="tab" type="button" role="tab"
                                        aria-selected="false">Clients Releted</button>
                                </li>
                            </ul> --}}
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" role="tabpanel" id="tab_general_question">
                                <div class="ico_accordion" id="accordion_1">
                                    <div class="accordion-item">
                                        <div class="icon_arrow" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_1" aria-expanded="true"
                                            aria-controls="collapse_1">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_1" aria-expanded="true"
                                            aria-controls="collapse_1">
                                            01- When can I claim my Tokens?
                                        </div>
                                        <div id="collapse_1" class="accordion-collapse collapse show"
                                            data-bs-parent="#accordion_1">
                                            <div class="accordion-body">
                                                <p>
                                                    The claiming process uses secure Web3Toolkit
                                                    technology, allowing you to claim tokens after the presale ends.
                                                    Simply
                                                    reconnect your wallet, such as Best Wallet or MetaMask, and click
                                                    "claim." Additionally, Web3Payments enables staking of your tokens
                                                    once
                                                    they’ve been claimed.
                                                </p>
                                                {{-- <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul> --}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_2" aria-expanded="false"
                                            aria-controls="collapse_2">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_2"
                                            aria-expanded="false" aria-controls="collapse_2">
                                            02- When will Real World Coin be released?
                                        </div>
                                        <div id="collapse_2" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_1">
                                            <div class="accordion-body">
                                                <p>
                                                    Real World Coin exchange and ecosystem will be released
                                                    once the presale has ended! AKA the day of judgment.
                                                </p>
                                                {{-- <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul> --}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_3" aria-expanded="false"
                                            aria-controls="collapse_3">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_3"
                                            aria-expanded="false" aria-controls="collapse_3">
                                            03- How do I earn rewards on the
                                            platform?
                                        </div>
                                        <div id="collapse_3" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_1">
                                            <div class="accordion-body">
                                                <p>
                                                    Create coins, engage with the community, and
                                                    climb the leaderboard! You'll earn tokens and badges as you gain
                                                    likes,
                                                    shares, and laughs..
                                                </p>
                                                {{-- <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul> --}}
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_4" aria-expanded="false"
                                            aria-controls="collapse_4">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_4"
                                            aria-expanded="false" aria-controls="collapse_4">
                                            04- What is the total supply of Real World Coin tokens?
                                        </div>
                                        <div id="collapse_4" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_1">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_5" aria-expanded="false"
                                            aria-controls="collapse_5">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_5"
                                            aria-expanded="false" aria-controls="collapse_5">
                                            05- Can I sell my tokens after the ICO?
                                        </div>
                                        <div id="collapse_5" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_1">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> --}}
                                </div>
                            </div>

                            <div class="tab-pane fade" role="tabpanel" id="tab_ico_questions">
                                <div class="ico_accordion" id="accordion_2">
                                    <div class="accordion-item">
                                        <div class="icon_arrow" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_6" aria-expanded="true"
                                            aria-controls="collapse_6">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_6" aria-expanded="true"
                                            aria-controls="collapse_6">
                                            01- What is Real World Coin ICO?
                                        </div>
                                        <div id="collapse_6" class="accordion-collapse collapse show"
                                            data-bs-parent="#accordion_2">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_7" aria-expanded="false"
                                            aria-controls="collapse_7">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_7"
                                            aria-expanded="false" aria-controls="collapse_7">
                                            02- How can I participate in the Real World Coin ICO?
                                        </div>
                                        <div id="collapse_7" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_2">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_8" aria-expanded="false"
                                            aria-controls="collapse_8">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_8"
                                            aria-expanded="false" aria-controls="collapse_8">
                                            03- What are the benefits of investing in Real World Coin ICO?
                                        </div>
                                        <div id="collapse_8" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_2">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_9" aria-expanded="false"
                                            aria-controls="collapse_9">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_9"
                                            aria-expanded="false" aria-controls="collapse_9">
                                            04- What is the total supply of Real World Coin tokens?
                                        </div>
                                        <div id="collapse_9" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_2">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_10" aria-expanded="false"
                                            aria-controls="collapse_10">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_10"
                                            aria-expanded="false" aria-controls="collapse_10">
                                            05- Can I sell my tokens after the ICO?
                                        </div>
                                        <div id="collapse_10" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_2">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" role="tabpanel" id="tab_tokens_sales">
                                <div class="ico_accordion" id="accordion_3">
                                    <div class="accordion-item">
                                        <div class="icon_arrow" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_11" aria-expanded="true"
                                            aria-controls="collapse_11">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_11" aria-expanded="true"
                                            aria-controls="collapse_11">
                                            01- What is Real World Coin ICO?
                                        </div>
                                        <div id="collapse_11" class="accordion-collapse collapse show"
                                            data-bs-parent="#accordion_3">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_12" aria-expanded="false"
                                            aria-controls="collapse_12">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_12"
                                            aria-expanded="false" aria-controls="collapse_12">
                                            02- How can I participate in the Real World Coin ICO?
                                        </div>
                                        <div id="collapse_12" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_3">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_13" aria-expanded="false"
                                            aria-controls="collapse_13">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_13"
                                            aria-expanded="false" aria-controls="collapse_13">
                                            03- What are the benefits of investing in Real World Coin ICO?
                                        </div>
                                        <div id="collapse_13" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_3">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_14" aria-expanded="false"
                                            aria-controls="collapse_14">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_14"
                                            aria-expanded="false" aria-controls="collapse_14">
                                            04- What is the total supply of Real World Coin tokens?
                                        </div>
                                        <div id="collapse_14" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_3">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_15" aria-expanded="false"
                                            aria-controls="collapse_15">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_15"
                                            aria-expanded="false" aria-controls="collapse_15">
                                            05- Can I sell my tokens after the ICO?
                                        </div>
                                        <div id="collapse_15" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_3">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" role="tabpanel" id="tab_clients_releted">
                                <div class="ico_accordion" id="accordion_4">
                                    <div class="accordion-item">
                                        <div class="icon_arrow" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_16" aria-expanded="true"
                                            aria-controls="collapse_16">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_16" aria-expanded="true"
                                            aria-controls="collapse_16">
                                            01- What is Real World Coin ICO?
                                        </div>
                                        <div id="collapse_16" class="accordion-collapse collapse show"
                                            data-bs-parent="#accordion_4">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_17" aria-expanded="false"
                                            aria-controls="collapse_17">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_17"
                                            aria-expanded="false" aria-controls="collapse_17">
                                            02- How can I participate in the Real World Coin ICO?
                                        </div>
                                        <div id="collapse_17" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_4">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_18" aria-expanded="false"
                                            aria-controls="collapse_18">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_18"
                                            aria-expanded="false" aria-controls="collapse_18">
                                            03- What are the benefits of investing in Real World Coin ICO?
                                        </div>
                                        <div id="collapse_18" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_4">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_19" aria-expanded="false"
                                            aria-controls="collapse_19">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_19"
                                            aria-expanded="false" aria-controls="collapse_19">
                                            04- What is the total supply of Real World Coin tokens?
                                        </div>
                                        <div id="collapse_19" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_4">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <div class="icon_arrow collapsed" role="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_20" aria-expanded="false"
                                            aria-controls="collapse_20">
                                            <svg viewBox="0 0 23 27" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                                                <path
                                                    d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                                                <path
                                                    d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                                            </svg>
                                        </div>
                                        <div class="accordion-button collapsed" role="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapse_20"
                                            aria-expanded="false" aria-controls="collapse_20">
                                            05- Can I sell my tokens after the ICO?
                                        </div>
                                        <div id="collapse_20" class="accordion-collapse collapse"
                                            data-bs-parent="#accordion_4">
                                            <div class="accordion-body">
                                                <p>
                                                    You can participate in the Real World Coin ICO, simply register on
                                                    our
                                                    platform, complete the KYC (Know Your Customer) process, and follow
                                                    the instructions to purchase tokens during the ICO period, Once
                                                    registered buy tokens with secure payments.
                                                </p>
                                                <ul class="iconlist_block unordered_list_block">
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Sign up and complete the KYC process.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span class="iconlist_icon">
                                                            <i class="fa-solid fa-circle"></i>
                                                        </span>
                                                        <span class="iconlist_label">
                                                            Follow instructions to purchase tokens securely.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- FAQ Section - End
        ================================================== -->

        </main>
        <!-- Main Body - End
      ================================================== -->

        <!-- Site Footer - Start
      ================================================== -->
        <footer class="ico_site_footer section_decoration section_shadow_top">
            <div class="decoration_item shape_top">
                <img src="{{ asset('assets/images/shapes/shape_ico_hero_section_bottom.svg') }}"
                    alt="Bottom Line Shape">
            </div>
            <div class="container">
                <ul class="pagelist_block unordered_list justify-content-center text-uppercase">
                    <li>
                        <a class="scrollspy_btn" href="#id_ico_about_section">
                            <span class="pagelist_label">
                                About RWC
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="scrollspy_btn" href="#id_ico_service_section">
                            <span class="pagelist_label">
                                Features
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="scrollspy_btn" href="#id_ico_tokenomics_section">
                            <span class="pagelist_label">
                                Tokenomics
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="scrollspy_btn" href="#id_ico_roadmap_section">
                            <span class="pagelist_label">
                                Roadmap
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="scrollspy_btn" href="#id_ico_team_section">
                            <span class="pagelist_label">
                                Team
                            </span>
                        </a>
                    </li>
                    <li>
                        <a class="scrollspy_btn" href="#id_ico_whitepaper_section">
                            <span class="pagelist_label">
                                Whitepaper
                            </span>
                        </a>
                    </li>
                </ul>
                <div class="middle_area">
                    <div class="column">
                        <h3 class="footer_title text-uppercase">Join our social group</h3>
                        <ul class="social_block style_2 unordered_list justify-content-center">
                            <li>
                                <a href="#!">
                                    <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.1817 2.34636C10.5036 3.04236 7.14877 4.48456 2.11879 6.67146C1.30201 6.99576 0.873436 7.31296 0.834656 7.62286C0.768491 8.14806 1.42705 8.35476 2.32148 8.63456C2.44372 8.67336 2.57025 8.71206 2.69969 8.75516C3.58123 9.04066 4.76611 9.37506 5.38149 9.38796C5.9409 9.39946 6.56497 9.16986 7.25381 8.69916C11.9531 5.53206 14.379 3.93206 14.5314 3.89756C14.6393 3.87316 14.7888 3.84166 14.8894 3.93206C14.9901 4.02106 14.9801 4.19036 14.97 4.23626C14.9038 4.51326 12.3241 6.90826 10.9868 8.14806C10.5698 8.53416 10.2749 8.80826 10.2146 8.87136C10.0794 9.01056 9.94141 9.14396 9.80908 9.27176C8.98941 10.0581 8.37683 10.6494 9.84356 11.6137C10.5482 12.0772 11.1119 12.4604 11.6741 12.8421C12.2882 13.2597 12.9008 13.6758 13.6945 14.1953C13.8959 14.3273 14.0886 14.4636 14.2769 14.5971C14.9916 15.1065 15.6343 15.5628 16.4281 15.4911C16.8883 15.448 17.3656 15.0161 17.6072 13.726C18.1781 10.6752 19.3026 4.06836 19.5629 1.34476C19.5788 1.11856 19.5691 0.891358 19.5341 0.667358C19.5132 0.486458 19.425 0.320058 19.2868 0.201058C19.0812 0.0331581 18.7619 -0.002742 18.6182 0.000158001C17.9696 0.011558 16.9746 0.357458 12.1817 2.34636Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.7876 14L9.31558 5.8405L9.32498 5.8482L14.2588 0H12.6101L8.59076 4.76L5.39902 0H1.07488L6.18362 7.6179L0.794922 14H2.44366L6.91214 8.7042L10.4635 14H14.7876ZM4.74576 1.2727L12.4234 12.7273H11.1168L3.43295 1.2727H4.74576Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {{-- <div class="column">
                        <h3 class="footer_title text-uppercase">Subscribe to our newslatter</h3>
                        <form class="ico_newsletter_form" action="#">
                            <input type="email" name="email" placeholder="Enter your email">
                            <button class="submit_btn" type="submit">Submit</button>
                        </form>
                    </div> --}}
                    <div class="column">
                        <h3 class="footer_title text-uppercase">Let’s RWC great together.</h3>
                        <a class="ico_creative_btn" href="#">
                            <span class="btn_wrapper">
                                <span class="btn_icon_left">
                                    <small class="dot_top"></small>
                                    <small class="dot_bottom"></small>
                                    <svg class="icon_arrow_left" viewBox="0 0 28 23"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.4106 20.8083L5.36673 12.6878C5.26033 12.5804 5.11542 12.52 4.96423 12.52H1.84503C1.34158 12.52 1.08822 13.1276 1.44252 13.4852L9.48642 21.6057C9.59281 21.7131 9.73773 21.7736 9.88892 21.7736H13.0081C13.5116 21.7736 13.7649 21.166 13.4106 20.8083Z" />
                                        <path
                                            d="M12.6803 9.57324H24.71C25.7116 9.57324 26.5234 10.3851 26.5234 11.3866C26.5234 12.3882 25.7116 13.2 24.71 13.2H12.6803C11.6788 13.2 10.8669 12.3882 10.8669 11.3866C10.8669 10.3851 11.6788 9.57324 12.6803 9.57324Z" />
                                        <path
                                            d="M1.44252 9.28834L9.48641 1.16784C9.59281 1.06043 9.73772 1 9.88891 1H13.0081C13.5116 1 13.7649 1.60758 13.4106 1.96525L5.36672 10.0858C5.26033 10.1932 5.11541 10.2536 4.96422 10.2536H1.84502C1.34158 10.2536 1.08822 9.64601 1.44252 9.28834Z" />
                                    </svg>
                                </span>
                                <span class="btn_label">Purchase a Token</span>
                                <span class="btn_icon_right">
                                    <small class="dot_top"></small>
                                    <small class="dot_bottom"></small>
                                    <svg class="icon_arrow_right" viewBox="0 0 27 23"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.6558 2.19168L21.6997 10.3122C21.8061 10.4196 21.951 10.48 22.1022 10.48H25.2214C25.7248 10.48 25.9782 9.87238 25.6239 9.51478L17.58 1.39428C17.4736 1.28688 17.3287 1.22638 17.1775 1.22638H14.0583C13.5548 1.22638 13.3015 1.83398 13.6558 2.19168Z" />
                                        <path
                                            d="M14.3861 13.4268H2.35637C1.35486 13.4268 0.542969 12.6149 0.542969 11.6134C0.542969 10.6118 1.35486 9.79996 2.35637 9.79996H14.3861C15.3876 9.79996 16.1995 10.6118 16.1995 11.6134C16.1995 12.6149 15.3876 13.4268 14.3861 13.4268Z" />
                                        <path
                                            d="M25.6239 13.7117L17.58 21.8322C17.4736 21.9396 17.3287 22 17.1775 22H14.0583C13.5548 22 13.3015 21.3924 13.6558 21.0347L21.6997 12.9142C21.8061 12.8068 21.951 12.7464 22.1022 12.7464H25.2214C25.7248 12.7464 25.9782 13.354 25.6239 13.7117Z" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="footer_bottom text-center">
                    <p class="copyright_text m-0 text-secondary">Copyright© 2025 RWC. All rights reserved.</p>
                </div>
            </div>
        </footer>
        <!-- Site Footer - End
      ================================================== -->

    </div>
    <!-- Body Wrap - End -->

    <!-- Fraimwork - Jquery Include -->
    <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/js/popper.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap-dropdown-ml-hack.min.js') }}"></script>

    <!-- Animation - jquery include -->
    <script src="{{ asset('assets/js/cursor.js') }}"></script>
    <script src="{{ asset('assets/js/gsap.js') }}"></script>
    <script src="{{ asset('assets/js/gsap-scroll-trigger.js') }}"></script>
    <script src="{{ asset('assets/js/gsap-split-text.js') }}"></script>
    <script src="{{ asset('assets/js/smooth-scroll.js') }}"></script>
    <script src="{{ asset('assets/js/aos.js') }}"></script>

    <!-- Countdown Timer - jquery include -->
    <script src="{{ asset('assets/js/countdown.js') }}"></script>

    <!-- Carousel - Jquery Include -->
    <script src="{{ asset('assets/js/swiper-bundle.min.js') }}"></script>

    <!-- Video & Image Popup - Jquery Include -->
    <script src="{{ asset('assets/js/magnific-popup.min.js') }}"></script>

    <!-- Counter - Jquery Include -->
    <script src="{{ asset('assets/js/appear.min.js') }}"></script>
    <script src="{{ asset('assets/js/odometer.min.js') }}"></script>

    <!-- Custom - Jquery Include -->
    <script src="{{ asset('assets/js/main.js') }}"></script>
    {{-- Countdown Script --}}
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const countdownEl = document.querySelector(".countdown_timer_block");
            const endDate = new Date(countdownEl.getAttribute("data-countdown")).getTime();

            function updateCountdown() {
                const now = new Date().getTime();
                const distance = endDate - now;

                if (distance <= 0) {
                    countdownEl.innerHTML = "<li>Presale Ended</li>";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                //         countdownEl.innerHTML = `
            //     <li><strong>${days}</strong> Days</li>
            //     <li><strong>${hours}</strong> Hrs</li>
            //     <li><strong>${minutes}</strong> Min</li>
            //     <li><strong>${seconds}</strong> Sec</li>
            // `;
            }

            updateCountdown();
            setInterval(updateCountdown, 1000);
        });
    </script>
  {{-- <script src="{{ mix('js/app.js') }}" defer></script>
    <script type="module" src="./js/cursor.js"></script> --}}
    
<!-- ✅ Load JS libraries before your wallet.js -->
<!-- Web3.js -->
{{-- <!-- Load Web3.js -->
<script src="https://cdn.jsdelivr.net/npm/web3@1.10.0/dist/web3.min.js"></script>

<!-- Load WalletConnect Ethereum Provider -->
<script src="https://cdn.jsdelivr.net/npm/@walletconnect/ethereum-provider@2.10.4/dist/umd/index.min.js"></script> --}}

{{-- <script src="{{ mix('js/app.js') }}"></script> --}}
{{-- <script src="{{ mix('/js/wallet.js') }}"></script> --}}
<!-- ✅ CDNs -->
<script src="https://cdn.jsdelivr.net/npm/web3@1.10.0/dist/web3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@walletconnect/ethereum-provider@2.10.0/dist/ethereum-provider.min.js"></script>

<!-- ✅ Wallet JS -->
<script>

let web3;
let provider = null;
let userAddress = null;

const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";
const TOKEN_RATE = 1000;

// ✅ Initialize WalletConnect provider (only once)
async function initWalletConnect() {
    if (!provider) {
        provider = await EthereumProvider.init({
            projectId: "33238a5bc1832f91c6d3e33e4996f41f",
            chains: [56], // BSC
            rpcMap: {
                56: "https://bsc-dataseed.binance.org/"
            },
            methods: [
                "eth_sendTransaction",
                "personal_sign",
                "eth_signTypedData"
            ],
            events: ["chainChanged", "accountsChanged", "disconnect"],
            metadata: {
                name: "My DApp",
                description: "BNB to Token Swap",
                url: window.location.origin,
                icons: ["https://your-dapp.com/icon.png"]
            },
            showQrModal: true
        });

        // Handle disconnect event
        provider.on("disconnect", () => {
            userAddress = null;
            document.getElementById("walletAddress").innerText = "Disconnected";
            console.log("WalletConnect disconnected");
        });
    }
}

// ✅ Connect MetaMask
async function connectMetaMask() {
    try {
        if (!window.ethereum) {
            alert("MetaMask not found. Please install it.");
            return;
        }

        provider = window.ethereum;
        await provider.request({ method: "eth_requestAccounts" });
        web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        console.log("MetaMask connected:", userAddress);
    } catch (err) {
        console.error("MetaMask connection error:", err);
        alert("MetaMask connection failed!");
    }
}

// ✅ Connect WalletConnect (force show QR modal, prevent auto-reconnect)
async function connectWalletConnect() {
    try {
        // ✅ If there's an active WalletConnect session, disconnect first
        if (provider && provider.session) {
            await provider.disconnect();
            provider = null; // Reset provider
        }

        // ✅ Initialize a fresh provider instance
        provider = await EthereumProvider.init({
            projectId: "33238a5bc1832f91c6d3e33e4996f41f",
            chains: [56], // Binance Smart Chain
            rpcMap: {
                56: "https://bsc-dataseed.binance.org/"
            },
            methods: [
                "eth_sendTransaction",
                "personal_sign",
                "eth_signTypedData"
            ],
            events: ["chainChanged", "accountsChanged"],
            metadata: {
                name: "My DApp",
                description: "BNB to Token Swap",
                url: window.location.origin,
                icons: ["https://your-dapp.com/icon.png"]
            },
            showQrModal: true // ✅ Force show QR modal
        });

        // ✅ Show QR Modal for a new connection
        await provider.connect({ showQrModal: true });

        web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        console.log("✅ WalletConnect connected:", userAddress);

    } catch (err) {
        console.error("❌ WalletConnect connection error:", err);
        alert("WalletConnect connection failed!");
    }
}


// ✅ Buy Tokens
async function buyTokens() {
    if (!web3 || !userAddress) {
        alert("Please connect your wallet first!");
        return;
    }

    try {
        const bnbAmount = document.getElementById("bnbAmount").value;
        if (!bnbAmount || bnbAmount <= 0) {
            alert("Enter a valid BNB amount.");
            return;
        }

        const valueInWei = web3.utils.toWei(bnbAmount.toString(), "ether");

        const tx = await web3.eth.sendTransaction({
            from: userAddress,
            to: RECEIVING_WALLET,
            value: valueInWei
        });

        const tokens = bnbAmount * TOKEN_RATE;
        document.getElementById("result").innerText =
            `✅ Transaction successful! You bought ${tokens} $PEPETO tokens. TxHash: ${tx.transactionHash}`;

        console.log("Transaction successful:", tx);
    } catch (err) {
        console.error("Transaction failed:", err);
        alert("Transaction failed. Check console for details.");
    }
}

// ✅ Attach events
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectMetaMask").onclick = connectMetaMask;
    document.getElementById("connectWC").onclick = connectWalletConnect;
    document.getElementById("buyTokens").onclick = buyTokens;
});
</script>



    
</body>

<!-- Mirrored from html.xpressbuddy.com/Real World Coin/index_ico.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Aug 2025 04:49:34 GMT -->

</html>
