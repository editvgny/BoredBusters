<?php


namespace App\Http\Controllers;

use App\Models\FavoriteActivity;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{

    public function getFavorites($userId)
    {
        return FavoriteActivity::where("user_id", $userId)->get();
    }

    public function getActivityByTitle($activityTitle)
    {
        return FavoriteActivity::where("activity", $activityTitle)->get();
    }

    public function deleteActivityById($activityId)
    {
        return FavoriteActivity::destroy($activityId);
    }

    public function addActivityById(Request $request)
    {
        return FavoriteActivity::create([
            "user_id" => $request['userId'],
            "type" => $request->activity['type'],
            "participants" => $request->activity['participants'],
            "activity" => $request->activity['activity'],
            "link" => $request->activity['link'],
            "price" => $request->activity['price'],
            "completed" => 0
        ]);
    }

    public function getActivityByCondition($userId, Request $request)
    {
        $minPrice = $request->input('activityMinPrice');
        $maxPrice = $request->input('activityMaxPrice');
        $participants = $request->input('activityParticipants');
        $type = $request->input('activityType');

        if ($participants && $type) {
            return FavoriteActivity::where([["user_id", $userId],
                ["price", '>=', $minPrice],
                ["price", '<=', $maxPrice],
                ["participants", $participants],
                ["type", $type],])
                ->get();
        } else if ($type) {
            return FavoriteActivity::where([["user_id", $userId],
                ["price", '>=', $minPrice],
                ["price", '<=', $maxPrice],
                ["type", $type],])
                ->get();
        } else if ($participants) {
            return FavoriteActivity::where([["user_id", $userId],
                ["price", '>=', $minPrice],
                ["price", '<=', $maxPrice],
                ["participants", $participants],])
                ->get();
        } else {
            return FavoriteActivity::where([["user_id", $userId],
                ["price", '>=', $minPrice],
                ["price", '<=', $maxPrice],])
                ->get();
        }
    }

    public function completeById(Request $request)
    {
        return FavoriteActivity::where(["id" => $request->activityId])
            ->update(["completed" => $request->value]);
    }
}
