<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'invoice_id','external_invoice_id','coin','amount','currency',
        'status','paid_amount','txid','invoice_url', 'user_id'
    ];

    protected $casts = [
        'paid_amount' => 'float',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
