<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BabysitterModel extends Model
{
    use HasFactory;
    protected $table = "babysitter_account";
    public $timestamps = false;
}
