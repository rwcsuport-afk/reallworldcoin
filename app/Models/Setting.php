<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Setting extends Model
{
    protected $fillable = ['key', 'value'];

    public static function getValue($key, $default = null)
    {
        return optional(static::where('key', $key)->first())->value ?? $default;
    }

    public static function setValue($key, $value)
    {
        $existing = static::where('key', $key)->first();
        $oldValue = $existing ? $existing->value : null;

        $updated = static::updateOrCreate(['key' => $key], ['value' => $value]);

        SettingLog::create([
            'key'        => $key,
            'old_value'  => $oldValue,
            'new_value'  => $value,
            'updated_by' => Auth::id(),
        ]);

        return $updated;
    }


    public static function getCoinValue($default = 0.25)
    {
        return (float) self::where('key', 'coin_value_usd')->value('value') ?? $default;
    }

    public static function setCoinValue($value)
    {
        $key = 'coin_value_usd';

        $existing = self::where('key', $key)->first();
        $oldValue = $existing ? $existing->value : null;

        $updated = self::updateOrCreate(['key' => $key], ['value' => $value]);

        \App\Models\SettingLog::create([
            'key'        => $key,
            'old_value'  => $oldValue,
            'new_value'  => $value,
            'updated_by' => auth()->id(),
        ]);

        return $updated;
    }

}

