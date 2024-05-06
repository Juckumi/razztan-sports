<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;


use App\Models\User;
use App\Models\Event;
use App\Models\Occurrence;
use App\Models\Message;
use App\Models\Field;
use App\Models\Invitation;
use App\Models\Sport;
use App\Models\Notification;
use App\Models\Booking;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Crear 10 usuarios
        User::factory(10)->create();

        // Crear eventos
        Event::factory(5)->create();

        // Crear ocurrencias
        Occurrence::factory(10)->create();

        // Crear mensajes
        Message::factory(20)->create();

        // Crear campos
        Field::factory(8)->create();

        // Crear invitaciones
        Invitation::factory(15)->create();

        // Crear deportes
        Sport::factory(5)->create();

        // Crear notificaciones
        Notification::factory(10)->create();

        // Crear reservas
        Booking::factory(15)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);


        // Obtén los IDs de todos los eventos y usuarios existentes en la base de datos
        $eventIds = DB::table('events')->pluck('id');
        $userIds = DB::table('users')->pluck('id');
        $sportsIds = DB::table('sports')->pluck('id');
        $fieldsIds = DB::table('fields')->pluck('id');
        $chatsIds = DB::table('chats')->pluck('id');




        // Puebla la tabla events_users con combinaciones aleatorias de eventos y usuarios
        foreach ($eventIds as $eventId) {
            // Selecciona un usuario aleatorio
            $userId = $userIds->random();
            $sportsId = $sportsIds->random();

              // Inserta la relación en la tabla events_users
            DB::table('event_sport')->insert([
                'event_id' => $eventId,
                'sport_id' => $sportsId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            // Inserta la relación en la tabla events_users
            DB::table('event_user')->insert([
                'event_id' => $eventId,
                'user_id' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        foreach ($fieldsIds as $fieldsId) {
            // Selecciona un usuario aleatorio
            $sportsId = $sportsIds->random();

              // Inserta la relación en la tabla events_users
            DB::table('field_sport')->insert([
                'field_id' => $fieldsId,
                'sport_id' => $sportsId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);           
        }
        foreach ($chatsIds as $chatsId) {
            // Selecciona un usuario aleatorio
            $userId = $userIds->random();

              // Inserta la relación en la tabla events_users
            DB::table('chat_user')->insert([
                'chat_id' => $chatsId,
                'user_id' => $userId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);           
        }
    }
}
