<x-layout>
    <div id="root">

        <x-navbar />

        <div class="flex flex-col md:flex-row">
            <div class=" bg-transparent border-b-2 sm:border-r-2 p-7 h-auto md:min-h-screen flex-2  ">
                <form id="searchForm" class="flex flex-col gap-8">
                    <div class="flex items-center gap-2"><label class="whitespace-nowrap">Search Term:</label><input type="text" name="searchTerm" id="searchTerm" placeholder="Search..." class="border rounded-lg p-3 w-full" value=""></div>
                    <div class="flex flex-wrap items-center gap-2"><label class="whitespace-nowrap">Type:</label>
                        <div class="flex gap-2">
                            <input type="checkbox" id="all" name="type" value="all" class="w-5">
                            <span>Rent &amp; Sale</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="rent" name="type" value="rent" class="w-5">
                            <span>Rent</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="sale" name="type" value="sale" class="w-5">
                            <span>Sale</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="offer" name="offer" value="true" class="w-5">
                            <span>Offer</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2"><label class="whitespace-nowrap">Amenities:</label>
                        <div class="flex gap-2"><input type="checkbox" id="parking" name="parking" class="w-5"><span>Parking</span></div>
                        <div class="flex gap-2"><input type="checkbox" id="furnished" name="furnished" class="w-5"><span>Furnished</span></div>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="">Sort:</label>
                        <select id="sort_order" name="sort" class="border rounded-lg p-3">
                            <option value="regularPrice_desc">Price high to low</option>
                            <option value="regularPrice_asc">Price low to high </option>
                            <option value="createdAt_desc" selected="">Latest</option>
                            <option value="createdAt_asc">Oldest</option>
                        </select>
                    </div><button class="bg-slate-700 text-white p-3 uppercase rounded-lg w-full">Search</button>
                </form>
            </div>
            <div class="flex-1">
                <h1 class="text-3xl m-5 font-semibold border-b p-3 text-slate-700">Listing results:</h1>
                <div class="flex flex-wrap gap-4 p-7 hidden" id="noListingFoundIndicator">
                    <p class="text-xl w-full text-slate-700">No listings found!</p>
                </div>
                <div id="listingContainer" class="flex flex-wrap gap-4 p-7"></div>
                <button type="button" id="showMoreButton" class="hover:underline p-7 text-green-700">Show more</button>
            </div>
        </div>
    </div>

    @vite(['resources/js/search.ts'])
</x-layout>
