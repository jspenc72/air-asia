<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('user', 'UserController');
Route::resource('account', 'AccountController');
Route::resource('redemption', 'RedemptionController');
Route::resource('gift-card', 'GiftCardController');

Route::get('accounts', 'AccountController@index');
Route::get('accounts/{account}', 'AccountController@show');
Route::post('accounts', 'AccountController@store');
Route::put('accounts/{account}', 'AccountController@update');
Route::delete('accounts/{account}', 'AccountController@destroy');

Route::get('redemptions', 'RedemptionController@index');
Route::get('redemptions/{redepmtion}', 'RedemptionController@show');
Route::post('redemptions', 'RedemptionController@store');
Route::put('redemptions/{redepmtion}', 'RedemptionController@update');
Route::delete('redemptions/{redepmtion}', 'RedemptionController@destroy');

Route::get('gift-cards', 'GiftCardController@index');
Route::get('gift-cards/{gift-card}', 'GiftCardController@show');
Route::post('gift-cards', 'GiftCardController@store');
Route::put('gift-cards/{gift-card}', 'GiftCardController@update');
Route::delete('gift-cards/{account}', 'GiftCardController@destroy');
