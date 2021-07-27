import * as HelperModule from "./../helper-module";

//show feedback popup
$('.table-manage-feedback').on('click', 'button[data-target="#modal-feedback"]', function (event) {
    const message = $(this).data('message')
    const email = $(this).data('email')
    $('#modal-feedback .modal-title').text('Feedback from ' + email)
    $('#modal-feedback .modal-body').html(message)
})

//input resi popup
$('.table-manage-new-order').on('click', 'button[data-target="#inputResiModal"]', function (event) {
    const modal = $("#inputResiModal")
    const btnTriggered = $(this)
    let orderId = btnTriggered.data('order-id')

    modal.find('#order-id').text(orderId)
    modal.find('input[name="order_id"]').val(orderId)
})

//delete admin confirmation
$(".table-manage-admin").on('click', 'button[data-target="#modalConfirmDeleteAdmin"]', function (event) {
    console.log('ok');
    const btnTriggered = $(this)
    const deleteUrl = btnTriggered.data('delete-url')

    $("#modalConfirmDeleteAdmin form").attr('action', deleteUrl)
})

//add admin modal
$("#addNewAdmin").on('show.bs.modal', function (event) {
    const btnTriggered = $(event.relatedTarget)
    const formUrl = btnTriggered.data('form-url')

    $(this).find('form').attr('action', formUrl)
})

//edit admin modal
$(".table-manage-admin").on('click', 'button[data-target="#editAdmin"]', function (event) {
    const btnTriggered = $(this)
    const formUrl = btnTriggered.data('form-url')
    const adminName = btnTriggered.data('admin-name')
    const adminEmail = btnTriggered.data('admin-email')
    const adminPhone = btnTriggered.data('admin-phone')

    $('#editAdmin').find("#admin-name-edit").val(adminName)
    $('#editAdmin').find("#admin-email-edit").val(adminEmail)
    $('#editAdmin').find("#admin-phone-edit").val(adminPhone)
    $('#editAdmin').find('form').attr('action', formUrl)
})

if (HelperModule.pageUrl === '/admin/all-category' || HelperModule.pageUrl === '/admin/all-category/') {
    const modalManipulatePrimaryCategory = document.querySelector('#modal-manipulate-primary-category')
    const editPrimaryBtn = document.querySelectorAll('.edit-primary-category')
    const addPrimaryCategory = document.querySelector('.add-primary-category')
    const btnManipulateCategory = [addPrimaryCategory, ...editPrimaryBtn]
    let titleModal, primaryTitle, primaryDesc, primaryIsDigitalProduct, urlForm

    btnManipulateCategory.forEach(btn => {
        btn.addEventListener('click', () => {
            urlForm = btn.dataset.routing
            if (btn.classList.contains('edit-primary-category')) {
                titleModal = 'edit'
                primaryTitle = btn.parentNode.querySelector('.primary-category__title').textContent.trim()
                primaryDesc = btn.dataset.desc
                primaryIsDigitalProduct = Boolean(Number(btn.dataset.isDigital))

                console.log(primaryIsDigitalProduct)
                
                modalManipulatePrimaryCategory.querySelector('input[name="title"]').value = primaryTitle
                modalManipulatePrimaryCategory
                .querySelector('input[name="is_digital_product"]')
                .checked = primaryIsDigitalProduct == false ? false : true

                modalManipulatePrimaryCategory.querySelector('input[name="_method"]').disabled = false
            }
            else {
                titleModal = 'add new'
                modalManipulatePrimaryCategory.querySelector('input[name="_method"]').disabled = true
            }
            titleModal = `${titleModal} category`

            $("#modal-manipulate-primary-category").modal('show')
            modalManipulatePrimaryCategory.querySelector('.modal-title').textContent = titleModal
            modalManipulatePrimaryCategory.querySelector('form').action = urlForm
            
            $('#modal-manipulate-primary-category').on('hidden.bs.modal', function (e) {
                $(this).find("input:not([name='_method']), textarea").val("").prop('checked', false)
            })

        })
    })
}

