<x-layout>
    <div id="root">
        <script>
            window.sessionStorage.setItem("listing", `{!!$listing->toJson()!!}`)
        </script>

        <x-navbar />

        <main>
            <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                    @foreach (json_decode($listing->imageUrls, true) as $imageUrl)
                    <div class="swiper-slide swiper-slide-active" style="width: 931px;">
                        <div class="h-[500px]" style="background: url({{$imageUrl}}) center center / cover no-repeat;"></div>
                    </div>
                    @endforeach
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div id="copyLinkTrigger" class="fixed top-[13%] right-[3%] z-10 bg-slate-100 cursor-pointer border rounded-full w-12 h-12 flex justify-center items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                </svg>
            </div>
            <div class="flex flex-col  max-w-4xl mx-auto p-3 my-7 gap-6">
                <div class="w-full">
                    <p class="text-2xl font-semibold">
                        {{$listing->name}} - $
                        @if ($listing->discountPrice > 0)
                        {{Number::format($listing->discountPrice)}}
                        @else
                        {{Number::format($listing->regularPrice)}}
                        @endif
                    </p>
                    <p class="flex items-center mt-6 font-semibold gap-2 text-slate-600 my-2 text-sm">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                        </svg>
                        {{ $listing->address }}
                    </p>
                    <div class="flex justify-start items-center space-x-4 w-[75%]">
                        <p class="bg-red-900 w-full max-w-[200px] rounded-md p-1 text-white text-center  ">
                            For {{Str::title($listing->type)}}
                        </p>
                        @if ($listing->discountPrice > 0)
                        <p class="w-full max-w-[200px] bg-green-900 rounded-md p-1 text-white text-center">
                            ${{$listing->regularPrice - $listing->discountPrice}} discount
                        </p>
                        @endif
                    </div>
                    <p class="my-3 text-slate-800"><span class="font-semibold text-black">Description - </span>{{ $listing->description}}</p>
                    <ul class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-green-900">
                        <li class="flex items-center whitespace-nowrap"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-lg mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                            </svg>{{$listing->bedrooms}} Beds</li>
                        <li class="flex items-center whitespace-nowrap"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                            </svg>{{$listing->bathrooms}} Baths</li>
                        <li class="flex items-center whitespace-nowrap"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-lg mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"></path>
                            </svg>{{$listing->parking ? 'Parking' : 'No parking'}}</li>
                        <li class="flex items-center whitespace-nowrap"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-lg mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z"></path>
                            </svg>{{$listing->furnished ? 'Furnished' : 'Not furnished'}}</li>
                    </ul>
                </div>
                @auth
                <div class="w-full">
                    <div class="mt-6">
                        <button id="contactLandlordBtn" class="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 w-full">
                            Contact Landlord
                        </button>
                    </div>
                </div>
                @endauth
            </div>
        </main>
    </div>


    <p id="copyLinkTooltip" class="hidden fixed top-[23%] right-[5%] rounded-md bg-slate-100 z-10 p-2">Link Copied!</p>

    @vite(['resources/js/listing.ts'])
</x-layout>
