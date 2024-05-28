<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $payload = $request->validate([
            'username' => 'string|nullable',
            'email' => 'string|nullable',
            'password' => 'string|nullable'
        ]);

        $user = User::first();

        if (!$payload["password"]) {
            unset($payload["password"]);
        }

        $user->update($payload);

        return back()
            ->with('message', 'Data updated successfully');
    }
}
