<?php

namespace App\Http\Controllers;

use App\Models\ArugaUser;
use Illuminate\Http\Request;
use Twilio\Rest\Client;

class UserController extends Controller
{
    public function show(){
        return ArugaUser::where('type', 'babysitter')->get();
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


    public function sendMessage() {
        $sid = "AC8239eb606e924309de484fd150b2f5f8";
        $token = "d120e80b7ec08a100c1493b6adca9250";
        $twilio = new Client($sid, $token);

        $message = $twilio->messages
                        ->create("+639608997323", // to
                                [
                                    "body" => "Your Aruga verification code is 4578",
                                    "from" => "+12765985201"
                                ]
                        );

        return $message->sid;
    }

    public function edit(Request $request) {

        $userid = $request->userid;
        $address = $request->address;
        $mobileno = $request->mobileno;
        $email = $request->email;
        $filename = $request->file->store('public');
        $storeFile = str_replace("public", "storage", $filename);
        return ArugaUser::where('email', 'admin')->update(['img' => $storeFile, 'address' => $address, 'mobileno' => $mobileno, 'email' => $email]);


    }

    public function login(Request $request) {
        $data = ArugaUser::where('email', $request->email)->value('password');
        $userid = ArugaUser::where('email', $request->email)->value('user_id');
        $userimg = ArugaUser::where('email', $request->email)->value('img');
        $usertype = ArugaUser::where('email', $request->email)->value('type');
        if(password_verify($request->password, $data)){
            return array(
                'message' => 'Success',
                'userid'=> $userid,
                'userimg' => $userimg,
                'type' => $usertype
            );
        } else {
            return array(
                'message' => 'Error'
            );
        }
    }


}

?>
