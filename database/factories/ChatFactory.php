<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chat>
 */
class ChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $eventIds = DB::table('events')->pluck('id');
        $eventId = $eventIds->random();


        return [
            'name' => $this->faker->name,
            'event_id' => $eventId,
        ];
    }
}
