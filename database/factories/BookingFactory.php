<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'price' => fake()->randomFloat(2, 0, 1000),
            'start' => fake()->dateTimeBetween('-1 month', '+1 month'),
            'end' => fake()->dateTimeBetween('-1 month', '+1 month'),
        ];
    }
}
