<?php

namespace App\Http\Controllers;

use App\Models\HireModel;
use Illuminate\Http\Request;

class HireController extends Controller
{
    public function insert(Request $request) {
         $hireModel = new HireModel();
         $hireModel->parent_id = $request->parent_id;
         $hireModel->babysitter_id = $request->babysitter_id;

         $hireModel->save();

         return 'Success';
    }

    public function show(){
        return HireModel::all();
    }
}
