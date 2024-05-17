<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Event extends Model
{
    use Sluggable;

    use HasFactory;
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    public function users()
{
    return $this->belongsToMany(User::class);
}
public function sports()
{
    return $this->belongsToMany(Sport::class);
}

public function occurrences()
{
    return $this->hasMany(Occurrence::class);
}
}
