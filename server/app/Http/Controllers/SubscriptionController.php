<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionModel;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    //

    public function insert(Request $request) {
        $subscription = new SubscriptionModel();

        $subscription->subscription_id = uniqid('sub');
        $subscription->user_id = $request->user_id;
        $subscription->amount = $request->amount;

        date_default_timezone_set('Asia/Manila');
        $currentDateTime = new DateTime();
        $test = new DateTime();
        $subscription->date_start = $test;
        $currentDateTime->add(new DateInterval('P1M'));
        $newDateTime = $currentDateTime->format('Y-m-d H:i:s');
        $subscription->date_ended = $newDateTime;
        $subscription->status = 'Active';

        $filename = $request->file->store('public');
        $storeFile = str_replace("public", "storage", $filename);
        $subscription->subscription_payment = $storeFile;


        $subscription->save();
    }

    public function show(Request $request){
        return SubscriptionModel::where([['user_id', $request->route('id')], ['status', 'Active']])->get();
    }
}
