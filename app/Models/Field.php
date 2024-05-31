<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    use HasFactory;

    public function sports()
{
    return $this->belongsToMany(Sport::class);
}

public function bookings()
{
    return $this->hasMany(Booking::class)->orderBy('start', 'ASC');;
}
}
