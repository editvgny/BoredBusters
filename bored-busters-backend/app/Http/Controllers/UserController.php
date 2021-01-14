<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            return response()->json(['status' => 422, 'success' => false, 'error' => $validator->messages()], 422);
        }
        $username = $request->username;
        $email    = $request->email;
        $password = $request->password1;
        return response(['status' => 201, User::create(['name' => $username, 'email' => $email, 'password' => Hash::make($password)])], 201);
    }

    public function login(Request $request) {
        $rules = [
            'email'    => 'required',
            'password' => 'required'
        ];

        $input     = $request->only('email','password');
        $validator = Validator::make($input, $rules);

        $user_data = array(
            'email'  => $request->email,
            'password' => $request->password
        );

        if ($validator->fails()) {
            return response()->json(['status' => 401, 'success' => false, 'error' => $validator->messages()], 401);
        }
        if (Auth::attempt($user_data)) {
            $token = $request->user()->createToken('loginToken');
            //$user = User::where('email', '=', $request->email)->first();
            //Auth::login($user);
            return response(['token' => $token->plainTextToken, 'status' => 200, 'success' => true], 200);
        } else {
            return response()->json(['status' => 401, 'success' => false, 'error' => "Invalid username or password!"], 401);
        }
    }
}
