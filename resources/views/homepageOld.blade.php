<!DOCTYPE html>
<html lang="en" data-bs-theme="light">


<!-- Mirrored from pixellyo.com/memeworld/html/home-3.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 04 Aug 2025 04:00:54 GMT -->

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Memeworld: A feature-rich HTML template for memecoin, crypto, and ICO projects. Modern design, responsive layout, and ready for Crypto Project">
    <meta name="keywords"
        content="memecoin, crypto, ico, html template, themeforest, meme coin, cryptocurrency, blockchain, token, landing page, web3, nft, decentralized, finance, investment">
    <meta name="author" content="bplugins">
    <title>Real World Coin &amp;</title>
    <link rel="icon" href="assets/img/favicon.png" type="image/png">
    <link rel="stylesheet" href={{ asset('css/bootstrap.css') }}>
    <link rel="stylesheet" href={{ asset('css/bootstrap-icons.css') }}>
    <link rel="stylesheet" href={{ asset('css/simplebar.css') }}>
    <link rel="stylesheet" href={{ asset('css/swiper-bundle.css') }}>
    <link rel="stylesheet" href={{ asset('css/ff-1.css') }}>
    <link rel="stylesheet" href={{ asset('css/ff-2.css') }}>
    <link rel="stylesheet" href={{ asset('css/style.css') }}>
</head>

