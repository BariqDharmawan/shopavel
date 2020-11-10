@extends('customer.dashboard')

@section('body-id', Str::camel($title))

@section('title', ucwords($title))

@section('content')
    <div class="bg-white shadow-md px-5 pb-8 pt-2">
        <table class="w-full table-fixed">
            <thead>
                <tr>
                    <th class="py-4">What you doing</th>
                    <th class="p-4">Date</th>
                    <th class="p-4">Point value</th>
                </tr>
            </thead>
            <tbody>
                @for ($i = 0; $i < 3; $i++)
                <tr class="hover:bg-gray-100 point-item">
                    <td class="border border-gray-400 py-3 px-4">
                        Register
                    </td>
                    <td class="border border-gray-400 py-3 px-4">
                        <time datetime="{{ now() }}">{{ now()->format('d M Y h:i') }}</time>
                    </td>
                    <td class="border border-gray-400 py-3 px-4">
                        <var class="not-italic point-item__qty">600</var>
                        <span>Point</span>
                    </td>
                </tr>
                @endfor
                <tr class="bg-gray-200">
                    <td colspan="2" class="border border-gray-400 py-3 px-4">Total point</td>
                    <td class="border border-gray-400 py-3 px-4">
                        <var class="not-italic point-item__total"></var>
                        <span>Point</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection