<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\OccurrenceController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\SportController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\InvitationController;

// Agrupar las rutas bajo el prefijo '/api'
Route::prefix('api')->group(function () {
    // Rutas para eventos
    Route::get('/events', [EventController::class, 'getAllEvents']);

    // Rutas para chats
    Route::get('/chats', [ChatController::class, 'getAllChats']);

    // Rutas para ocurrencias
    Route::get('/occurrences', [OccurrenceController::class, 'getAllOccurrences']);

    // Rutas para reservas
    Route::get('/bookings', [BookingController::class, 'getAllBookings']);

    // Rutas para campos
    Route::get('/fields', [FieldController::class, 'getAllFields']);

    // Rutas para deportes
    Route::get('/sports', [SportController::class, 'getAllSports']);

    // Rutas para notificaciones
    Route::get('/notifications', [NotificationController::class, 'getAllNotifications']);

    // Rutas para invitaciones
    Route::get('/invitation', [InvitationController::class, 'getAllInvitations']);
});




