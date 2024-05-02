<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
    use HasFactory;

    public function events()
{
    return $this->belongsToMany(Event::class);
}
public function fields()
{
    return $this->belongsToMany(Field::class);
}
}
