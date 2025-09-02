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
        'amount',
        'coin',
        'start_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
