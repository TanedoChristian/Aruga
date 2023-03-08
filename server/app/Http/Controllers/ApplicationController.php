<?php

namespace App\Http\Controllers;

use App\Models\ApplicationModel;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function insert(Request $request) {
        $application = new ApplicationModel();

        $application->apply_id = uniqid('application');
        $application->babysitter_id = $request->babysitter_id;
        $application->parent_id = $request->parent_id;
        $application->jobpost_id = $request->jobpost_id;
        $application->apply_status = $request->apply_status;
        $application->apply_deleted = $request->apply_deleted;
        $application->save();
        return "Success";

    }

    public function show(Request $request){
        $str = str_replace('}', '', $request->route('id'));
       return ApplicationModel::where('parent_id', $str)->join('users', 'application.babysitter_id', '=', 'users.user_id')->get();
    }
}





?>
