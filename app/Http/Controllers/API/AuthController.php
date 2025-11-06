<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private $rules = [
        "email.exists" => "Email not found.",
    ];

    public function login(Request $request)
    {

        sleep(1);


        $request->validate([
            "email" => "required|email|exists:users",
            "password" => "required"
        ], $this->rules);

        $user = User::where("email", $request->email)->first();

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                "message" => "Incorrect password.",
                "errors" => [
                    "password" => ["Incorrect password."]
                ]
            ], 400);
        }

        $token = $user->createToken($user)->plainTextToken;

        $result = [
            "user" => $user,
            "token" => $token
        ];

        return response()->json($result, 200);

    }

    public function register(Request $request)
    {
        $fields = $request->validate([
            "name" => "required",
            "email" => "required|email|unique:users",
            "password" => "required|min:6|confirmed"
        ]);

        $user = User::create($fields);

        return $user;
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return [
            "message" => "You are logged out."
        ];
    }
}
