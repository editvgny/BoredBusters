<?php

use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::Resource('/register', 'App\Http\Controllers\UserController');
Route::post('/login', [UserController::class, 'login']);
Route::get('/favorite/{userId}', [App\Http\Controllers\FavoriteController::class, 'getFavorites'])->middleware('auth');
Route::get('/get-activity/{activityTitle}', [App\Http\Controllers\FavoriteController::class, 'getActivityByTitle']);
Route::delete('/favorite/{activityId}', [FavoriteController::class, 'deleteActivityById']);
Route::post('/favorite', [FavoriteController::class, 'addActivityById']);

