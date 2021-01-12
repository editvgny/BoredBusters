<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'username' => 'required',
            'email'    => 'unique:users|required',
            'password1' => 'required|same:password2',
            'password2' => 'required',
        ];

        $input     = $request->only('username', 'email','password1','password2');
        $validator = Validator::make($input, $rules);

        if ($validator->fails()) {
            return response(['success' => false, 'error' => $validator->messages()], 400);
        }
        $username = $request->username;
        $email    = $request->email;
        $password = $request->password1;
        return response(['status' => 201, User::create(['name' => $username, 'email' => $email, 'password' => Hash::make($password)])], 201);
    }
}