if (HelperModule.pageUrl.includes('/sub')) {
    // edit sub category
    const modalEditSub = document.querySelectorAll('.edit-sub-category-btn')
    const modalManipulateCategory = document.querySelector('.modal-manipulate-category')
    let modalTitle = modalManipulateCategory.querySelector('.modal-title')
    let modalTitleText, subCategoryVal, parentCategoryVal
    const modalForm = modalManipulateCategory.querySelector('#form-edit-sub-category')

    const parentCategoryOptionEl = modalManipulateCategory
                                .querySelectorAll('#parent-category option:enabled')
    
    modalEditSub.forEach(btnEditSub => {
        const modalEditId = btnEditSub.dataset.target
        const subCategoryEl = btnEditSub.parentNode.querySelector('.subcategory__title')

        btnEditSub.addEventListener('click', function() {
            modalForm.action = this.dataset.editLink
            modalTitleText = 'edit sub category'
            modalManipulateCategory.setAttribute(
                'aria-labelledby', modalEditId.replace('#', '') + 'Label'
            );
            $(".modal-manipulate-category").modal('show')
            modalTitle.setAttribute('id', 'modalEditCategoryLabel')
            modalTitle.textContent = modalTitleText

            subCategoryVal = subCategoryEl.textContent.trim()
            parentCategoryVal = subCategoryEl.dataset.categoryParent.trim()
            modalManipulateCategory.querySelector('#sub-category').value = subCategoryVal
            
            parentCategoryOptionEl.forEach(parentCategory => {
                if (parentCategory.textContent.trim() === parentCategoryVal) {
                    parentCategory.selected = true
                }
            })
        })
    })

    $('.modal-manipulate-category').on('hidden.bs.modal', function (e) {
        parentCategoryOptionEl[0].selected = true
        modalManipulateCategory.querySelector('#sub-category').value = null
    })

    $("#btn-add-sub-category").click(function () {
        $('.modal-manipulate-category #sub-category').val(null)
    });
    // end of edit sub category

    // add new sub category
    const addSubCategory = document.querySelector('#btn-add-sub-category')
    addSubCategory.addEventListener('click', function(){
        modalForm.action = modalForm.dataset.addLink
        $(".modal-manipulate-category").modal('show')
        modalTitleText = 'add new sub category for ' + this.dataset.category
        modalManipulateCategory.setAttribute('aria-labelledby', 'addNewCategoryLabel')
        modalTitle.textContent = modalTitleText
    })
    // end of add new sub category
}

if (HelperModule.pageUrl === '/admin/rules') {
    const btnOpenEditModal = document.querySelectorAll('.btn[data-target="#modal-edit-rule"]')

    btnOpenEditModal.forEach((btn) => {
        const rule = btn.parentNode.parentNode

        btn.addEventListener('click', () => {

            document.querySelector('#modal-edit-rule .modal-title').innerHTML =
            `edit rule <b>${rule.querySelector('.rule-item__number').dataset.original}</b>`
            
            document.querySelector('#modal-edit-rule form').action = btn.dataset.updateUrl

            document.querySelector('textarea[name="content"]').value = btn.dataset.ruleContent

        })
    })
}

if (HelperModule.pageUrl === '/admin/manage-customer') {
    const modalEditUser = document.querySelector('#modalEditUser');
    const formEditUser = modalEditUser.querySelector('form');
    const modalEditUserlabel = document.querySelector('#modalEditUserLabel');

    const inputPhone = modalEditUser.querySelector('#inputPhone');
    const inputPemilikRekening = modalEditUser.querySelector('#inputPemilikRekening');
    const inputBank = modalEditUser.querySelector('#inputBank');
    const inputRekening = modalEditUser.querySelector('#inputRekening');

    const editUserButtons = document.querySelectorAll('.btn-edit-user');
    editUserButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            modalEditUserlabel.textContent = 'Edit Data User ' + this.dataset.userEmail;
            inputPhone.value = this.dataset.userPhone;
            inputPemilikRekening.value = this.dataset.userPemilikRekening;
            inputBank.value = this.dataset.userBank;
            inputRekening.value = this.dataset.userRekening;
            formEditUser.action = this.dataset.updateUrl;
        });
    });



}