const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/wallet.js', 'public/js') // 👈 add this line
    .postCss('resources/css/app.css', 'public/css', [])
    .version();