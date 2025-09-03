<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'user_type',
        'unique_id',
        'referral_id',
        'active_status',
        'referral_bonus',
        'custom_growth_percent'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function stakes()
    {
        return $this->hasMany(Stake::class);
    }

    public function roiLogs()
    {
        return $this->hasMany(RoiLog::class);
    }

    public function referredUsers()
    {
        return $this->hasMany(User::class, 'referral_id', 'unique_id');
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
