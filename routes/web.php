<?php

use App\Http\Controllers\PubliController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PubliController::class, 'home'])->name('home');