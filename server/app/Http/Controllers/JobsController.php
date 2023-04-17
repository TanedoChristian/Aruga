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

    public function getStatus(Request $request){
        return JobsModel::where(
            'parent_id', $request->route('id')
        )->get();
    }


    public function update(Request $request) {
        $jobid = $request->jobpost_id;
        $address= $request->jobpost_address;
        $salary = $request->salary;
        $desc = $request->jobpost_desc;
        $title = $request->jobpost_title;


        return JobsModel::where('jobpost_id', $jobid)->update(['jobpost_title' => $title, 'jobpost_address' => $address, 'salary' => $salary, 'jobpost_desc' => $desc]);

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
        $job->subscription_id = $request->subid;
        $job->deleted = 0;

        $job->save();

        return 'Success';
    }

    public function delete(Request $request) {
        return JobsModel::where('jobpost_id', $request->route('id'))->delete();
    }
}

?>
