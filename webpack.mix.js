const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js') // ✅ keep app.js
    .js('resources/js/wallet.js', 'public/js') // ✅ add wallet.js
    .postCss('resources/css/app.css', 'public/css', [])
    .version();