<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Cart;
use App\Models\Order;
use App\Models\SiteSetting;
use App\Models\CartItem;
use App\Models\Product;
use App\Models\User;
use App\Models\UserAddress;

class CartController extends Controller
{
    private $siteSetting;

    public function __construct()
    {
        $this->middleware('auth');
        $this->siteSetting = SiteSetting::first();
    }

    public function index()
    {
        $pointTotal = 0;
        $priceTotal = 0;
        $cart = Auth::user()->cart;

        $addresses = UserAddress::where('id', Auth::id())->get();
        $userAddress = new UserAddress();

        //get all column on UserAddress except user_id, bcz user_id is not on backend
        $addressColumnExceptUserId = array_diff($userAddress->getFillable(), ['user_id']);

        if ($cart && $cart->cartItems->count() > 0) {
            foreach ($cart->cartItems as $item) {
                if ($item->is_toko_point) {
                    $pointTotal += $item->product->point_price * $item->quantity;
                } else {
                    $priceTotal += $item->product->price * $item->quantity;
                }
            }
        }

        return view('payment.cart', [
            'title' => 'cart',
            'cart' => $cart,
            'siteSetting' => $this->siteSetting,
            'pointTotal' => $pointTotal,
            'priceTotal' => $priceTotal,
            'addresses' => $addresses,
            'addressColumn' => $addressColumnExceptUserId
        ]);
    }

    public function store(Request $request)
    {
        if ($request->has('product_id')) {
            $product = Product::findOrFail($request->product_id);
            $cart = Cart::where('user_id', Auth::id())->firstOrCreate([
                'user_id' => Auth::id(),
            ]);
            $cartItem = CartItem::firstOrNew([
                'cart_id' => $cart->id,
                'product_id' => $product->id,
                'is_toko_point' => (bool) $request->is_toko_point,
            ]);
            $cartItem->quantity += $request->quantity;
            $cartItem->save();
        }
        return redirect()->back()->with(['success'=>'berhasil menambahkan produk kedalam keranjang']);
    }

    public function update(Cart $cart, Request $request)
    {
        foreach ($request->all() as $data) {
            CartItem::find($data['item_id'])->update(['quantity' => $data['quantity']]);
        }
        return $cart->cartItems;
    }
}
