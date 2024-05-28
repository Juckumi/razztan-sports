<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    use HasFactory;


    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
