<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $notifiableType = $this->faker->randomElement(['App\Models\Event', 'App\Models\Message', 'App\Models\Occurrence', 'App\Models\Invitation']);
        $notifiable = new $notifiableType();
        $notifiableId = $notifiable->factory()->create()->id;

        return [
            'notifiable_id' => $notifiableId,
            'notifiable_type' => $notifiableType,
        ];
    }
}
