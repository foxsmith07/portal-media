<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PubliController extends Controller
{
    public function home(){
        return view('home');
    }
}
