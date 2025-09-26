<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WalletBalance extends Model
{
    use HasFactory;
    protected $fillable = [
        'hash',
        'from_address',
        'amount',
        'amount_debited'
    ];
}
