<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory, HasUlids;

    protected $primaryKey = '_id';
    protected $keyType = 'string';

    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $guarded = [];

    protected $casts = [
        'offer'                 => 'boolean',
        'furnished'        => 'boolean',
        'parking'        => 'boolean',
    ];

    public function jsonSerialize(): array
    {
        return [
            '_id' => $this->_id,
            'name' => $this->name,
            'description' => $this->description,
            'address' => $this->address,
            'regularPrice' => $this->regularPrice,
            'discountPrice' => $this->discountPrice,
            'bathrooms' => $this->bathrooms,
            'bedrooms' => $this->bedrooms,
            'furnished' => $this->furnished,
            'parking' => $this->parking,
            'type' => $this->type,
            'offer' => $this->offer,
            'imageUrls' => json_decode($this->imageUrls, true),
            'createdAt' => $this->createdAt,
            'updatedAt' => $this->updatedAt,
        ];
    }
}
