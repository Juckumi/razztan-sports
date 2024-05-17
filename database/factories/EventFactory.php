<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $colorNames = [
            '#042940', '#005C53', '#9FC131', '#DBF227', '#D6D58E', '#2A8C82', '#41BFB3', '#275950', '#260101', '#2E5902'
        ];

        $randomColor = $colorNames[array_rand($colorNames)];
        $maxEvents = 10; // Número máximo de eventos
$events = [];

$start = $this->faker->dateTimeBetween('now', '+1 month');
$end = $this->faker->dateTimeBetween($start, '+2 months');

$attempts = 0;
$maxAttempts = 100;

while (($end <= $start || $end->diff($start)->days > 4) && count($events) < $maxEvents) {
    $start = $this->faker->dateTimeBetween('now', '+1 month');
    $end = $this->faker->dateTimeBetween($start, '+2 months');

    $attempts++;

    if ($attempts >= $maxAttempts) {

        break ;
    }
}

if (count($events) >= $maxEvents) {
    $start = new DateTime('2024-06-01'); // Fecha determinada
    $end = new DateTime('2024-06-05'); // Fecha determinada
}

        return [
            'title' => $this->faker->word,
            'description' => $this->faker->paragraph(30),
            'backgroundColor' =>  $randomColor ,

            'price' => $this->faker->randomFloat(2, 0, 1000),
            'eventPhotoUrl' => $this->faker->imageUrl(),
            'start' => $start,
            'end' => $end,
            'catering' => $this->faker->boolean,
        ];
    }
}