<body class="bg-success-emphasis
        overflow-x-hidden">
    <!-- Preloader -->
    <div class="preloader">
        <div class="pl">
            <div class="pl__coin">
                <div class="pl__coin-flare"></div>
                <div class="pl__coin-flare"></div>
                <div class="pl__coin-flare"></div>
                <div class="pl__coin-flare"></div>
                <div class="pl__coin-layers">
                    <div class="pl__coin-layer">
                        <div class="pl__coin-inscription"></div>
                    </div>
                    <div class="pl__coin-layer"></div>
                    <div class="pl__coin-layer"></div>
                    <div class="pl__coin-layer"></div>
                    <div class="pl__coin-layer">
                        <div class="pl__coin-inscription"></div>
                    </div>
                </div>
            </div>
            <div class="pl__shadow"></div>
        </div>
    </div>
    <!-- Preloader End -->
    <!-- Navbar  -->
    <nav
        class="navbar navbar-expand-lg primary-header primary-header--light primary-header--boxed primary-header--fixed top-3 primary-header-crossed:top-0 primary-header-crossed:full-light">
        <div class="container align-items-lg-center">
            <!-- Logo -->
            <a class="logo" href="#">
                <img src={{ asset('img/logo-yellow.png') }} alt="image" class="logo__img logo__img--light">
            </a>
            <!-- Logo End-->
            <!-- Mobile Menu Toggler -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar0"
                aria-controls="navbar0" aria-expanded="false" aria-label="Toggle navigation">
                <iconify-icon icon="solar:hamburger-menu-line-duotone"></iconify-icon>
            </button>
            <!-- Mobile Menu Toggler End-->
            <!-- Menu -->
            <div class="collapse navbar-collapse" id="navbar0">
                <ul class="navbar-nav flex-grow-1 justify-content-center mx-lg-4 mb-2 mb-lg-0">
                    <a class="nav-link" aria-current="page" href="{{ route('homepage') }}">Home</a>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="{{ route('about') }}"> About </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="{{ route('contact') }}"> Contact </a>
                    </li>
                </ul>
                <div class="d-flex align-items-center gap-3 ms-lg-auto">
                    <a href="{{ route('register') }}" class="btn btn-light fw-bold text-heading "> Get Started </a>
                </div>
            </div>
            <!-- Menu End -->
        </div>
    </nav>
    <div class="container">
    </div>
    <!-- Navbar End -->
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <!-- Hero -->
            <div class="hero-3 overflow-hidden">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <span class="d-inline-block mb-4 text-secondary fs-24 text-stroke gsap-text-animation"
                                data-delay="1" data-split-type="words"> ONE COIN TO RULE THEME ALL </span>
                            <h1 class="hero-1__title mb-10 text-light text-stroke-md text-shadow-md gsap-text-animation"
                                data-delay="1.25" data-split-type="words"> REAL WORLD COIN </h1>
                            <div class="d-flex align-items-center flex-wrap gap-4">
                                <a href="{{ route('register') }}"
                                    class="btn btn-lg btn-secondary text-heading align-items-center rounded gsap-fade-in"
                                    data-delay="1.5" data-y="50">
                                    <iconify-icon icon="mingcute:binance-coin-bnb-fill"></iconify-icon>
                                    <span class="d-inline-block ff-1">Register Now</span>
                                </a>
                                <a href="{{ route('login') }}"
                                    class="btn btn-lg btn-light text-heading align-items-center rounded gsap-fade-in"
                                    data-delay="1.75" data-y="50">
                                    <iconify-icon icon="mingcute:binance-coin-bnb-fill"></iconify-icon>
                                    <span class="d-inline-block ff-1">Login</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="token-card-2 bg-secondary rounded-5 p-4 px-sm-6 px-xl-8 px-xxl-12 pt-sm-12 pb-sm-30 gsap-fade-in"
                                data-delay="2">
                                <h5 class="text-light text-stroke text-center overflow-hidden">
                                    <span
                                        class="d-inline-block position-relative text-splash text-splash--2x text-splash--dark">
                                        PRESALE ENDING IN </span>
                                </h5>
                                <div class="bg-light border border-dark shadow-sharp rounded-4 p-4">
                                    <div class="countdown d-flex align-items-center justify-content-center gap-3 gap-sm-6 gap-lg-4 gap-xl-6 flex-wrap"
                                        data-date="{{ $presaleEnd }}">
                                        <div class="d-flex flex-column align-items-center">
                                            <span class="days counter-1__text text-heading lh-1/2"></span>
                                            <span class="d-block"> DAYS </span>
                                        </div>
                                        <span class="counter-1__text text-heading">:</span>
                                        <div class="d-flex flex-column align-items-center">
                                            <span class="hours counter-1__text text-heading lh-1/2"></span>
                                            <span class="d-block"> HOURS </span>
                                        </div>
                                        <span class="counter-1__text text-heading">:</span>
                                        <div class="d-flex flex-column align-items-center">
                                            <span class="minutes counter-1__text text-heading lh-1/2"></span>
                                            <span class="d-block"> MINUTES </span>
                                        </div>
                                        <span class="counter-1__text text-heading">:</span>
                                        <div class="d-flex flex-column align-items-center">
                                            <span class="seconds counter-1__text text-heading lh-1/2"></span>
                                            <span class="d-block"> SECONDS </span>
                                        </div>
                                    </div>
                                </div>
                                <span class="d-block text-center fs-18 text-heading my-6"> USDT RAISED : 111,909.84 /
                                    $1,307,601 </span>
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="d-block h6 m-0 text-light text-stroke text-shadow"> Token Sale </span>
                                    <span class="d-block h6 m-0 text-light text-stroke text-shadow"> 80% </span>
                                </div>
                                <div class="progress mt-3">
                                    <div class="progress-bar bg-danger" style="width: 80%"></div>
                                </div>
                                <h5 class="text-heading text-center overflow-hidden mt-8">
                                    <span
                                        class="d-inline-block position-relative text-splash text-splash--2x text-splash--dark">
                                        1 COIN = ${{ number_format($coinValue, 9) }}
                                    </span>
                                </h5>
                                <ul class="list list-row gap-3 flex-wrap justify-content-center">
                                    <li>
                                        <a href="#"
                                            class="btn btn-sm btn-light text-heading align-items-center rounded">
                                            <iconify-icon icon="token:binance" class="fs-24"></iconify-icon>
                                            <span class="d-inline-block ff-1"> BINANCE </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="btn btn-sm btn-light text-heading align-items-center rounded">
                                            <iconify-icon icon="token:kucoin" class="fs-24"></iconify-icon>
                                            <span class="d-inline-block ff-1"> KUCOIN </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="btn btn-sm btn-light text-heading align-items-center rounded">
                                            <iconify-icon icon="simple-icons:builtbybit"
                                                class="fs-24"></iconify-icon>
                                            <span class="d-inline-block ff-1"> BYBIT </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="btn btn-sm btn-light text-heading align-items-center rounded">
                                            <iconify-icon icon="token:bitcoin" class="fs-24"></iconify-icon>
                                            <span class="d-inline-block ff-1"> BINGX </span>
                                        </a>
                                    </li>
                                </ul>
                                <div class="my-6">
                                    <div class="row g-4 align-items-center">
                                        <div class="col-md-6">
                                            <span class="d-block text-heading fs-14 fw-bold ff-2 text-start"> PAY IN
                                            </span>
                                            <input type="text"
                                                class="form-control form-control-lg border border-dark rounded-3 shadow-sharp"
                                                value="0">
                                        </div>
                                        <div class="col-md-6">
                                            <span class="d-block text-heading fs-14 fw-bold ff-2 text-start"> RECEIVED
                                                IN </span>
                                            <input type="text"
                                                class="form-control form-control-lg border border-dark rounded-3 shadow-sharp"
                                                value="0">
                                        </div>
                                    </div>
                                </div>
                                <a href="#"
                                    class="btn btn-lg btn-danger align-items-center rounded w-100 justify-content-center text-light">
                                    <iconify-icon icon="mingcute:binance-coin-bnb-fill"></iconify-icon>
                                    <span class="d-inline-block ff-1"> Connect Wallet </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Hero End -->
            <!-- Ticker -->
            <div class="py-4 bg-secondary border-top border-bottom border-2x border-dark gsap-fade-in"
                data-scroll-trigger="true">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div class="col-12 d-flex align-items-center">
                            <!-- Fixed Breaking Label -->
                            <div class="me-3">
                                <h4 class="mb-0 text-primary text-stroke text-shadow">BREAKING</h4>
                            </div>

                            <!-- Scrolling Notification List -->
                            <div class="scroller-x" data-speed="slow" data-direction="left"
                                style="overflow: hidden; white-space: nowrap;">
                                <ul class="list list-row align-items-center gap-4 scroller-x__list"
                                    style="display: inline-flex;">
                                    @foreach ($notifications as $notification)
                                        <li>
                                            <img src="{{ asset('img/icon-coin-3.png') }}" alt="image"
                                                class="img-fluid">
                                        </li>
                                        <li>
                                            <h4 class="mb-0 text-dark">{{ $notification->name ?? 'N/A' }}</h4>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Ticker End -->
            <!-- About -->
            <div class="about-section-1 section-space-y">
                <div class="container">
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-4 d-none d-lg-block">
                            <img src={{ asset('img/a.png') }} alt="image" class="img-fluid gsap-fade-in"
                                data-scroll-trigger="true" data-y="15">
                        </div>
                        <div class="col-lg-8">
                            <div class="rounded-5 bg-success p-4 p-sm-8 p-md-18 py-xl-30 gsap-fade-in"
                                data-scroll-trigger="true" data-start="80%" data-y="25">
                                <h2 class="text-light text-stroke text-shadow">WHAT IS BREAKING</h2>
                                <p class="mb-8 fs-18"> Born from the depths of meme culture, MEMEWORLD emerged as the
                                    ultimate celebration of community and creativity in the crypto space! We're not just
                                    another meme coin - we're a movement powered by our amazing community. </p>
                                <div class="d-flex justify-content-between align-items-center flex-wrap gap-4">
                                    <a href="sign-in.html"
                                        class="btn btn-lg btn-secondary text-heading align-items-center rounded">
                                        <iconify-icon icon="ic:twotone-thumb-up-off-alt"></iconify-icon>
                                        <span class="d-inline-block ff-1">Buy Coin</span>
                                    </a>
                                    <ul class="list list-row align-items-center flex-wrap gap-4">
                                        <li>
                                            <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                <iconify-icon icon="prime:twitter"></iconify-icon>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                <iconify-icon icon="uil:instagram"></iconify-icon>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                <iconify-icon icon="ri:linkedin-fill"></iconify-icon>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->
            <!-- How To Buy Section -->
            <div class="how-to-buy-section-2 section-space-y">
                <div class="section-space-md-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="mb-0 text-center text-light text-stroke-md text-shadow-md fs-6vw gsap-text-animation"
                                    data-scroll-trigger="true" data-split-type="words"> HOW TO BUY </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-12">
                            <div class="row g-4">
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25">
                                    <div class="token-card-3">
                                        <h5>SWAP ETH BNB FOR MEMECOIN</h5>
                                        <p class="mb-0 fs-18 text-heading"> In the vibrant and ever-evolving world of
                                            cryptocurrency, where innovation and creativity reign </p>
                                    </div>
                                </div>
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                    data-delay="0.25">
                                    <div class="token-card-3">
                                        <h5>PURCHASE ETH OR BNB</h5>
                                        <p class="mb-0 fs-18 text-heading"> In the vibrant and ever-evolving world of
                                            cryptocurrency, where innovation and creativity reign </p>
                                    </div>
                                </div>
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25">
                                    <div class="token-card-3">
                                        <h5>SWAP ETH BNB FOR MEMECOIN</h5>
                                        <p class="mb-0 fs-18 text-heading"> In the vibrant and ever-evolving world of
                                            cryptocurrency, where innovation and creativity reign </p>
                                    </div>
                                </div>
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                    data-delay="0.25">
                                    <div class="token-card-3">
                                        <h5>HODL & ENJOY THE JOURNEY</h5>
                                        <p class="mb-0 fs-18 text-heading"> In the vibrant and ever-evolving world of
                                            cryptocurrency, where innovation and creativity reign </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {{-- <div class="col-lg-4 d-none d-lg-block">
                            <img src="assets/img/how-to-buy-img-3.png" alt="image" class="img-fluid gsap-fade-in"
                                data-scroll-trigger="true" data-y="25">
                        </div> --}}
                    </div>
                </div>
            </div>
            <!-- How To Buy Section End -->
            <!-- Road Map  -->
            <div class="road-map-section-3 section-space-top position-relative z-1">
                <div class="section-space-md-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="mb-0 text-center text-light text-stroke-md text-shadow-md fs-6vw gsap-text-animation"
                                    data-scroll-trigger="true" data-split-type="words"> ROAD MAP </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid container-fhd">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-4 col-xl-3 gsap-fade-in" data-scroll-trigger="true"
                            data-y="25">
                            <div class="token-card-3 h-100">
                                <span class="d-block mb-4 fs-18 text-danger text-stroke text-shadow"> PHASE #01 </span>
                                <h5>RWC'S CALL TO ACTION</h5>
                                <ul class="list gap-4">
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Audit and Public Disclosure of Smart Contract </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> AMA Sessions on Twitter </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Second and Third Exchange Listing </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Community Building Campaigns </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3 gsap-fade-in" data-scroll-trigger="true"
                            data-y="25" data-delay="0.25">
                            <div class="token-card-3 h-100">
                                <span class="d-block mb-4 fs-18 text-secondary text-stroke text-shadow"> PHASE #02
                                </span>
                                <h5>RWC'S EVOLUTION</h5>
                                <ul class="list gap-4">
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Bridge and Exchange Test Launch </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Fourth and Fifth Exchange Listing </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Extensive Marketing Campaigns </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> RWC Exchange Platform Launch </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3 gsap-fade-in" data-scroll-trigger="true"
                            data-y="25" data-delay="0.5">
                            <div class="token-card-3 h-100">
                                <span class="d-block mb-4 fs-18 text-info text-stroke text-shadow"> PHASE #03 </span>
                                <h5>RWC's ASCENT</h5>
                                <ul class="list gap-4">
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Final AMA Sessions </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Community Staking </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Platform Release </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Ongoing Marketing and Mass Adoption Initiatives </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3 gsap-fade-in" data-scroll-trigger="true"
                            data-y="25" data-delay="0.75">
                            <div class="token-card-3 h-100">
                                <span class="d-block mb-4 fs-18 text-danger text-stroke text-shadow"> PHASE #04 </span>
                                <h5>WEBSITE LAUNCH: THE OFFICIAL RWC</h5>
                                <ul class="list gap-4">
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Token Contract Creation </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Establishment of Social Media Channels </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> First Exchange Listing </span>
                                    </li>
                                    <li class="d-flex gap-3">
                                        <span
                                            class="w-6 h-6 d-flex justify-content-center align-items-center rounded-circle border border-dark shadow-sharp-xs bg-light text-dark flex-shrink-0">
                                            <iconify-icon icon="ri:check-fill"></iconify-icon>
                                        </span>
                                        <span class="d-block fs-18 text-dark"> Marketing campaigns </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-space-md-top overflow-hidden">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-center">
                                    <img src={{ asset('img/road-map-img-2.png') }} style="height: 10%; width: 80%;"
                                        alt="image" class="img-fluid gsap-fade-in" data-scroll-trigger="true"
                                        data-x="-15" data-start="75%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Road Map  End -->
            <!-- Cross Ticker  -->
            <div class="section-space-sm-y position-relative w-100 text-center overflow-hidden">
                <div class="ticker-2 py-4 bg-secondary border-top border-bottom border-2x border-dark">
                    <div class="container-fluid p-0">
                        <div class="row g-0">
                            <div class="col-12 d-flex align-items-center">
                                <!-- Fixed Breaking Label -->
                                <div class="me-3">
                                    <h4 class="mb-0 text-primary text-stroke text-shadow">BREAKING</h4>
                                </div>

                                <!-- Scrolling Notification List -->
                                <div class="scroller-x" data-speed="slow" data-direction="right"
                                    style="overflow: hidden; white-space: nowrap;">
                                    <ul class="list list-row align-items-center gap-4 scroller-x__list"
                                        style="display: inline-flex;">
                                        @foreach ($notifications as $notification)
                                            <li>
                                                <img src="{{ asset('img/icon-coin-3.png') }}" alt="image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <h4 class="mb-0 text-dark">{{ $notification->name ?? 'N/A' }}</h4>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ticker-3 py-4 bg-danger border-top border-bottom border-2x border-dark z-n2">
                    <div class="container-fluid p-0">
                        <div class="row g-0">
                            <div class="col-12 d-flex align-items-center">
                                <!-- Fixed Breaking Label -->
                                <div class="me-3">
                                    <h4 class="mb-0 text-primary text-stroke text-shadow">BREAKING</h4>
                                </div>

                                <!-- Scrolling Notification List -->
                                <div class="scroller-x" data-speed="slow" data-direction="left"
                                    style="overflow: hidden; white-space: nowrap;">
                                    <ul class="list list-row align-items-center gap-4 scroller-x__list"
                                        style="display: inline-flex;">
                                        @foreach ($notifications as $notification)
                                            <li>
                                                <img src="{{ asset('img/icon-coin-3.png') }}" alt="image"
                                                    class="img-fluid">
                                            </li>
                                            <li>
                                                <h4 class="mb-0 text-dark">{{ $notification->name ?? 'N/A' }}</h4>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Cross Ticker End -->
            <!-- Tokenomics -->
            <div class="tokenomics-section-1 section-space-y">
                <div class="section-space-md-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="mb-0 text-center text-light text-stroke-md text-shadow-md fs-6vw gsap-text-animation"
                                    data-scroll-trigger="true"> TOKENOMICS </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-8 col-xl-6 ms-lg-auto">
                            <div class="row g-4">
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25">
                                    <div class="token-card-3 h-100 text-center">
                                        <h2 class="text-secondary text-stroke">05%</h2>
                                        <span class="d-block h6 m-0 text-heading"> SUPPLY BURNT </span>
                                    </div>
                                </div>
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                    data-delay="0.25">
                                    <div class="token-card-3 h-100 text-center">
                                        <h2 class="text-danger text-stroke">10B</h2>
                                        <span class="d-block h6 m-0 text-heading"> TOKEN SUPPLY </span>
                                    </div>
                                </div>
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25">
                                    <div class="token-card-3 h-100 text-center">
                                        <h2 class="text-primary text-stroke">0%</h2>
                                        <span class="d-block h6 m-0 text-heading"> TAXES </span>
                                    </div>
                                </div>
                                <div class="col-md-6 gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                    data-delay="0.25">
                                    <div class="token-card-3 h-100 text-center">
                                        <h2 class="text-success text-stroke">10%</h2>
                                        <span class="d-block h6 m-0 text-heading"> DEX </span>
                                    </div>
                                </div>
                                {{-- <div class="col-12 gsap-fade-in" data-scroll-trigger="true" data-y="25">
                                    <div
                                        class="d-flex align-items-center p-3 rounded bg-light border border-1x border-dark shadow-sharp">
                                        <input type="text" class="form-control border-0 text-dark"
                                            value="B7xavrAozTa1msQxu8YAcvPftf76x1fJYyLrYdTnbrah">
                                        <button type="button" class="btn btn-icon btn-secondary">
                                            <iconify-icon icon="iconamoon:copy-light"></iconify-icon>
                                        </button>
                                    </div>
                                </div> --}}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={{ asset('img/tokenomics-img-4.png') }} style="height: 75%" alt="image"
                    class="img-fluid tokenomics-section-1__img tokenomics-section-1__img--1 gsap-fade-in"
                    data-scroll-trigger="true" data-delay="0.5">
                <img src={{ asset('img/shape/tokenomics-element-1.png') }} alt="image"
                    class="img-fluid tokenomics-section-1__img tokenomics-section-1__img--2 gsap-fade-in"
                    data-scroll-trigger="true" data-delay="0.5">
                <img src={{ asset('img/shape/about-element-3.png') }} alt="image"
                    class="img-fluid tokenomics-section-1__img tokenomics-section-1__img--3 gsap-fade-in"
                    data-scroll-trigger="true" data-delay="0.5">
                <img src={{ asset('img/shape/hero-element-6.png') }} alt="image"
                    class="img-fluid tokenomics-section-1__img tokenomics-section-1__img--4 gsap-fade-in"
                    data-scroll-trigger="true" data-delay="0.5">
            </div>
            <!-- Tokenomics End -->
            <!-- Ticker -->
            <div class="ticker-1 py-4 bg-danger border-top border-bottom border-2x border-dark">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        <div class="col-12 d-flex align-items-center">
                            <!-- Fixed Breaking Label -->
                            <div class="me-3">
                                <h4 class="mb-0 text-primary text-stroke text-shadow">BREAKING</h4>
                            </div>

                            <!-- Scrolling Notification List -->
                            <div class="scroller-x" data-speed="slow" data-direction="left"
                                style="overflow: hidden; white-space: nowrap;">
                                <ul class="list list-row align-items-center gap-4 scroller-x__list"
                                    style="display: inline-flex;">
                                    @foreach ($notifications as $notification)
                                        <li>
                                            <img src="{{ asset('img/icon-coin-3.png') }}" alt="image"
                                                class="img-fluid">
                                        </li>
                                        <li>
                                            <h4 class="mb-0 text-dark">{{ $notification->name ?? 'N/A' }}</h4>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Ticker End -->
            <!-- FAQ -->
            <div class="faq-section-2 section-space-y">
                <div class="section-space-md-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="mb-0 text-center text-light text-stroke-md text-shadow-md fs-6vw gsap-text-animation"
                                    data-scroll-trigger="true"> FAQ </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-space-bottom">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-6">
                                <div class="accordion accordion-connected accordion-separate" id="faqOne">
                                    <div class="accordion-item shadow-sharp-md">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#faqOneA"
                                                aria-expanded="true" aria-controls="faqOneA">
                                                <span class="accordion-button__title"> Who is the God of Bull? </span>
                                            </button>
                                        </h2>
                                        <div id="faqOneA" class="accordion-collapse collapse"
                                            data-bs-parent="#faqOne">
                                            <div class="accordion-body"> Real World Coin is the God of Bulls, embodying
                                                wisdom
                                                and power. His value comes from mastering "Technology" and
                                                "Optimization," the key components Pepe missed. While Pepe stole four
                                                documents, he overlooked these crucial pieces, making him incomplete.
                                                Real World Coin bridge technology connects blockchains, ensuring secure
                                                and
                                                transparent transfers. He symbolizes innovation, fairness, and the
                                                future of decentralized systems, bringing what Pepe couldn’t: the
                                                complete solution. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item shadow-sharp-md">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#faqOneB"
                                                aria-expanded="false" aria-controls="faqOneB">
                                                <span class="accordion-button__title"> When can I claim my Tokens?
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="faqOneB" class="accordion-collapse collapse"
                                            data-bs-parent="#faqOne">
                                            <div class="accordion-body"> The claiming process uses secure Web3Toolkit
                                                technology, allowing you to claim tokens after the presale ends. Simply
                                                reconnect your wallet, such as Best Wallet or MetaMask, and click
                                                "claim." Additionally, Web3Payments enables staking of your tokens once
                                                they’ve been claimed. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="accordion accordion-connected accordion-separate" id="faqTwo">
                                    <div class="accordion-item shadow-sharp-md">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#faqTwoA"
                                                aria-expanded="true" aria-controls="faqTwoA">
                                                <span class="accordion-button__title"> When will Real World Coin be released?
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="faqTwoA" class="accordion-collapse collapse"
                                            data-bs-parent="#faqTwo">
                                            <div class="accordion-body"> Real World Coin exchange and ecosystem will be released
                                                once the presale has ended! AKA the day of judgment. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item shadow-sharp-md">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#faqTwoB"
                                                aria-expanded="false" aria-controls="faqTwoB">
                                                <span class="accordion-button__title"> How do I earn rewards on the
                                                    platform? </span>
                                            </button>
                                        </h2>
                                        <div id="faqTwoB" class="accordion-collapse collapse"
                                            data-bs-parent="#faqTwo">
                                            <div class="accordion-body"> Create memes, engage with the community, and
                                                climb the leaderboard! You'll earn tokens and badges as you gain likes,
                                                shares, and laughs. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- FAQ End -->
            <!-- CTA Section  -->
            <div class="position-relative z-1">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="cta-2 section-space-y bg-success rounded-5 px-6 px-md-12 px-lg-18 position-relative z-1 overflow-hidden gsap-fade-in"
                                data-scroll-trigger="true">
                                <div class="row">
                                    <div class="col-md-7 col-lg-6">
                                        <h2 class="h1 mb-8 text-light text-stroke text-shadow gsap-text-animation"
                                            data-scroll-trigger="true" data-split-type="words"> JOIN OUR COMMUNITY
                                        </h2>
                                        <ul class="list list-row align-items-center flex-wrap gap-4">
                                            <li class="gsap-fade-in" data-scroll-trigger="true" data-y="25">
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                                                </a>
                                            </li>
                                            <li class="gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                                data-delay="0.25">
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="prime:twitter"></iconify-icon>
                                                </a>
                                            </li>
                                            <li class="gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                                data-delay="0.5">
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="uil:instagram"></iconify-icon>
                                                </a>
                                            </li>
                                            <li class="gsap-fade-in" data-scroll-trigger="true" data-y="25"
                                                data-delay="0.75">
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="ri:linkedin-fill"></iconify-icon>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <img src={{ asset('img/cta-img-1.png') }} style="height: 90%; width: 40%;"
                                    alt="image"
                                    class="img-fluid d-none d-md-block position-absolute end-0 bottom-0 z-n1 pointer-none gsap-fade-in"
                                    data-scroll-trigger="true" data-y="25">
                                <img src={{ asset('img/shape/hero-element-6.png') }} alt="image"
                                    class="img-fluid d-none d-lg-block position-absolute top-10 start-50 translate-middle-x z-n1 pointer-none gsap-fade-in"
                                    data-scroll-trigger="true" data-delay="0.5">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-space-md-top section-space-xsm-bottom">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-xl-12">
                                <div class="row g-4">
                                    <div class="col-md-4 gsap-fade-in" data-scroll-trigger="true">
                                        <a class="logo d-inline-block mb-4" href="index.html">
                                            <img src="{{ asset('img/logo-yellow.png') }}" alt="image"
                                                class="logo__img logo__img--light">
                                        </a>
                                        <p class="mb-6 text-light"> Trading cryptocurrencies is highly speculative,
                                            carries a high level of risk </p>
                                        <ul class="list list-row align-items-center flex-wrap gap-4">
                                            <li>
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="prime:twitter"></iconify-icon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="uil:instagram"></iconify-icon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="btn btn-icon btn-light rounded-circle">
                                                    <iconify-icon icon="ri:linkedin-fill"></iconify-icon>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 gsap-fade-in" data-scroll-trigger="true" data-delay="0.25">
                                        <h5 class="text-light">QUICK LINKS</h5>
                                        <ul class="list gap-2">
                                            <li>
                                                <a href="{{ route('homepage') }}"
                                                    class="link d-inline-block text-light hover:text-danger"> HOME </a>
                                            </li>
                                            <li>
                                                <a href="{{ route('about') }}"
                                                    class="link d-inline-block text-light hover:text-danger"> About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="{{ route('contact') }}"
                                                    class="link d-inline-block text-light hover:text-danger"> CONTACT
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 gsap-fade-in" data-scroll-trigger="true" data-delay="0.5">
                                        <h5 class="text-light">CONTACT</h5>
                                        <ul class="list gap-2">
                                            <li>
                                                <div class="d-flex align-items-center gap-2">
                                                    <iconify-icon icon="akar-icons:location"
                                                        class="text-light flex-shrink-0 fs-24"></iconify-icon>
                                                    <p class="mb-0 text-light"> 2972 Westheimer Rd. Santa Ana </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-items-center gap-2">
                                                    <iconify-icon icon="mynaui:telephone-call"
                                                        class="text-light flex-shrink-0 fs-24"></iconify-icon>
                                                    <p class="mb-0 text-light">+123 387945671</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="d-flex align-items-center gap-2">
                                                    <iconify-icon icon="basil:envelope-outline"
                                                        class="text-light flex-shrink-0 fs-24"></iconify-icon>
                                                    <p class="mb-0 text-light">info@example.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {{-- <div class="col-xl-4 gsap-fade-in" data-scroll-trigger="true" data-delay="0.75">
                                <div class="p-8 rounded-4 bg-secondary">
                                    <h5 class="text-heading">DON'T MISS MEMEWORLD NEWS</h5>
                                    <div
                                        class="d-flex align-items-center p-2 rounded bg-light border border-1x border-dark shadow-sharp max-text-14">
                                        <input type="text"
                                            class="form-control form-control-sm border-0 text-dark fs-18"
                                            placeholder="ENTER YOUR EMAIL">
                                        <button type="button" class="btn btn-sm btn-danger text-stroke ff-1">
                                            SUBSCRIBE </button>
                                    </div>
                                </div>
                            </div> --}}
                        </div>
                        <hr class="my-6 border-top border-2x border-light" />
                        <div class="row g-4 justify-content-center align-items-center">
                            <div class="col-lg-5">
                                <p class="mb-0 fs-18 text-light text-center text-lg-start gsap-fade-in"
                                    data-scroll-trigger="true"> &copy; Real World Coin 2025. All rights reserved </p>
                            </div>
                            <div class="col-lg-7">
                                <ul
                                    class="list list-row gap-4 flex-wrap justify-content-center justify-content-lg-end">
                                    <li class="gsap-fade-in" data-scroll-trigger="true">
                                        <a href="privacy-policy.html"
                                            class="link fs-18 text-light hover:text-primary"> Privacy Policy </a>
                                    </li>
                                    <li class="gsap-fade-in" data-scroll-trigger="true" data-delay="0.25">
                                        <a href="terms.html" class="link fs-18 text-light hover:text-primary"> Terms
                                            of Use </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CTA Section End -->
        </div>
    </div>
    <!-- Scripts -->
    <script src={{ asset('js/bootstrap.bundle.js') }}></script>
    <script src={{ asset('js/iconify.js') }}></script>
    <script src={{ asset('js/simplebar.js') }}></script>
    <script src={{ asset('js/gsap.min.js') }}></script>
    <script src={{ asset('js/ScrollSmoother.min.js') }}></script>
    <script src={{ asset('js/ScrollTrigger.min.js') }}></script>
    <script src={{ asset('js/SplitText.min.js') }}></script>
    <script src={{ asset('js/Flip.min.js') }}></script>
    <script src={{ asset('js/app.js') }}></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const countdown = document.querySelector('.countdown');
            const targetDate = countdown.getAttribute('data-date');

            function updateCountdown() {
                const now = new Date();
                const end = new Date(targetDate);
                const diff = end - now;

                if (diff <= 0) {
                    countdown.querySelector('.days').textContent = '0';
                    countdown.querySelector('.hours').textContent = '0';
                    countdown.querySelector('.minutes').textContent = '0';
                    countdown.querySelector('.seconds').textContent = '0';
                    return;
                }

                const seconds = Math.floor((diff / 1000) % 60);
                const minutes = Math.floor((diff / 1000 / 60) % 60);
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));

                countdown.querySelector('.days').textContent = days;
                countdown.querySelector('.hours').textContent = hours;
                countdown.querySelector('.minutes').textContent = minutes;
                countdown.querySelector('.seconds').textContent = seconds;
            }

            updateCountdown(); // initial call
            setInterval(updateCountdown, 1000); // update every second
        });
    </script>
</body>


<!-- Mirrored from pixellyo.com/memeworld/html/home-3.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 04 Aug 2025 04:03:52 GMT -->

</html>
