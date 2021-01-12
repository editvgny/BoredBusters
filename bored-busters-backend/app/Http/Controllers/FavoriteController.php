<?php


namespace App\Http\Controllers;

use App\Models\FavoriteActivity;
use Illuminate\Http\Request;

class FavoriteController extends Controller {

    public function getFavorites($userId) {
        return FavoriteActivity::where("user_id", $userId)->get();
    }

    public function getActivityByTitle($activityTitle) {
        return FavoriteActivity::where("activity", $activityTitle)->get();
    }

    public function deleteActivityById($activityId) {
        return FavoriteActivity::destroy($activityId);
    }

    public function addActivityById(Request $request) {
       return FavoriteActivity::create([
            "user_id" => 1,
            "type" => $request->type,
            "participants" => $request->participants,
            "activity" => $request->activity,
           "link" => $request->link,
           "price" => $request->price,
           "completed" => 0
        ]);
    }
}
