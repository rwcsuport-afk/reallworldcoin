<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SettingLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'key',
        'old_value',
        'new_value',
        'updated_by',
    ];
}
