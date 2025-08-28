<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginActivity extends Model
{
    use HasFactory;
    protected $table = 'login_activities';

    public function user()
    {
        return $this->belongsTo(User::class, 'login_id');
    }
}
