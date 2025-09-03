<!DOCTYPE html>
<html lang="en" data-bs-theme="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Memeworld: A feature-rich HTML template for memecoin, crypto, and ICO projects. Modern design, responsive layout, and ready for Crypto Project">
    <meta name="keywords"
        content="memecoin, crypto, ico, html template, themeforest, meme coin, cryptocurrency, blockchain, token, landing page, web3, nft, decentralized, finance, investment">
    <meta name="author" content="bplugins">
    <title>Memeworld - Memecoin ICO &amp; Crypto HTML Template</title>
    <link rel="icon" href={{ asset('img/favicon.png') }} type="image/png">
    <link rel="stylesheet" href={{ asset('css/bootstrap.css') }}>
    <link rel="stylesheet" href={{ asset('css/bootstrap-icons.css') }}>
    <link rel="stylesheet" href={{ asset('css/simplebar.css') }}>
    <link rel="stylesheet" href={{ asset('css/swiper-bundle.css') }}>
    <link rel="stylesheet" href={{ asset('css/ff-1.css') }}>
    <link rel="stylesheet" href={{ asset('css/ff-2.css') }}>
    <link rel="stylesheet" href={{ asset('css/style.css') }}>
</head>

<body class="bg-secondary-subtle overflow-x-hidden">
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
            <a class="logo" href="index.html">
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
    <!-- Navbar End -->
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <!-- Banner -->
            <div class="banner bg-success-emphasis">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="h1 text-primary-subtle"> About Us </h2>
                            <nav>
                                <ol class="breadcrumb breadcrumb-modifier">
                                    <li class="breadcrumb-item">
                                        <a href="{{ route('homepage') }}" class="link fs-14 text-secondary"> Home </a>
                                    </li>
                                    <li class="breadcrumb-item active fs-14"> About </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {{-- <img src="assets/img/shape/hero-bg-2.png" alt="image"
                    class="img-fluid w-100 position-absolute start-0 bottom-0 z-n1 pointer-none opacity-50"> --}}
            </div>
            <!-- Banner End -->
            <!-- About Us -->
            <div class="section-space-y position-relative z-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <div class="about-card-1 section-space-y">
                                <h2 class="h1 text-light text-stroke text-shadow">ABOUT MEME</h2>
                                <p class="mb-8 fs-24 text-heading"> Born from the depths of meme culture, MEMEWORLD
                                    emerged as the ultimate celebration of community and creativity in the crypto space!
                                    We're not just another meme coin - we're a movement powered by our amazing
                                    community. </p>
                                <div class="d-flex align-items-center flex-wrap gap-6">
                                    {{-- <a href="sign-in.html"
                                        class="btn btn-secondary text-heading align-items-center rounded">
                                        <iconify-icon icon="ic:twotone-thumb-up-off-alt"></iconify-icon>
                                        <span class="d-inline-block ff-1">Buy Token</span>
                                    </a> --}}
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
            <!-- About Us End -->
            <!-- Ticker -->
            <div class="py-4 bg-secondary border-top border-bottom border-2x border-dark">
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
            <!-- FAQ Section -->
            <div class="section-space-y position-relative z-1">
                <div class="section-space-md-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="mb-0 text-center text-light text-stroke-md text-shadow-md fs-6vw"> FAQ </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-6">
                            <div class="accordion accordion-connected accordion-separate" id="faqOne">
                                <div class="accordion-item shadow-sharp-md">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#faqOneA" aria-expanded="true"
                                            aria-controls="faqOneA">
                                            <span class="accordion-button__title"> Who is the God of Bull? </span>
                                        </button>
                                    </h2>
                                    <div id="faqOneA" class="accordion-collapse collapse" data-bs-parent="#faqOne">
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
                                            data-bs-toggle="collapse" data-bs-target="#faqOneB" aria-expanded="false"
                                            aria-controls="faqOneB">
                                            <span class="accordion-button__title"> When can I claim my Tokens?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="faqOneB" class="accordion-collapse collapse" data-bs-parent="#faqOne">
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
                                            data-bs-toggle="collapse" data-bs-target="#faqTwoA" aria-expanded="true"
                                            aria-controls="faqTwoA">
                                            <span class="accordion-button__title"> When will Real World Coin be
                                                released?
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="faqTwoA" class="accordion-collapse collapse" data-bs-parent="#faqTwo">
                                        <div class="accordion-body"> Real World Coin exchange and ecosystem will be
                                            released
                                            once the presale has ended! AKA the day of judgment. </div>
                                    </div>
                                </div>
                                <div class="accordion-item shadow-sharp-md">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#faqTwoB" aria-expanded="false"
                                            aria-controls="faqTwoB">
                                            <span class="accordion-button__title"> How do I earn rewards on the
                                                platform? </span>
                                        </button>
                                    </h2>
                                    <div id="faqTwoB" class="accordion-collapse collapse" data-bs-parent="#faqTwo">
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
            <!-- FAQ Section End -->
            <!-- Footer -->
            <div class="footer-1 section-space-top">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div
                                class="section-space-xsm-bottom bg-light rounded-top-5 px-4 px-sm-6 px-lg-12 px-xl-10 px-xxl-12">
                                <div class="section-space-md-y">
                                    <h2 class="mb-0 text-center text-danger text-stroke text-shadow fs-6vw"> REAL WORLD
                                        COIN
                                    </h2>
                                </div>
                                <div class="row g-4">
                                    <div class="col-xl-12">
                                        <div class="row g-4">
                                            <div class="col-md-4">
                                                <a class="logo d-inline-block mb-4" href="index.html">
                                                    <img src="{{ asset('img/logo-yellow.png') }}" alt="image"
                                                        class="logo__img logo__img--light">
                                                </a>
                                                <p class="mb-6 text-heading"> Trading cryptocurrencies is highly
                                                    speculative, carries a high level of risk </p>
                                                <ul class="list list-row align-items-center flex-wrap gap-4">
                                                    <li>
                                                        <a href="#"
                                                            class="btn btn-icon btn-light rounded-circle">
                                                            <iconify-icon icon="ri:facebook-fill"></iconify-icon>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            class="btn btn-icon btn-light rounded-circle">
                                                            <iconify-icon icon="prime:twitter"></iconify-icon>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            class="btn btn-icon btn-light rounded-circle">
                                                            <iconify-icon icon="uil:instagram"></iconify-icon>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#"
                                                            class="btn btn-icon btn-light rounded-circle">
                                                            <iconify-icon icon="ri:linkedin-fill"></iconify-icon>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-4">
                                                <h5 class="text-heading">QUICK LINKS</h5>
                                                <ul class="list gap-2">
                                                    <li>
                                                        <a href="{{ route('homepage') }}"
                                                            class="link d-inline-block text-heading hover:text-danger">
                                                            HOME </a>
                                                    </li>
                                                    <li>
                                                        <a href="{{ route('about') }}"
                                                            class="link d-inline-block text-heading hover:text-danger">
                                                            ABOUT US </a>
                                                    </li>
                                                    <li>
                                                        <a href="{{ route('contact') }}"
                                                            class="link d-inline-block text-heading hover:text-danger">
                                                            CONTACT </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-4">
                                                <h5 class="text-heading">CONTACT</h5>
                                                <ul class="list gap-2">
                                                    <li>
                                                        <div class="d-flex align-items-center gap-2">
                                                            <iconify-icon icon="akar-icons:location"
                                                                class="flex-shrink-0 fs-24"></iconify-icon>
                                                            <p class="mb-0 text-heading"> 2972 Westheimer Rd. Santa Ana
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex align-items-center gap-2">
                                                            <iconify-icon icon="mynaui:telephone-call"
                                                                class="flex-shrink-0 fs-24"></iconify-icon>
                                                            <p class="mb-0 text-heading"> +123 387945671 </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex align-items-center gap-2">
                                                            <iconify-icon icon="basil:envelope-outline"
                                                                class="flex-shrink-0 fs-24"></iconify-icon>
                                                            <p class="mb-0 text-heading"> info@example.com </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {{-- <div class="col-xl-4">
                                        <div class="p-8 rounded-4 bg-danger-subtle">
                                            <h5 class="text-heading">DON'T MISS MEMEWORLD NEWS</h5>
                                            <div
                                                class="d-flex align-items-center p-2 rounded bg-light border border-1x border-dark shadow-sharp max-text-14">
                                                <input type="text"
                                                    class="form-control form-control-sm border-0 text-dark fs-18"
                                                    placeholder="ENTER YOUR EMAIL">
                                                <button type="button" class="btn btn-sm btn-secondary ff-1">
                                                    SUBSCRIBE </button>
                                            </div>
                                        </div>
                                    </div> --}}
                                </div>
                                <hr class="my-6" />
                                <div class="row g-4 justify-content-center align-items-center">
                                    <div class="col-lg-5">
                                        <p class="mb-0 fs-18 text-dark text-center text-lg-start"> &copy; Memeworld
                                            2025. All rights reserved </p>
                                    </div>
                                    <div class="col-lg-7">
                                        <ul
                                            class="list list-row gap-4 flex-wrap justify-content-center justify-content-lg-end">
                                            <li>
                                                <a href="privacy-policy.html"
                                                    class="link fs-18 text-dark hover:text-primary"> Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href="terms.html" class="link fs-18 text-dark hover:text-primary">
                                                    Terms of Use </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->
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
</body>

</html>
