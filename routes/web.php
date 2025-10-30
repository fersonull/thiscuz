<?php

use Illuminate\Support\Facades\Route;

Route::inertia("/", "home");
Route::get("/discussions", function () {

    $discussions = [
        [
            "id" => '1',
            "title" => "My fedora broke while downloading games",
            "date" => 'Oct 4, 2025',
            "solutions" => 4,
            "tags" => ["#linux", "#fedora", "#gnome"]
        ],
        [
            "id" => '2',
            "title" => "I can't open my dock to dash in fedora with gnome. please help asap",
            "date" => 'Oct 30, 2025',
            "solutions" => 1,
            "tags" => ["#linux"]
        ]
    ];

    sleep(2);

    return inertia("discussions/index", ["discussions" => $discussions]);
})->name("discussions");