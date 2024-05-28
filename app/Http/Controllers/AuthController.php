<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function sign_in_with_google()
    {
        return redirect()
            ->route('auth.sign-in')
            ->with('error', 'Something went wrong');
    }

    public function sign_in(Request $request)
    {
        $payload = $request->validate([
            'email' => ['required', 'string'],
            'password' => ['required', 'string']
        ]);

        $user = User::where('email', $payload["email"])
            ->first();

        if (!Hash::check($payload["password"], $user->password)) {
            return back()
                ->with('error', 'Wrong credentials');
        }

        Auth::login($user);
        return redirect()
            ->route('user.profile')
            ->with('signed-in', 'true');
    }

    public function sign_up(Request $request)
    {
        $payload = $request->validate([
            'username' => ['required', 'string'],
            'email' => ['required', 'string'],
            'password' => ['required', 'string']
        ]);

        $existing_user = User::where('username', $payload['username'])->first();
        if ($existing_user)
            return back()
                ->with('error', 'Username already taken');

        $existing_user = User::where('email', $payload['email'])->first();
        if ($existing_user)
            return back()
                ->with('error', 'Email already taken');

        User::create($payload);

        return redirect()
            ->route('auth.sign-in');
    }

    public function sign_out()
    {
        Auth::logout();
        return redirect()
            ->route('auth.sign-in');
    }
}
