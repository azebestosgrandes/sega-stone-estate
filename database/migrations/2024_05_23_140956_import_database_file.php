<?php

use App\Models\Listing;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;


return new class extends Migration
{

    private function image_source_path(string $image): string
    {
        return "imports/images/$image";
    }

    function image_dest_path(string $image): string
    {
        return "public/uploads/$image";
    }

    /**
     *
     * Run the migrations.
     */
    public function up(): void
    {
        $database = Storage::json('imports/database.json', JSON_THROW_ON_ERROR);

        foreach ($database as $row) {
            $image_urls = [];
            foreach ($row["imageUrls"] as $image) {
                $new_path = $this->image_dest_path($image);

                Storage::copy($this->image_source_path($image), $new_path);
                array_push($image_urls, Storage::url($new_path));
            }

            $data = array_replace($row, [
                'imageUrls' => json_encode($image_urls),
                'userRef' => '663d39034134d3930f45ddb3'
            ]);
            unset($data["_id"]);

            Listing::create($data);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $database = Storage::json('imports/database.json', JSON_THROW_ON_ERROR);

        $files = [];
        $ids = [];

        foreach ($database as $row) {
            foreach ($row["imageUrls"] as $image) {
                array_push($files, $this->image_dest_path($image));
            }

            array_push($ids, $row["_id"]);
        }

        Listing::destroy($ids);
        Storage::delete($files);
    }
};
