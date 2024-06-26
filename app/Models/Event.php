<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Event extends Model
{
    use Sluggable;

    use HasFactory;
    protected $fillable = ['eventPhotosUrls'];

    protected $casts = [
        'eventPhotosUrls' => 'array',
    ];

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
public function creator()
{
    return $this->belongsTo(User::class);
}
public function sports()
{
    return $this->belongsToMany(Sport::class);
}

public function occurrences()
{
    return $this->hasMany(Occurrence::class)->orderBy('start', 'ASC');;
}

public function invitations()
{
    return $this->hasMany(Invitation::class)->orderBy('start', 'ASC');;
}
public function bookings()
{
    return $this->hasMany(Booking::class)->orderBy('start', 'ASC');;
}


public function chats()
{
    return $this->hasMany(Chat::class)->orderBy('start', 'ASC');;
}
}
