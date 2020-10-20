<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $with = ['discount'];

    protected $fillable = [
        'title',
        'description',
        'price',
        'point_price',
        'category_id',
    ];

    public function productCategory()
    {
        return $this->belongsTo('App\Models\ProductCategory', 'category_id');
    }

    public function discount()
    {
        return $this->hasOne('App\Models\ProductDiscount');
    }

    public function productImages()
    {
        return $this->hasMany('App\Models\ProductImage');
    }

    public function mainImage()
    {
        return $this->hasOne('App\Models\ProductImage')->where('is_main_image', true);
    }
}
