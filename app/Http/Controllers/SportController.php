<?php

namespace App\Http\Controllers;

use App\Models\Sport;
use App\Http\Requests\StoreSportRequest;
use App\Http\Requests\UpdateSportRequest;

class SportController extends Controller
{
    function getAllSports(){
        try {
            $allSports = Sport::all();
            return response()->json(['data'=> $allSports],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSportRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Sport $sport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sport $sport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSportRequest $request, Sport $sport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sport $sport)
    {
        //
    }
}
