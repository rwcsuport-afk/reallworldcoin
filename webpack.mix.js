const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [])
    .version()
    .webpackConfig({
        resolve: {
            fallback: {
                stream: require.resolve('stream-browserify'),
                os: require.resolve('os-browserify/browser'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                buffer: require.resolve('buffer/'),
                process: require.resolve('process/browser'),
            },
            extensions: ['.js', '.json', '.vue'],
        },
    });