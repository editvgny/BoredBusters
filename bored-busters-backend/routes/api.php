<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Resource('/register', 'App\Http\Controllers\UserController');
Route::get('/favorite/{userId}', [App\Http\Controllers\FavoriteController::class, 'getFavorites']);
Route::get('/get-activity/{activityTitle}', [App\Http\Controllers\FavoriteController::class, 'getActivityByTitle']);
Route::delete('/favorite/{activityId}', [\App\Http\Controllers\FavoriteController::class, 'deleteActivityById']);
Route::post('/favorite', [\App\Http\Controllers\FavoriteController::class, 'addActivityById']);

