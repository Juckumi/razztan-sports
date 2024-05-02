<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Field>
 */
class FieldFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'm2' => $this->faker->numberBetween(100, 1000),
            'place' => $this->faker->city,
            'fieldPhotosUrl' => $this->faker->imageUrl(),
        ];
    }
}
