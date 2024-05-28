<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $beginAt = $request->query('startIndex') ?? 0;
        $limit = $request->query('limit') ?? 9;

        $listings_query = Listing::select();

        $offer = $request->query('offer');
        if ($offer) {
            $listings_query = $listings_query->where('offer', true);
        }

        $type = $request->query('type');
        if ($type) {
            if ($type === 'all') {
                // $listings_query = $listings_query
                //     ->where(function (Builder $query) {
                //         $query->where('type', 'rent')
                //             ->orWhere('type', 'sale');
                //     });
                $listings_query = $listings_query
                    ->whereIn('type', ['rent', 'sale']);
            } else {
                $listings_query = $listings_query
                    ->where('type', $type);
            }
        }

        $search_term = $request->query('searchTerm');
        if ($search_term) {
            $search_term = strtolower($search_term);
            $listings_query = $listings_query->whereRaw('LOWER("name") LIKE ?', ["%$search_term%"]);
        }

        $parking = $request->query('parking');
        if ($parking) {
            $listings_query = $listings_query->where('parking', true);
        }

        $furnished = $request->query('furnished');
        if ($furnished) {
            $listings_query = $listings_query->where('furnished', true);
        }

        $user_ref = $request->query('userRef');
        if ($user_ref) {
            $listings_query = $listings_query->where('userRef', $user_ref);
        }

        $ordering = $request->query('order') ?? 'asc';
        $sorting = $request->query('sort') ?? 'createdAt';
        if ($ordering && $sorting) {
            $listings_query = $listings_query->orderBy($sorting, $ordering);
        }

        $listings = $listings_query
            ->skip($beginAt)
            ->take($limit)
            ->get();

        return $listings;
    }

    /**
     * create a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();
        $listing = Listing::create(
            array_replace(
                $request->toArray(),
                [
                    'imageUrls' => json_encode($request->get('imageUrls') ?? []),
                    'userRef' => $user->_id
                ]
            )
        );
        return response()
            ->json([
                "_id" => $listing->_id
            ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $listing = Listing::where("_id", $id)->first();
        if (!$listing)
            return response()
                ->json([
                    "error" => "Not found"
                ], 404);
        return $listing;
    }

    public function upload(Request $request)
    {
        $files = $request->allFiles()["file"];

        return array_map(function ($file) {
            return Storage::url($file->store('uploads', 'public'));
        }, $files);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $listing = Listing::findOrFail($id);

        $listing->update(
            array_replace(
                $request->toArray(),
                [
                    "imageUrls" => json_encode($request->get("imageUrls") ?? [])
                ]
            )
        );

        return response()
            ->json([
                "_id" => $listing->_id
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = auth()->user();

        $listing = Listing::where('_id', $id)->where('userRef', $user->_id)->firstOrFail();

        foreach (json_decode($listing->imageUrls) as $image_url) {
            $image_file = basename($image_url);
            $image_path = "public/uploads/$image_file";
            Storage::delete($image_path);
        }

        $listing->delete();

        return response()
            ->json([
                "message" => "Listing has been deleted"
            ]);
    }
}
