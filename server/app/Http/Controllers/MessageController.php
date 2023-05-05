<?php

namespace App\Http\Controllers;

use App\Models\MessageModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{


    public function show(Request $request) {
        $message = new MessageModel();

        $message->message_from = $request->message_from;
        $message->message_to = $request->message_to;
        $message->message = $request->message;

        $message->save();
        return DB::select('SELECT * FROM MESSAGE WHERE MESSAGE_FROM =? AND MESSAGE_TO =? ', [$request->message_from, $request->message_to]);

    }

    public function get(Request $request) {
        return DB::select('SELECT users.img, message.* FROM MESSAGE inner join users on users.user_id = message.message_from WHERE (MESSAGE_FROM =? AND MESSAGE_TO =?) OR ( MESSAGE_FROM =? AND MESSAGE_TO =?) ', [$request->route('id1'), $request->route('id2'),  $request->route('id2'), $request->route('id1')]);
    }


    public function getInbox(Request $request) {
        return DB::select("SELECT DISTINCT concat(user.firstname, ' ', user.lastname) as message_from, concat(user1.firstname, ' ', user1.lastname) as message_to, user1.user_id as from_id, user.user_id as to_id ,user.img as to_img, user1.img as from_img, user1.email from message inner join users user on user.user_id = message.message_from inner join users user1 on user1.user_id = message.message_to where message.message_from =? or message.message_to=?", [$request->route('id'), $request->route('id')]);
    }
}
