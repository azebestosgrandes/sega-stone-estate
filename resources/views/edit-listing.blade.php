<script>
    window.sessionStorage.setItem("listing", `{!!$listing->toJson()!!}`)
</script>

<x-layout>
    <div id="root">

        <x-navbar />

        <main class="max-w-4xl p-3 mx-auto">
            <h1 class="text-3xl text-center my-7 font-bold">Edit a Listing</h1>
            <form id="createListingForm" class="flex gap-4 sm:flex-row flex-col">
                <div class="flex flex-col gap-4 flex-1">
                    <input type="text" id="name" placeholder="Name" maxlength="62" minlength="10" required="" class="border p-3 rounded-lg " value="{{$listing->name}}">
                    <textarea type="text" id="description" placeholder="Description" required="" class="border p-3 rounded-lg" value="{{$listing->description}}"></textarea>
                    <input type="text" id="address" placeholder="Address" required="" class="border p-3 rounded-lg " value="{{$listing->address}}">
                    <div class="flex gap-6 flex-wrap">
                        <div class="flex gap-2">
                            <input type="checkbox" id="sale" class="w-5" checked="{{$listing->type === 'sale'}}"><span>Sell</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="rent" class="w-5" checked="{{$listing->type==='rent'}}"><span>Rent</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="parking" class="w-5" checked="{{$listing->parking}}">
                            <span>Parking spot</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="furnished" class="w-5" checked="{{$listing->furnished}}">
                            <span>Furnished</span>
                        </div>
                        <div class="flex gap-2">
                            <input type="checkbox" id="offer" class="w-5" checked="{{$listing->offer}}">
                            <span>Offer</span>
                        </div>
                    </div>
                    <div class="flex gap-6 flex-wrap">
                        <div class="flex items-center gap-2">
                            <input type="number" id="bedrooms" min="1" max="10" required="" class="p-3  border border-gray-300 rounded-lg" value="{{$listing->bedrooms}}">
                            <p>Beds</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <input type="number" id="bathrooms" min="1" max="10" required="" class="p-3 border border-gray-300 rounded-lg" value="{{$listing->bathrooms}}">
                            <p>Baths</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <input type="number" id="regularPrice" min="50" max="10000000" required="" class="p-3 border border-gray-300 rounded-lg" value="{{$listing->regularPrice}}">
                            <div class="flex flex-col items-center">
                                <p>Regular price </p><span class="text-xs">($ / Month)</span>
                            </div>
                        </div>
                        <div id="discountPriceContainer" class="items-center gap-2 w-full flex">
                            @if ($listing->discountPrice > 0)
                            <input type="number" id="discountPrice" name="discountPrice" min="50" max="10000000" required="" class="p-3 border border-gray-300 rounded-lg" value="{{$listing->discountPrice}}">
                            <div class="flex flex-col items-center">
                                <p>Discounted price</p>
                                <span class="text-xs">($ / Month)</span>
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="flex flex-col flex-1 gap-4">
                    <p class="font-semibold">Images: <span class="text-gray-600 font-normal">The first image will be the cover (max 6)</span></p>
                    <div class="flex gap-4">
                        <input id="imagesToUploadEl" type="file" accept="image/*" multiple="" min="1" max="6" name="images" class="p-3 border border-gray-300 rounded w-full">
                        <button id="uploadImagesTrigger" type="submit" class="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                            Upload
                        </button>
                    </div>
                    <p id="imageUploadErrorMsgContainer" class="text-red-700"></p>
                    <div id="uploadedImagesContainer" class="gap-4 flex flex-col"></div>
                    <button type="submit" class="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                        Edit Listing
                    </button>
                </div>
            </form>
        </main>
    </div>

    @vite(['resources/js/edit-listing.ts'])
</x-layout>
