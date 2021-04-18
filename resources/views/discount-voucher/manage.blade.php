@extends('layouts.template')

@section('title', ucwords($title))

@section('body-id', Str::camel($title))

@section('content')
    <div class="row">
        <div class="col-12">
            @if ($errors->any())
            <div class="alert alert--danger" role="alert">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="mb-3">
                        <span class="h3">All Discount Coupon</span>
                        <button class="btn btn-primary rounded-pill float-right" data-toggle="modal"
                        data-target="#modal-add-voucher"><box-icon name='plus-square' type='solid' animation='tada' color='#ffffff' ></box-icon> Add voucher</button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered no-wrap" id="zero_config">
                            @include('partial.thead', [
                                'thead' => [
                                    'name',
                                    'code',
                                    'discount',
                                    'expired_at',
                                    'Action'
                                ]
                            ])
                            <tbody>
                                @foreach ($vouchers as $voucher)
                                    <tr class="voucher-item">
                                        <td class="voucher-item__name" 
                                        data-original="{{ $voucher->name }}">
                                            {{$voucher->name}}
                                        </td>
                                        <td class="voucher-item__code" 
                                        data-original="{{ $voucher->code }}">
                                            {{$voucher->code}}
                                        </td>
                                        <td class="voucher-item__discount" 
                                        data-original="{{ $voucher->discount_value }}">
                                            {{$voucher->discount_value}}
                                        </td>
                                        <td class="voucher-item__expired" 
                                        data-original="{{ $voucher->expired_at }}">
                                            {{$voucher->expired_at}}
                                        </td>
                                        <td>
                                            <a class="btn btn-sm btn-warning btn-rounded mr-2"
                                            data-toggle="modal"
                                            data-target="#modal-edit-voucher"
                                            data-voucher-name="{{ $voucher->name }}"
                                            data-voucher-code="{{ $voucher->code }}"
                                            data-voucher-discount-value="{{ $voucher->discount_value }}"
                                            data-voucher-expired-at="{{ $voucher->formatted_expired_time }}"
                                            data-update-url="{{ route('admin.vouchers.update', $voucher->id) }}">
                                                Edit
                                            </a>
                                            <form method="POST" class="d-inline-block"
                                            action="{{ route('admin.vouchers.destroy', $voucher->id) }}">
                                                @csrf @method('DELETE')
                                                <button type="submit" 
                                                class="btn btn-sm btn-danger btn-rounded">
                                                    Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('components')
    @include('discount-voucher.edit')
    @include('discount-voucher.create')
@endsection