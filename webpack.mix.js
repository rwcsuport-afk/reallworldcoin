const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .version();

mix.webpackConfig({
    resolve: {
        fallback: {
            fs: false,
            path: false,
            crypto: false,
            stream: false,
        },
    },
    experiments: {
        topLevelAwait: true, // Enables modern ESM syntax like `await` at top-level
    },
});