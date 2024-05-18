<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Occurrence extends Model
{

    public function event()
{
    return $this->belongsTo(Event::class);
}
    use HasFactory;
}
