<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ListingController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::get('/listing', [ListingController::class, "index"]);
Route::get('/listing/{id}', [ListingController::class, "show"]);

Route::post('/auth/sign-in', [AuthController::class, "sign_in"]);
Route::get('/auth/sign-in/google', [AuthController::class, "sign_in_with_google"]);
Route::post('/auth/sign-up', [AuthController::class, "sign_up"]);

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', function () {
        return response()
            ->json([
                "message" => "Welcome to the Sega Stone API"
            ]);
    });

    Route::get('/auth/sign-out', [AuthController::class, "sign_out"]);

    Route::post('/listing/upload', [ListingController::class, "upload"]);

    Route::post('/listing', [ListingController::class, "store"]);
    Route::put('/listing/{id}', [ListingController::class, "update"]);
    Route::delete('/listing/{id}', [ListingController::class, "destroy"]);

    Route::get('/user/listings/{id}', [ListingController::class, "index"]);
    Route::put('/user', [UserController::class, "update"]);
});
