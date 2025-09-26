<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stake extends Model
{
    use HasFactory;
    protected $table = 'stakes';
    protected $fillable = [
        'user_id',
        'hash',
        'from_address',
        'to_address',
        'token_symbol',
        'value',
        'value_formatted',
        'summary',
        'block_timestamp',
        'transaction_fee',
        'amount',
        'coin',
        'start_date',
        'wallet_update_status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'from_address', 'user_id');
    }
}
