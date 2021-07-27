<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PointHistory extends Model
{
    use HasFactory;

    const PLACE_ORDER_MESSAGE = "place an order";
    const ORDER_POINT_REFUND_MESSAGE = "refunded order";
    const ORDER_REWARD_MESSAGE = "finished order reward";

    protected $fillable = [
        'value',
        'description',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function order()
    {
        return $this->belongsTo('App\Models\Order');
    }
}
