<x-layout>

    @session('signed-in')
    <script>
        window.localStorage.setItem("user", `{!!auth()->user()->toJson()!!}`)
    </script>
    @endsession

    <div id="root">

        <x-navbar />

        <div class="p-3 max-w-lg mx-auto">
            <h1 class="text-3xl font-semibold text-center my-7">Profile</h1>
            <form method="POST" action="/api/user" class="flex flex-col gap-4"><input type="file" hidden="" accept="image/*"><img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="profile" class="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2">
                @method('PUT')
                <p class="text-sm self-center"> </p>
                <input type="text" name="username" id="username" placeholder="Username" class="border rounded-lg p-3" value="{{Auth::user()->username}}">
                <input type="email" name="email" id="email" placeholder="Email" class="border rounded-lg p-3" value="{{Auth::user()->email}}">
                <input type="password" name="password" id="password" placeholder="Password" class="border rounded-lg p-3">
                <button type="submit" class="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Update
                </button>
                <a class="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 text-center" href="/create-listing">
                    Create Listing
                </a>
            </form>
            <div class="flex justify-between mt-5">
                <a href="/sign-out" class="text-red-700 cursor-pointer">
                    Sign out
                </a>
            </div>
            <p class="text-red-700 mt-5"></p>
            @session('message')
            <p class="text-green-700 mt-5">
                {{session('message')}}
            </p>
            @endsession
            <button id="toggleListingButton" class="text-green-700 w-full">
                Show listings
            </button>
            <div class="mt-5 flex flex-col gap-4" id="listingsContainer">
                <h1 class="text-2xl font-semibold text-center my-7">
                    Your listings
                </h1>
                <div class="gap-4 flex flex-col" id="listingsListContainer"></div>
                <div class="flex justify-center">
                    <button id="showMoreListingsButton" class="text-green-700">
                        Show more
                    </button>
                </div>
            </div>
        </div>
    </div>

    @vite(['resources/js/profile.ts'])
</x-layout>
