<?php

namespace App\Http\Controllers;

use App\Models\ApplicationModel;
use Illuminate\Console\Application;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $application->subscription_id = $request->subid;
        $application->save();
        return "Success";

    }


    public function updateStatus(Request $request) {
        return ApplicationModel::where('apply_id', $request->route('id'))->update(['apply_status' => $request->status]);
    }

    public function showBabysitter(Request $request){
        return DB::select('select * from application inner join post where apply_deleted !=1 and application.babysitter_id = ?', [$request->route('id')]);
    }

    public function updateDelete(Request $request) {
        return ApplicationModel::where('apply_id', $request->route('id'))->update(['apply_deleted' => '1']);
    }

    public function show(Request $request){
        $str = str_replace('}', '', $request->route('id'));
       return ApplicationModel::where('parent_id', $str)->join('users', 'application.babysitter_id', '=', 'users.user_id')->get();
    }
}





?>
