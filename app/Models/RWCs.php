<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RWCs extends Model
{
    use HasFactory;
    protected $table = 'rwc_coins';
    protected $fillable = [
        'from_address',
        'rwc_coin',
        'created_at',
        'updated_at'
    ];
}
