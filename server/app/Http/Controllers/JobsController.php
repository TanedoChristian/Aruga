<?php

namespace App\Http\Controllers;

use App\Models\JobsModel;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

class JobsController extends Controller
{

    public function show(){

        return JobsModel::all();

    }
    public function insert(Request $request){
        $job = new JobsModel();

        $job->jobpost_id = uniqid('jobpost');
        $job->parent_id = $request->parent_id;
        $job->jobpost_desc = $request->description;
        $job->jobpost_type = $request->type;
        $job->jobpost_status = "active";
        $job->salary = $request->salary;
        $job->jobpost_address = $request->address;
        $job->jobpost_title = $request->title;

        $job->save();

        return 'Success';


    }
}

?>
