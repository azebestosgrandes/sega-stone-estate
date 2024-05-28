<?php

use App\Models\Listing;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::get('/', function () {
    return view('index', [
        'images' => [
            Storage::url('images/hero-1.png'),
            Storage::url('images/hero-2.jpeg'),
            Storage::url('images/hero-3.jpeg'),
            Storage::url('images/hero-4.jpeg'),
        ]
    ]);
});

Route::get('/about', function () {
    return view('about');
});


Route::get('/search', function () {
    return view('search');
});

Route::get('/listing/{id}', function (string $id) {
    $listing = Listing::find($id);
    return view('listing', [
        'listing' => $listing
    ]);
})->name('listing.show');


Route::get('/sign-in', function () {
    return view('sign-in');
})->name('auth.sign-in');

Route::get('/sign-up', function () {
    return view('sign-up');
})->name('auth.sign-up');

Route::get('/login', function () {
    return redirect()->route('auth.sign-in');
})->name('login');


Route::group(['middleware' => 'auth'], function () {

    Route::get('/sign-out', function () {
        return view('sign-out');
    })->name('auth.sign-out');

    Route::get('/profile', function () {
        return view('profile');
    })->name('user.profile');


    Route::get('/create-listing', function () {
        return view('create-listing');
    });

    Route::get('/edit-listing/{id}', function (string $id) {
        $listing = Listing::where('_id', $id)->firstOrFail();

        return view('edit-listing', [
            'listing' => $listing
        ]);
    });
});
