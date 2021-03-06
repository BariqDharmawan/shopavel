@extends('layouts.master')
@section('title', 'Produk - ' . env('APP_NAME') . ' Shop')
@section('body-id', 'store')
@section('content')
<div class="container py-10 px-5 lg:px-0 mx-auto">
    <figure class="grid grid-cols-1 md:grid-cols-2 flex-col md:flex-row mb-8">
        <img src="{{ $product->mainImage->url }}" class="w-full mb-5 md:mb-0">
        <figcaption class="md:ml-10">
            @include('partial.breadcumb')
            <p class="text-2xl mb-5">{{ $product->title }}</p>
            <p class="text-lg font-bold mb-5">
                <var class="not-italic">{{ $product->point_price }} point</var>
            </p>
            <div class="flex my-5">
                <form action="{{ route('cart.store') }}" method="post">
                    @csrf
                    <input type="number" class="appearance-none bg-white border border-gray-400 p-1 text-center w-12"
                    min="1" max="999" value="1" required name="quantity">
                    <input type="hidden" name="product_id" value="{{ $product->id }}">
                    <input type="hidden" name="is_toko_point" value="true">
                    <x-btn type="primary" text="Tambah ke keranjang" add-class="ml-2" action="submit"/>
                </form>
            </div>
            <hr>
            <p class="mt-5 text-gray-700">Kategori: <span>{{ $product->productCategory->title }}</span></p>
            @isset($product->productSubCategory)
                <p class="mt-5 text-gray-700">Sub Kategori: <span>{{ $product->productSubCategory->title }}</span></p>
            @endisset
        </figcaption>
    </figure>
    <section id="deskripsi-ulasan">
        <ul data-tabs>
            <li>
                <a href="#deskripsi-detail" data-tabby-default>Deskripsi</a>
            </li>
        </ul>
        <div id="deskripsi-detail" class="py-3">
            {!! $product->description !!}
        </div>
    </section>
    <section id="related-product" class="mt-5">
        <h1 class="mb-3 text-3xl">Produk Terkait</h1>
        @include('store.toko-point.list', ['addClass' => "lg:grid-cols-4"])
    </section>
</div>
@endsection

