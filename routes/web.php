<?php

use Illuminate\Support\Facades\Route;

Route::inertia("/", "home");
Route::inertia("/discussions", "discussions/index")->name("discussions");
Route::inertia("/discussions/{id}", "show-discussion/index");

Route::inertia("/login", "auth/login-page")->name("login");
Route::inertia("/register", "auth/register-page")->name("register");