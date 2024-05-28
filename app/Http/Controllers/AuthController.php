<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class AuthController extends Controller
{

    function getAllUsers(){
        try {
            $search = request()->input('search', '');
    
            $allusers = User::where('username', 'LIKE', '%' . $search . '%')->get();
    
            return response()->json(['data'=> $allusers], 200);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()], 500);
        }
    }
    

    
   
}


