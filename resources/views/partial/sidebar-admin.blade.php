<aside class="left-sidebar" data-sidebarbg="skin6">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar" data-sidebarbg="skin6">
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul id="sidebarnav">
                <x-menu-admin icon="dashboard" type="solid" 
                text="dashboard" to="{{ route('admin.dashboard') }}" />
                <li class="list-divider"></li>
                <li class="nav-small-cap">
                    <span class="hide-menu">products</span>
                </li>
                <x-menu-admin icon="purchase-tag" type="solid"
                text="product category" to="{{ route('admin.all-category.index') }}">

                </x-menu-admin>
                <x-menu-admin icon="list-ul" text="All product" 
                to="{{ route('admin.products.index') }}"/>
                <li class="nav-small-cap">
                    <span class="hide-menu">others</span>
                </li>
                <x-menu-admin icon="shopping-bag" class="has-arrow"
                text="order management" to="javascript:void(0);">
                    <ul aria-expanded="false" class="collapse first-level base-level-line">
                        <x-menu-admin icon="shopping-bag" type="solid" text="history order" 
                        to="{{ route('admin.order.index') }}"/>
                        <x-menu-admin icon="shopping-bag" type="solid" text="new order" 
                        to="{{ route('admin.order.new') }}"/>
                        <x-menu-admin icon="shopping-bag" type="solid" text="order to refund" 
                        to="{{ route('refund.manage') }}"/>
                        <x-menu-admin icon="money" text="Payment Confirmation" 
                        to="{{ route('admin.payment.index') }}"/>
                    </ul>
                </x-menu-admin>
                <x-menu-admin icon="purchase-tag" 
                text="Discount Voucher" to="{{ route('admin.vouchers.index') }}" />
                @if (auth()->user()->role === 'superadmin')
                <x-menu-admin icon="shield-quarter" text="list admin" 
                to="{{ route('superadmin.admin.index') }}"/>                    
                @endif
                <x-menu-admin icon="help-circle" text="Feedback Customer" 
                to="{{ route('admin.contact-us.manage') }}"/>
                <x-menu-admin icon="user-detail" type="solid" 
                to="{{ route('admin.manage-customer.index') }}" text="List customer" />
                <x-menu-admin icon="news" 
                to="{{ route('admin.news.manage') }}" text="News" />
            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>
