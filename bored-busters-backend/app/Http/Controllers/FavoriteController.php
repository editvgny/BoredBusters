<?php


namespace App\Http\Controllers;

use App\Models\FavoriteActivity;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

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

    public function export(Request $request)
    {
        //Create excel sheet
        $spreadsheet = new Spreadsheet();
        $worksheet = new Worksheet($spreadsheet, 'Favorites data');
        $spreadsheet->addSheet($worksheet, 0);
        $spreadsheet->removeSheetByIndex(1);

        $this->setColumnTitles($worksheet);
        $this->setColumnAutoWidth($worksheet);

        //Get favorites data from database
        $favoritesData = $this->getFavorites($request->userId);

        $actualRowIndex = 2;
        foreach($favoritesData as $data) {
            $rowData = [];
            $rowData[] = $data->activity;
            $rowData[] = $data->type;
            $rowData[] = $data->participants;

            if ($data->price) {
                $rowData[] = $data->price;
            } else {
                $rowData[] = '0';
            }

            if ($data->completed) {
                $rowData[] = 'Completed';
            } else {
                $rowData[] = 'Not completed';
            }

            //Write data from $actualDataToTableRow to the actual row
            $worksheet->fromArray($rowData, NULL, 'A' . $actualRowIndex);
            $actualRowIndex++;
        }

        //Save and send as a response
        $writer = new Xlsx($spreadsheet);
        $writer->save('favorites.xlsx');
        $file = public_path() . DIRECTORY_SEPARATOR . 'favorites.xlsx';
        $headers = ['Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
//        $headers[] = $request->headers;
        return response()->download($file, 'favorites.xlsx', $headers)->deleteFileAfterSend(true);
    }

    private function setColumnTitles(Worksheet $worksheet): void
    {
        $titles = ['Activity', 'Type', 'Participants', 'Price', 'Completed'];
        $worksheet->fromArray($titles, NULL, 'A1');
    }

    /**
     * @param Worksheet $worksheet
     */
    private function setColumnAutoWidth(Worksheet $worksheet): void
    {
        $columns = ['A', 'B', 'C', 'D', 'E'];
        foreach ($columns as $column) {
            $worksheet->getColumnDimension($column)->setAutoSize(true);
        }
    }
}
