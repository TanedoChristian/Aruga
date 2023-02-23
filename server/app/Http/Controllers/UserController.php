<?php

namespace App\Http\Controllers;

use App\Models\ArugaUser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(){
        return ArugaUser::all();
    }

    public function insert(Request $request) {
        $user = new ArugaUser();

    $user->username = $request->username;
    $user->firstname = $request->firstname;
    $user->lastname = $request->lastname;
    $user->address = $request->address;
    $user->email = $request->email;




    $filename = $request->file->store('public');

    $storeFile = str_replace("public", "storage", $filename);

    $user->img = $storeFile;


    $user->user_id = uniqid('user');
    $user->mobileno = $request->mobileno;
    $user->password = password_hash($request->password, PASSWORD_DEFAULT);
    $user->type = $request->type;
    $user->status = $request->status;



    $user->save();
    return 'Success';
    }

    public function showID(Request $request){
        return ArugaUser::where('user_id', $request->route('id'))->get();
    }

    public function login(Request $request) {
        $data = ArugaUser::where('email', $request->email)->value('password');

        if(password_verify($request->password, $data)){
            return array(
                'message' => 'Success'
            );
        } else {
            return array(
                'message' => 'Error'
            );
        }
    }
}
