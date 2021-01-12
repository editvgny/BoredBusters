<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoriteActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorite_activities', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_id')->constrained('users');
            $table->string('activity');
            $table->string('type');
            $table->integer('participants');
            $table->integer('price');
            $table->boolean('completed');
            $table->string('link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorite_activities');
    }
}
