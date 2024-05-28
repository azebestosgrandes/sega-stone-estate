<x-layout>
    <div id="root">

        <x-navbar />

        <div>
            <div class=" max-w-6xl mx-auto py-28 px-3">
                <div class="flex flex-col gap-6 ">
                    <h1 class="text-slate-700 font-bold text-3xl lg:text-6xl">Find your next <span class="text-slate-500">perfect</span><br> place with ease</h1>
                    <div class="text-gray-400 text-xs sm:text-sm">Sega Stone Estate will help you find your home fast, easy
                        and comfortable.<br>Our expert support are always available. </div><a class="text-xs sm:text-sm text-blue-800 font-bold hover:underline" href="/search">Let's Start
                        now...</a>
                </div>
            </div>
            <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    @foreach ($images as $image)
                    <div class="swiper-slide" style="width: 800px;">
                        <div class="h-[500px]" style="background: url({{$image}}) center center / cover no-repeat;">
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="swiper-button-prev swiper-button-disabled"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
                <div>
                    <div class="my-3">
                        <h2 class=" text-2xl font-semibold text-slate-600">Recent offers</h2><a href="/search?offer=true">
                            <p class="text-sm text-blue-800 hover:underline">Show more offers</p>
                        </a>
                    </div>
                    <div id="recentOffersContainer" class="flex flex-wrap gap-4"></div>
                </div>
                <div>
                    <div class="my-3">
                        <h2 class=" text-2xl font-semibold text-slate-600">Recent places for rent</h2><a href="/search?type=rent">
                            <p class="text-sm text-blue-800 hover:underline ">Show more places for rent</p>
                        </a>
                    </div>
                    <div id="rentListingsContainer" class="flex flex-wrap gap-4"></div>
                </div>
                <div>
                    <div class="my-3">
                        <h2 class=" text-2xl font-semibold text-slate-600">Recent places for sale</h2><a href="/search?type=sale">
                            <p class="text-sm text-blue-800 hover:underline">Show more places for sale</p>
                        </a>
                    </div>
                    <div id="saleListingContainer" class="flex flex-wrap gap-4"></div>
                </div>
            </div>
        </div>
    </div>

    @vite(['resources/js/index.ts'])
</x-layout>
