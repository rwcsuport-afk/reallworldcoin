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
                        <div class="col-lg-3 col-5 d-flex align-items-center">
                            <div class="site_logo">
                                <a class="site_link" href="index.html">
                                    <img loading="lazy" src="{{ asset('bb.png') }}" alt="ICO Site Logo">
                                </a>
                            </div>
                        </div>
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
                                <h1 class="heading_text text-center">Register Account</h1>
                                {{-- <p class="text-center">Enter your details to login.</p> --}}
                                <form method="POST" action="{{ route('register') }}">
                                    @csrf
                                    <div class="form-group">
                                        <label class="input_name" for="input_name">Name<sup>*</sup></label>
                                        <input id="input_email" class="form-control" type="name" name="name"
                                            placeholder="Full Name" value="{{ old('name') }}" required="">
                                    </div>
                                    <div class="form-group">
                                        <label class="input_email" for="input_email">Email<sup>*</sup></label>
                                        <input id="input_email" value="{{ old('email') }}" class="form-control"
                                            type="email" name="email" placeholder="Enter Your Email"
                                            required="">
                                    </div>
                                    <div class="form-group">
                                        <label class="input_pass" for="input_pass">Password<sup>*</sup></label>
                                        <input id="input_pass" value="{{ old('password') }}" class="form-control"
                                            type="password" name="password" placeholder="Password" required="">
                                    </div>
                                    <div class="form-group">
                                        <label class="input_comfirm" for="input_confirm">Confirm
                                            Password<sup>*</sup></label>
                                        <input id="input_comfirm" class="form-control" type="password_confirmation"
                                            name="password_confirmation" placeholder="Confirm Password"
                                            required="">
                                    </div>
                                    <div class="form-group">
                                        <label class="input_title" for="input_email">Referral Code
                                            <sup>*</sup></label>
                                        <input type="text" name="referral_code" id="referral_code"
                                            class="form-control @error('referral_code') is-invalid @enderror"
                                            placeholder="Referral Code (Optional)"
                                            value="{{ old('referral_code', $referralCode ?? '') }}" />
                                        <div id="referral-status" class="mt-1"></div>
                                        @error('referral_code')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <button class="btn" type="submit">
                                        <span class="btn_label">Sign Up</span>
                                        <span class="btn_icon"><i class="fa-regular fa-arrow-up-right"></i></span>
                                    </button>
                                    <div class="text-center">
                                        <small>
                                            Already have an account?
                                            <a href="{{ route('login') }}" class="fw-bold text-decoration-none">Log
                                                in</a>
                                        </small>
                                    </div>
                                </form>
                            </div>
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

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const referralInput = document.getElementById('referral_code');
            const statusEl = document.getElementById('referral-status');

            const checkReferral = (code) => {
                if (!code) {
                    statusEl.textContent = '';
                    statusEl.className = '';
                    return;
                }

                fetch(`/check-referral?code=${encodeURIComponent(code)}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.valid) {
                            statusEl.textContent = 'Referral matched ✅';
                            statusEl.className = 'valid';
                        } else {
                            statusEl.textContent = 'Referral not found ❌';
                            statusEl.className = 'invalid';
                        }
                    })
                    .catch(() => {
                        statusEl.textContent = 'Error checking referral';
                        statusEl.className = 'invalid';
                    });
            };

            // Listen for manual input
            referralInput.addEventListener('input', function() {
                checkReferral(this.value.trim());
            });

            // Auto-check if field is pre-filled
            if (referralInput.value.trim()) {
                checkReferral(referralInput.value.trim());
            }
        });
    </script>

</body>

<!-- Mirrored from html.xpressbuddy.com/coinpay/sign_in.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 11 Aug 2025 04:52:22 GMT -->

</html>
