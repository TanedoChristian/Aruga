<?php

namespace App\Http\Controllers;

use App\Models\ReviewModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    public function get(){
        return ReviewModel::all();
    }


    public function getById(Request $request){

        $result = DB::select('SELECT REVIEWS.*, USERS.firstname, USERS.lastname, users.img FROM REVIEWS INNER JOIN USERS ON USERS.USER_ID = REVIEWS.PARENT_ID where reviews.babysitter_id = ? and reviews.review_target = ?', [$request->route('id'), $request->route('target')]);
        return $result;
    }

    public function getByIdParent(Request $request){
        $result = DB::select('SELECT REVIEWS.*, USERS.firstname, USERS.lastname, users.img FROM REVIEWS INNER JOIN USERS ON USERS.USER_ID = REVIEWS.babysitter_id where reviews.parent_id = ? and reviews.review_target = ? ', [$request->route('id'), $request->route('target')]);
        return $result;
    }
    public function insert(Request $request){


        $review = new ReviewModel();

        $review->review_id = uniqid('R');
        $review->parent_id = $request->parent_id;
        $review->babysitter_id = $request->babysitter_id;
        $review->review_ratings = $request->review_ratings;
        $review->review_details = $request->review_details;
        $review->review_deleted = 0;
        $review->review_target = $request->target;
        $review->save();

        return response()->json(['message' => 'success'], 200);

    }


    public function getRatings(){
        return DB::select("select babysitter_id, round(avg(review_ratings)) as ratings from reviews group by babysitter_id");
    }
}
