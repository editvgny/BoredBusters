<?php


namespace App\Http\Controllers;


use App\Models\FavoriteActivity;
use Illuminate\Http\Request;

class FavoriteController extends Controller {

    public function getFavorites($userId) {
        return FavoriteActivity::where("user_id", $userId)->get();
    }
}
