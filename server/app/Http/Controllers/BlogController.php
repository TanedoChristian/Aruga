<?php

namespace App\Http\Controllers;

use App\Models\BlogModel;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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


    public function showAllData() {
        $result = DB::select('SELECT blog.* , users.img, users.firstname, users.lastname from blog inner join users on users.user_id = blog.user_id');
        return $result;

    }

    public function showById(Request $request) {
        $result = DB::select('SELECT blog.* , users.img, users.firstname, users.lastname from blog inner join users on users.user_id = blog.user_id where blog.user_id = ? ', [$request->route("id")]);
        return $result;
    }

    public function delete(Request $request) {
        return BlogModel::where('blog_id', $request->route('id'))->delete();
    }

    public function update(Request $request) {

            $blogid = $request->blog_id;
            $details= $request->blog_details;
            $title = $request->blog_title;



            return BlogModel::where('blog_id', $blogid)->update(['blog_title' => $title, 'blog_details' => $details]);


    }
}





?>
