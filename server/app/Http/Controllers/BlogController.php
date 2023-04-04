<?php

namespace App\Http\Controllers;

use App\Models\BlogModel;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function insert(Request $request) {

        $blog = new BlogModel();
        $blog->blog_id = uniqid('blog');
        $blog->user_id = $request->user_id;

        $filename = $request->file->store('public');
        $storeFile = str_replace("public", "storage", $filename);
        $blog->blog_img = $storeFile;


        $blog->blog_deleted = 0;
        $blog->blog_details = $request->details;
        $blog->blog_title = $request->title;

        $blog->save();

        return 'Success';
    }
    public function show() {
        return BlogModel::all();
    }

    public function showById(Request $request) {
        return BlogModel::where('user_id', $request->route('id'))->get();
    }
}





?>
