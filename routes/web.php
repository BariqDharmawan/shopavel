<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@landingPage')->name('landing-page');
Route::resource('contact-us', 'FeedbackController')->except('create', 'update', 'edit');
Route::get('news/archive', 'NewsController@index')->name('news.index');

Route::prefix('voucher')->name('voucher.')->group(function () {
    Route::post('validate', 'VoucherController@check')->name('validate');
});

Route::prefix('store')->name('store.')->group(function () {
    Route::prefix('product')->name('product.')->group(function () {
        Route::get('/', 'StoreController@product')->name('index');
        Route::get('/{slug}', 'StoreController@showProduct')->name('show');
    });
    Route::prefix('voucher')->name('voucher.')->group(function () {
        Route::get('/', 'StoreController@voucher')->name('index');
        Route::get('/{slug}', 'StoreController@showVoucher')->name('show');
    });
    Route::prefix('toko-point')->name('toko-point.')->group(function () {
        Route::get('/', 'StoreController@tokoPoint')->name('index');
        Route::get('/{slug}', 'StoreController@showTokoPoint')->name('show');
    });
    Route::post('checkout', 'CheckoutController@store')->name('checkout')->middleware([
        'auth', 'customer'
    ]);
});

Route::prefix('payment')->name('payment.')->group(function () {
    Route::get('confirmation', 'PaymentController@showConfirm')->name('show-confirm');
    Route::get('manage', 'PaymentController@manage')->name('manage-confirm');
    Route::post('confirmation/{id}', 'PaymentController@store')->name('store');
    Route::post('input-resi', 'PaymentController@inputResi')->name('input-resi');
});

Auth::routes();

Route::resource('cart', 'CartController');

Route::get('register', function () {
    return redirect('login');
});

Route::prefix('refund')->name('refund.')->group(function (){
    Route::post('request/{order}', 'RefundController@request')->name('request');
    Route::get('manage', 'RefundController@manage')->name('manage')->middleware('admin');
    Route::post('kirim', 'RefundController@kirimBukti')->name('kirim-bukti')->middleware('admin');
});

// customer only routes
Route::namespace('Customer')->middleware(['auth', 'customer'])->group(function () {
    // my account routes
    Route::prefix('my-account')->name('my-account.')->group(function () {
        Route::get('wishlist', 'DashboardController@wishlistProduct')->name('product.favorite');
        Route::post('wishlist', 'DashboardController@storeWishlist')->name('favorite.store');
        Route::delete('wishlist/{favoriteProduct}', 'DashboardController@removeWishlist')->name(
            'favorite.remove'
        );
        Route::post('update', 'DashboardController@updateAccount')->name('update');
        
        Route::prefix('order')->name('order.')->group(function (){
            Route::get('history', 'DashboardController@orderHistory')->name('history');
            Route::put('finish/{order}', 'DashboardController@finishOrder')->name('finish');
            Route::get('current', 'DashboardController@currentOrder')->name('current');
            Route::put('cancel/{order}', 'DashboardController@cancelBeforePaid')->name('cancel');
        });

        

        Route::get('detail', 'DashboardController@accountDetail')->name('account.detail');
        Route::get('point', 'DashboardController@pointHistory')->name('point.history');
        // address routes
        Route::prefix('address')->name('address.')->group(function () {
            Route::post('/', 'UserAddressController@store')->name('store');
            Route::post('/store-redirect', 'UserAddressController@storeRedirect')->name(
                'store-redirect'
            );
            Route::put('/update', 'UserAddressController@update')->name('update');
            Route::post('/delete', 'UserAddressController@destroy')->name('destroy');
        });
    });
});

// admin route
Route::prefix('admin')->middleware(['admin', 'auth'])->name('admin.')->group(function () {

    Route::prefix('news')->name('news.')->group(function (){
        Route::get('manage', 'NewsController@index')->name('manage');
        Route::post('store', 'NewsController@store')->name('store');
        Route::delete('delete/{news}', 'NewsController@destroy')->name('destroy');
        Route::put('update/{news}', 'NewsController@update')->name('update');
    });

    Route::get('feedback-customer', 'FeedbackController@manage')->name('contact-us.manage');

    Route::namespace('Admin')->group(function (){

        Route::prefix('manage-customer')->name('manage-customer.')->group(function(){
            Route::get('/', 'AdminController@manageCustomer')->name('index');
            Route::put('/{user}', 'AdminController@updateCustomer')->name('update');
        });

        Route::get('dashboard', 'AdminController@dashboard')->name('dashboard');

        Route::prefix('order')->name('order.')->group(function () {
            Route::get('/', 'OrderController@index')->name('index');
            Route::get('new', 'OrderController@newOrder')->name('new');
            Route::put('cancel/{order}', 'OrderController@cancel')->name('cancel');
            Route::put('submit-voucher-code/{order}', 'OrderController@submitVoucherCode')->name(
                'submit-voucher-code'
            );
            Route::put('change-status/{order}', 'OrderController@changeStatus')->name('change-status');
        });

        Route::prefix('all-category')->name('all-category.')->group(function(){

            Route::prefix('/{cat}/sub')->group(function (){
                Route::get('/', 'AllCategoryController@subCategoryIndex')->name('sub.index');
                Route::post('store', 'AllCategoryController@subCategoryStore')->name('sub.store');
                Route::post('update/{sub}', 'AllCategoryController@subCategoryUpdate')->name(
                    'sub.update'
                );
                Route::delete('destroy/{sub}', 'AllCategoryController@subCategoryDestroy')->name(
                    'sub.destroy'
                );
            });

            Route::get('/', 'AllCategoryController@parentCategoryIndex')->name('index');
            Route::post('/', 'AllCategoryController@parentCategoryStore')->name('store');
            Route::put('/{id}', 'AllCategoryController@parentCategoryUpdate')->name('update');
            Route::delete('/{id}', 'AllCategoryController@parentCategoryDestroy')->name('destroy'); 
    
        });
        
        Route::resource('products' , 'ProductController');
        Route::resource('payment' , 'PaymentController');
        Route::resource('product-discounts' , 'ProductDiscountController');
        Route::resource('rules' , 'RulesController')->only(['store', 'index', 'destroy']);
        Route::resource('vouchers' , 'VoucherController')->only([
            'store', 'index', 'destroy', 'update'
        ]);
        Route::resource('setting' , 'SettingController')->only(['index', 'update']);
    });
});

Route::prefix('superadmin')->middleware('superadmin')->name('superadmin.')->group(function () {
    Route::resource('admin', 'Admin\AdminController')->except(['edit', 'create']);
});
