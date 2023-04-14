<?php

namespace App\Http\Controllers;

use App\Models\ResumeModel;
use Illuminate\Http\Request;

class ResumeController extends Controller
{


    public function get(){
        return ResumeModel::all();
    }

    public function insert(Request $request) {

        $resume = new ResumeModel();

        $resume->resume_id = uniqid('resume');
        $resume->babysitter_id = $request->babysitter_id;
        $resume->category = $request->category;
        $resume->work_experience = $request->work_experience;
        $resume->application_letter = $request->application_letter;

        $resume->save();

        return response()->json(['message' => 'Success'], 200);

    }


    public function delete(Request $request) {
        return ResumeModel::where('resume_id', $request->route('id'))->delete();
    }


    public function update(Request $request){
        return ResumeModel::where('resume_id', $request->route('id'))->update([
            'category' => $request->category,
            'work_experience' => $request->work_experience,
            'application_letter' => $request->application_letter,
        ]);
    }
}
