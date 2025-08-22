const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify"),
            "buffer": require.resolve("buffer/")
        }
    }
});

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/wallet.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')
    .version();