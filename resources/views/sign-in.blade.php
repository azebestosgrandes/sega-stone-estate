<x-layout>
    <div id="root">

        <x-navbar />

        <div class="p-3 max-w-lg mx-auto">
            <h1 class="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form action="/api/auth/sign-in" method="POST" class="flex flex-col gap-4">
                <input type="email" name="email" placeholder="Email" id="email" class="border p-3 rounded-lg">
                <input type="password" name="password" placeholder="Password" id="password" class="border p-3 rounded-lg">
                <button type="submit" class="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Sign In
                </button>
                <a href="/api/auth/sign-in/google" class="text-center bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95">
                    Continue with google
                </a>
            </form>
            <div class="flex gap-2 mt-5">
                <p>Don't Have an account?</p>
                <a href="/sign-up">
                    <span class="text-blue-500">
                        Sign up
                    </span>
                </a>
            </div>

            @session('error')
            <p class="text-red-700 mt-5">
                {{ session('error') }}
            </p>
            @enderror
        </div>
    </div>

</x-layout>
