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

        return DB::select('SELECT DISTINCT  users.firstname, users.img, users.lastname, hire.parent_id, hire.babysitter_id from hire  inner join users on users.user_id = hire.parent_id where hire.babysitter_id = ?', [$request->route("id")]);
    }

    public function showUserDetails(Request $request) {
        return DB::select('SELECT * from hire where parent_id = ? and babysitter_id=?',[$request->route("id"), $request->route("id1")]);
    }

    public function showInbox(Request $request) {
        return DB::select('SELECT  concat(user.firstname, " ", user.lastname) as babysitter,  user.img as babysitter_img, user1.img as parent_img,  concat(user1.firstname, " ", user1.lastname) as parent, hire.* FROM hire
        INNER JOIN users user on hire.babysitter_id = user.user_id
        INNER JOIN users user1 on hire.parent_id = user1.user_id
   where (hire.parent_id =? or hire.babysitter_id =?)', [$request->route('id'), $request->route('id')]);
    }
}
