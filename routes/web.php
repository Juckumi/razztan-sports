<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\OccurrenceController;
use App\Http\Controllers\AuthController;

use App\Http\Controllers\BookingController;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\SportController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\MessageController;



// Agrupar las rutas bajo el prefijo '/api'
Route::prefix('api')->group(function () {
    // Rutas para eventos

    Route::prefix('events')->group(function() {
        Route::get('/',[EventController::class,'getAllEvents']);
        Route::post('/',[EventController::class,'createEvent']);

        Route::get('/paginated',[EventController::class,'getAllPaginatedEvents']);

        Route::get('/{id}',[EventController::class,'getEventById']);
        Route::get('/slug/{slug}',[EventController::class,'getEventBySlug']);
        Route::get('/user/{id}',[EventController::class,'getEventByUserId']);



    });

    Route::prefix('users')->group(function() {
        Route::get('/',[AuthController::class,'getAllUsers']);
    });
    Route::prefix('chats')->group(function() {
        Route::get('/',[ChatController::class,'getAllChats']);
        Route::get('/{id}',[ChatController::class,'getChatById']);
        Route::get('/user/{id}',[ChatController::class,'getChatsByUserId']);


    });
    Route::prefix('messages')->group(function() {
        Route::get('/',[MessageController::class,'getAllMessages']);
        Route::get('/{id}',[MessageController::class,'getMessageById']);
        Route::get('/chat/{id}',[MessageController::class,'getMessagesByChatId']);


    });
    Route::prefix('occurrences')->group(function() {
        Route::get('/',[OccurrenceController::class,'getAllOccurrences']);
        Route::post('/',[OccurrenceController::class,'createOccurence']);

        Route::get('/event/{id}',[OccurrenceController::class,'getOccurencesByEventId']);

    });
    Route::prefix('bookings')->group(function() {
        Route::get('/',[BookingController::class,'getAllBookings']);
    });
    Route::prefix('fields')->group(function() {
        Route::get('/',[FieldController::class,'getAllFields']);
    });
    Route::prefix('sports')->group(function() {
        Route::get('/',[SportController::class,'getAllSports']);
    });
    Route::prefix('notifications')->group(function() {
        Route::get('/',[NotificationController::class,'getAllNotifications']);
    });
    Route::prefix('invitations')->group(function() {
        Route::get('/',[InvitationController::class,'getAllInvitations']);
        Route::post('/',[InvitationController::class,'createInvitation']);
        Route::get('/user/{id}',[InvitationController::class,'getAllInvitationsByUserId']);


    });
});




