<?php

namespace App\Http\Controllers;

use App\Models\HireModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HireController extends Controller
{
    public function insert(Request $request) {
         $hireModel = new HireModel();
         $hireModel->hire_id = uniqid('hire');
         $hireModel->parent_id = $request->parent_id;
         $hireModel->babysitter_id = $request->babysitter_id;

         $hireModel->save();

         return 'Success';
    }


    public function show(Request $request) {

        return DB::select('SELECT users.firstname, users.img, users.lastname, hire.* from hire  inner join users on users.user_id = hire.parent_id where hire.babysitter_id = ?', [$request->route("id")]);
    }
}
