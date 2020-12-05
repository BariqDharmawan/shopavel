<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ ucfirst(Auth::user()->name) }} - @yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/admin-dashboard.css') }}">
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body id="@yield('body-id')Page">
    @include('partial.preloader')
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        @include('partial.header-admin')
        @include('partial.sidebar-admin')
        <div class="page-wrapper">
            <div class="container-fluid">
                @yield('content')
            </div>
            <footer class="footer text-center text-muted">
                All Rights Reserved by {{ env('APP_NAME') }}
            </footer>
        </div>
    </div>
    <script src="{{ asset('js/all-admin.js') }}"></script>
    @stack('scripts')
</body>

</html>
