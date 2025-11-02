<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get("/", function (Request $request) {
    return "API";
});

Route::post("/register", [AuthController::class, "register"])->name("register");
Route::post("/login", [AuthController::class, "login"])->name("login");
Route::post("/logout", [AuthController::class, "logout"])->middleware("auth:sanctum");

