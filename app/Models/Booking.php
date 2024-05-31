<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{



    public function event()
{
    return $this->belongsTo(Event::class);
}


public function field()
{
    return $this->belongsTo(Field::class);
}
    use HasFactory;
}
