const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [])
    .version()
    .webpackConfig({
        resolve: {
            extensions: ['.js', '.json', '.vue'], // ensures modules like ethers/AppKit are resolved
        },
        output: {
            chunkFilename: 'js/[name].js', // avoid hashed chunks for production
        },
    })
    .options({
        terser: { extractComments: false }, // keep production JS minified but avoid chunk issues
    });

// Optional: full source maps for debugging in production
if (!mix.inProduction()) {
    mix.sourceMaps();
}