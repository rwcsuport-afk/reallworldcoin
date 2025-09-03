<!doctype html>
<html lang="en">


<!-- Mirrored from html.xpressbuddy.com/coinpay/sign_in.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Aug 2025 04:52:19 GMT -->

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="thumbnail" content="assets/images/ico_template_thumbnail.webp">
    <meta name="description" content="Coinpay - Site Template">
    <meta name="keywords" content="Crypto Currency Bootstrap Site Template">
    <meta name="author" content="xpressbuddy">

    <title>Login - RWC - Site Template</title>
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

</head>


<body class="index_ico">

    <!-- Body Wrap - Start -->
    <div class="page_wrapper">

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
                        {{-- <div class="col-lg-3 col-5 d-flex align-items-center">
                            <div class="site_logo">
                                <a class="site_link" href="index.html">
                                    <img loading="lazy" src="{{ asset('bb.png') }}" alt="ICO Site Logo">
                                </a>
                            </div>
                        </div> --}}
                        {{-- <div class="col-lg-6 col-2">
                            <nav class="main_menu navbar navbar-expand-lg">
                                <div class="main_menu_inner collapse navbar-collapse justify-content-center"
                                    id="main_menu_dropdown">
                                    <ul class="main_menu_list unordered_list text-uppercase">
                                        <li class="dropdown active">
                                            <a class="nav-link" href="https://reallworldcoin.com/" id="homes_submenu" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="nav_link_label" data-text="Home">Home</span>
                                            </a>
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
                                         <li>
                                            <a class="nav-link" href="{{ route('register') }}">
                                                <span class="nav_link_label" data-text="Register">Register</span>
                                            </a>
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
                        </div> --}}
                    </div>
                </div>
            </div>
        </header>
        <!-- Site Header - End
      ================================================== -->

        <!-- Main Body - Start
      ================================================== -->
        <main class="page_content">

            <!-- Register Section - Start
        ================================================== -->
            <section class="register_section section_decoration">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 position-relative">
                            <div class="register_form">
                                <h1 class="heading_text text-center">Login to Your Account</h1>
                                <p class="text-center">Enter your details to login.</p>
                                <form method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <div class="form-group">
                                        <label class="input_title" for="input_email">Email<sup>*</sup></label>
                                        <input id="input_email" class="form-control" type="email" name="email"
                                            placeholder="Enter Your Email" value="{{ old('email') }}" required="">
                                    </div>
                                    <div class="form-group">
                                        <label class="input_title" for="input_pass">Password<sup>*</sup></label>
                                        <input id="input_pass" class="form-control" type="password" name="password"
                                            placeholder="Enter Your password" value="{{ old('password') }}" required="">
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox"
                                                    id="checkbox_remember_me">
                                                <label class="form-check-label" for="checkbox_remember_me">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        {{-- CAPTCHA --}}
                                        <div class="mb-3">
                                            <label for="captcha"
                                                class="form-label d-block text-white">Captcha</label>
                                            <div class="d-flex align-items-center mb-2">
                                                <span class="captcha-img"
                                                    id="captcha-img">{!! captcha_img() !!}</span>&nbsp;&nbsp;
                                                <button type="button" class="btn btn-sm btn-outline-light"
                                                    id="reload">↻</button>
                                            </div>
                                            <input type="text" name="captcha" class="form-control"
                                                placeholder="Enter captcha" required>
                                            @if ($errors->has('captcha'))
                                                <span class="text-danger small">{{ $errors->first('captcha') }}</span>
                                            @endif
                                        </div>
                                    </div>
                                    <button class="btn" type="submit">
                                        <span class="btn_label">Login</span>
                                        <span class="btn_icon"><i class="fa-regular fa-arrow-up-right"></i></span>
                                    </button>
                                </form>
                                <div class="text-center">
                                    <a href="{{ route('register') }}">Don't have an account? Sign up</a>
                                </div>
                            </div>
                            {{-- Registration Success Modal --}}
                            @if (session('registered_user'))
                                <div class="modal fade" id="registeredUserModal" tabindex="-1"
                                    aria-labelledby="registeredUserLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content bg-dark text-white border-0 rounded-4 shadow-lg">
                                            <div class="modal-header border-0">
                                                <h5 class="modal-title" id="registeredUserLabel">🎉 Registration
                                                    Successful!</h5>
                                                <button type="button" class="btn-close btn-close-white"
                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p><strong>Name:</strong> {{ session('registered_user.name') }}</p>
                                                <p><strong>Email:</strong> {{ session('registered_user.email') }}</p>
                                                <p><strong>Referral ID:</strong>
                                                    {{ session('registered_user.referral_id') ?? 'N/A' }}</p>
                                                <p><strong>Unique ID:</strong>
                                                    {{ session('registered_user.unique_id') }}</p>
                                                <hr>
                                                <p class="text-success">You can now log in to your Real World Coin
                                                    account.</p>
                                            </div>
                                            <div class="modal-footer border-0">
                                                <button type="button" class="btn btn-light"
                                                    data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif

                            {{-- <div class="decoration_item shape_flower">
                                <img src="{{ asset('assets/images/shapes/shape_flower_1.html') }}" alt="Flower">
                            </div> --}}
                        </div>
                    </div>
                </div>
            </section>
            <!-- Register Section - End
        ================================================== -->

        </main>
        <!-- Main Body - End
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
    <script>
        // Reload captcha
        document.getElementById('reload').onclick = function() {
            fetch('/reload-captcha')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('captcha-img').innerHTML = data.captcha;
                });
        };

        // Show success popup
        @if (session('registered_user'))
            const successPopup = new bootstrap.Modal(document.getElementById('registeredUserModal'));
            successPopup.show();

            // Optional: Auto-close after 5 seconds
            setTimeout(() => {
                successPopup.hide();
            }, 5000);
        @endif
    </script>

</body>

<!-- Mirrored from html.xpressbuddy.com/coinpay/sign_in.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Aug 2025 04:52:22 GMT -->

</html>
