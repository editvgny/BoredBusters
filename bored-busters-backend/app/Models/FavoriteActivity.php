<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'activity',
        'type',
        'participants',
        'price',
        'link',
        'user_id',
        'completed'
    ];

}
