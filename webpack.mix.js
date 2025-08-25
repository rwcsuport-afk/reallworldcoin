const mix = require('laravel-mix');
const webpack = require('webpack');

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
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                MIX_WALLETCONNECT_PROJECT_ID: JSON.stringify(process.env.MIX_WALLETCONNECT_PROJECT_ID)
            }
        })
    ]
});

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/wallet.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css')
    .version();