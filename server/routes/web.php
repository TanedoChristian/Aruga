<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\HireController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\UserController;
use App\Models\ArugaUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('/users', [UserController::class, 'insert']);
Route::get('/users', [UserController::class, 'show']);
Route::post('/edit-user', [UserController::class, 'edit']);
Route::get('/users/{id}', [UserController::class, 'showID']);
Route::post('/verify-otp', [UserController::class, 'verifyNumber']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/otp', [UserController::class, 'sendMessage']);


Route::post('/postjob', [JobsController::class, 'insert']);
Route::get('/jobs', [JobsController::class, 'show']);
Route::delete('/jobs/{id}', [JobsController::class, 'delete']);


Route::post('/hire', [HireController::class, 'insert']);
Route::get('/hire/{id}', [HireController::class, 'show']);

Route::get('/jobs/{id}', [JobsController::class, 'getStatus']);
Route::put('/jobs',[JobsController::class, 'update']);



Route::delete('/blog/{id}', [BlogController::class, 'delete']);
Route::put('/blog', [BlogController::class, 'update']);
Route::post('/blog', [BlogController::class, 'insert']);
Route::get('/blog', [BlogController::class, 'showAllData']);
Route::get('/blog/{id}', [BlogController::class, 'showById']);


Route::get('/review', [ReviewController::class, 'get']);
Route::get('/review/{id}', [ReviewController::class, 'getById']);
Route::post('/review', [ReviewController::class, 'insert']);

Route::get('/resume',[ResumeController::class, 'get']);
Route::get('/resume/{id}',[ResumeController::class, 'getById']);
Route::post('/resume', [ResumeController::class, 'insert']);
Route::delete('/resume/{id}', [ResumeController::class, 'delete']);
Route::put('/resume/{id}', [ResumeController::class, 'update']);


Route::post('/application', [ApplicationController::class, 'insert']);
Route::get('/application/{id}', [ApplicationController::class, 'show']);
Route::get('/application/babysitter/{id}', [ApplicationController::class, 'showBabysitter']);
Route::put('/application/delete/{id}', [ApplicationController::class, 'updateDelete']);
Route::put('/application/{id}', [ApplicationController::class, 'updateStatus']);


Route::post('/subscribe', [SubscriptionController::class, 'insert']);
Route::get('/subscribe/{id}', [SubscriptionController::class, 'show']);

Route::post('/message', [MessageController::class, 'show']);
Route::get('/message/inbox/{id}', [MessageController::class, 'getInbox']);
Route::get('/messages/{id1}/{id2}', [MessageController::class, 'get']);


?>

