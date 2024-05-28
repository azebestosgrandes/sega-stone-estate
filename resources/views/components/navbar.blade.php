<div class="bg-slate-200 shadow-md">
    <div class="flex justify-between items-center max-w-6xl mx-auto p-3"><a href="/">
            <h1 class="font-bold text-sm sm:text-xl flex flex-wrap">
                <span class="text-slate-500">SegaStone</span>
                <span class="text-slate-700">Estate</span>
            </h1>
        </a>
        <form id="navbarSearchForm" class="flex bg-slate-100 items-center p-3 rounded-lg">
            <input type="text" name="searchTerm" placeholder="Search..." class="text-xs sm:text-sm bg-transparent focus:outline-none w-24 sm:w-64" value="">
            <button type="submit">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-slate-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
            </button>
        </form>
        <ul class="flex gap-4">
            <a href="/">
                <li class="hidden sm:inline text-slate-700 hover:underline">Home</li>
            </a>
            <a href="/about">
                <li class="hidden sm:inline text-slate-700 hover:underline">About</li>
            </a>

            @auth
            <a href="/profile">
                <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="profile" class="h-7 w-7 rounded-full object-cover">
            </a>
            @endauth
            @guest
            <a href="/sign-in">
                <li>Sign In</li>
            </a>
            @endguest
        </ul>
    </div>
</div>

@vite(['resources/js/navbar.ts'])
