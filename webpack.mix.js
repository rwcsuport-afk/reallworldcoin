const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css') // remove/comment if not needed
    .version();