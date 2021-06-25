const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-serve');

mix.js('resources/assets/js/native.js', 'public/asset/user')
    .js('resources/assets/js/page/dashboard-admin.js', 'public/asset/admin')
    .sass('resources/assets/sass/native.scss', 'public/asset/user')
    .sass('resources/assets/sass/admin-dashboard.scss', 'public/asset/admin')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .copyDirectory('resources/img/static', 'public/img/static')
    .copyDirectory('resources/assets/template/assets/images', 'public/img/template')

// mix.serve();

// mix.browserSync({
//     proxy: 'http://localhost:8000'
// });