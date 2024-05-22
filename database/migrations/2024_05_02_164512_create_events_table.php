<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            
            $table->id();
            $table->string('title');
            $table->string('slug')->unique()->nullable();
            $table->string('backgroundColor')->nullable();
            $table->text('description');
            $table->float('price')->nullable();
            $table->text('eventPhotoUrl')->nullable();
            $table->dateTime('start');
            $table->dateTime('end');
            $table->boolean('catering');
            $table->enum('publishStatus',['publico','privado','revisado']);

            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); //TODO: hay que sarse cuenta de este campo cuando se haga migrate fresh



            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
