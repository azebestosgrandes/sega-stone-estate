<x-layout>
    <div id="root">

        <x-navbar />

        <div class="p-3 max-w-lg mx-auto">
            <h1 class="text-3xl text-center font-semibold my-7">
                Sign Up
            </h1>
            <form action="/api/auth/sign-up" method="POST" class="flex flex-col gap-4">
                <input required type="text" name="username" placeholder="Username" id="username" class="border p-3 rounded-lg">
                <input required type="email" name="email" placeholder="Email" id="email" class="border p-3 rounded-lg">
                <input required type="password" name="password" placeholder="Password" id="password" class="border p-3 rounded-lg">
                <button type="submit" class="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Sign Up
                </button>
            </form>
            <div class="flex gap-2 mt-5">
                <p>Already have an account?</p>
                <a href="/sign-in">
                    <span class="text-blue-500">
                        Sign in
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
