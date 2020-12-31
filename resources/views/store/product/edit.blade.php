<div class="modal fade" id="modal-edit-product" tabindex="-1" role="dialog" aria-labelledby="modal-edit-product-label"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title text-capitalize" id="modal-edit-product-label"></h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{-- route set on assets/js/page/admin/manage-product.js --}}" method="post">
                    @csrf @method('PUT')
                    <x-input-template id="product-title" label="product title"
                    placeholder="Input the title of the product" name="title" required />
                    <x-input-template id="product-price" type="number" label="product price"
                    placeholder="Input the price of the product" name="price" required />
                    <x-input-template id="product-point" type="number" min="1" label="product point"
                    placeholder="Input the point of the product" name="point_price" required />
                    
                    <x-select-template label="category" id="category-id" name="category_id">
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}">{{ $category->title }}</option>
                        @endforeach
                    </x-select-template>
                    <x-select-template label="sub category" id="sub-category-id" name="sub_category_id">
                        @foreach ($subCategories as $subCategory)
                        <option value="{{ $subCategory->id }}"
                            data-parent-category="{{ $subCategory->productCategory->id }}">
                            {{ $subCategory->title }}
                        </option>
                        @endforeach
                    </x-select-template>
                    <div class="form-group">
                        <label for="edit-desc">Description</label>
                        <textarea class="form-control" id="edit-desc" rows="5" name="description"
                        placeholder="Deskripsi produk usahakan tidak lebih dari 100 karakter" 
                        maxlength="100" required></textarea>
                    </div>
                    <button type="submit" class="btn waves-effect waves-light btn-primary">
                        Update product
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>