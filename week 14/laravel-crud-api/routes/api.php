<?php

use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("create-student", [StudentController::class, 'createStudent']);
Route::get("students", [StudentController::class, 'studentsListing']);
Route::get("student/{id}", [StudentController::class, 'studentDetail']);
Route::delete("student/{id}", [StudentController::class, 'studentDelete']);
