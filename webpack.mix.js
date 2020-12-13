const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('resources/assets/js/native.js', 'public/js/all-client.js')
    .js('resources/assets/js/page/dashboard-admin.js', 'public/js')
    .sass('resources/assets/sass/native.scss', 'public/css')
    .sass('resources/assets/sass/admin-dashboard.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js')
        ],
    })
    .copyDirectory('resources/img', 'public/img/static')
    .styles([
        'resources/assets/template/assets/extra-libs/c3/c3.min.css',
        'resources/assets/template/assets/libs/chartist/chartist.min.css',
        'resources/assets/template/assets/extra-libs/jvector/jquery-jvectormap-2.0.2.css',
        'resources/assets/plugin/datatables.net/css/dataTables.bootstrap4.min.css',
        'resources/assets/template/dist/css/style.css',
    ], 'public/css/dashboard.css')
    .scripts([
        'resources/assets/js/addons/jquery.min.js',
        'resources/assets/js/addons/popper.min.js',
        'resources/assets/js/addons/bootstrap.min.js',
        'resources/assets/template/dist/js/app-style-switcher.min.js',
        'resources/assets/template/dist/js/feather.min.js',
        'resources/assets/js/addons/perfect-scrollbar.jquery.min.js',
        'resources/assets/template/assets/extra-libs/sparkline/sparkline.js',
        'resources/assets/template/dist/js/sidebarmenu.min.js',
        'resources/assets/template/dist/js/custom.min.js',
        'resources/assets/template/assets/extra-libs/prism/prism.js',
        'resources/assets/template/assets/extra-libs/c3/d3.min.js',
        'resources/assets/template/assets/extra-libs/c3/c3.min.js',
        'resources/assets/template/assets/extra-libs/jvector/jquery-jvectormap-2.0.2.min.js',
        'resources/assets/template/assets/extra-libs/jvector/jquery-jvectormap-world-mill-en.js',
        'resources/assets/plugin/datatables.net/js/jquery.dataTables.min.js',
        'resources/assets/plugin/datatables.net/js/datatable-basic.init.min.js',
        'public/js/dashboard-admin.js'
    ], 'public/js/all-admin.js')
    .copyDirectory('resources/assets/plugin/datatables.net', 'public/library')
    .setPublicPath('public');

mix.disableSuccessNotifications();
mix.browserSync({
    proxy: 'http://localhost:8000'
});