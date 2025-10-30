<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        $user = User::where("email", $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return [
                "message" => "Invalid credentials"
            ];
        }

        $token = $user->createToken($user->name)->plainTextToken;

        return [
            "user" => $user,
            "token" => $token
        ];

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
