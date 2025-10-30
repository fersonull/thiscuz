<?php

use Illuminate\Support\Facades\Route;

Route::inertia("/", "home");
Route::inertia("/discussions", "discussions/index")->name("discussions");
Route::inertia("/discussions/{id}", "show-discussion/index");