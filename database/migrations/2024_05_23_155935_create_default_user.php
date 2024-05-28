<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $userEmail =  'justcrypt17@gmail.com';

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        User::create([
            '_id' => '663d39034134d3930f45ddb3',
            'username' => 'Modafoking Ebere',
            'email' => $this->userEmail,
            'password' => 'PADREPIO@17'
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        User::destroy('663d39034134d3930f45ddb3');
    }
};
