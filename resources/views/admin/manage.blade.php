@extends('layouts.template')

@section('title', ucwords($title))

@section('body-id', Str::camel($title))

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header mb-3 d-flex flex-column 
                flex-lg-row justify-content-between">
                    <span class="h3 mb-3 mb-lg-0 d-block d-lg-inline">{{ $title }}</span>
                    <button type="button" data-toggle="modal" 
                    data-target="#addNewAdmin" 
                    data-form-url="{{ route('superadmin.admin.store') }}"
                    class="btn btn-primary rounded-pill d-flex d-lg-inline-flex align-items-center justify-content-center col-12 col-md-auto">
                        Add new admin
                    </button>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered no-wrap table-manage-admin" id="zero_config">
                            @include('partial.thead', [
                                'thead' => [
                                    'No',
                                    'name',
                                    'email',
                                    'phone',
                                    'joined at',
                                    'action'
                                ]
                            ])
                            <tbody>
                                @foreach ($admins as $account)
                                    <tr class="admin">
                                        <td>
                                            {{ $loop->iteration }}
                                        </td>
                                        <td>
                                            {{ $account->name }}
                                        </td>
                                        <td>
                                            {{ $account->email }}
                                        </td>
                                        <td>
                                            {{ $account->phone }}
                                        </td>
                                        <td>
                                            {{ $account->created_at }}
                                        </td>
                                        <td>
                                            <button type="button" data-toggle="modal" data-target="#editAdmin"
                                                class="btn btn-sm btn-warning btn-rounded mr-2 btn-edit-admin"
                                                data-admin-id="{{ $account->id }}"
                                                data-admin-name="{{ $account->name }}"
                                                data-admin-email="{{ $account->email }}"
                                                data-admin-phone="{{ $account->phone }}"
                                                data-form-url="{{ route(
                                                    'superadmin.admin.update', $account->id
                                                ) }}">
                                                Edit
                                            </button>
                                            <button type="button" data-toggle="modal" data-target="#modalConfirmDeleteAdmin"
                                            class="btn btn-sm btn-danger btn-rounded mr-2"
                                            data-admin-id="{{ $account->id }}"
                                            data-delete-url="{{ route(
                                                'superadmin.admin.destroy', $account->id
                                            ) }}">
                                                Delete
                                            </button>
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

    <x-modal-template id="addNewAdmin" form-target="form-add-admin" title-modal="Add new admin">
        @include('admin.form', [
            'idForm' => 'form-add-admin',
            'action' => 'add'
        ])
    </x-modal-template>

    <x-modal-template id="editAdmin" form-target="form-edit-admin" 
    title-modal="Edit admin detail">
        @include('admin.form', [
            'idForm' => 'form-edit-admin', 
            'action' => 'edit'
        ])
    </x-modal-template>

    <x-modal-template id="modalConfirmDeleteAdmin" 
    title-modal="Konfirmasi hapus admin" action-text="Iya" form-target="form-delete-admin">
        <p>Apa Anda yakin ingin menghapus akun admin ini ?</p>
        <form action="" method="POST" id="form-delete-admin">
            @csrf @method('DELETE')
        </form>
    </x-modal-template>

@endsection

@push('scripts')
    <script>
        if ($("#addNewAdmin form").hasClass("having-error")) {
            $("#addNewAdmin").modal({show: true})
        }
    </script>
@endpush