<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     * 
     *             $table->foreignId('event_id')->constrained('events')->onDelete('cascade');

     */
    public function definition(): array
    {

        $eventIds = DB::table('events')->pluck('id');
        $eventId = $eventIds->random();
        $fieldsIds = DB::table('fields')->pluck('id');
        $fieldId = $fieldsIds->random();
        return [
            'price' => fake()->randomFloat(2, 0, 1000),
            'start' => fake()->dateTimeBetween('-1 month', '+1 month'),
            'end' => fake()->dateTimeBetween('-1 month', '+1 month'),
            'event_id' => $eventId,
            'field_id' => $fieldId,

        ];
    }
}
