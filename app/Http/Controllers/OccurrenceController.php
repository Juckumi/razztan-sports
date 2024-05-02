<?php

namespace App\Http\Controllers;

use App\Models\Occurrence;
use App\Http\Requests\StoreOccurrenceRequest;
use App\Http\Requests\UpdateOccurrenceRequest;

class OccurrenceController extends Controller
{
    function getAllOccurrences(){
        try {
            $allOccurrencies = Occurrence::all();
            return response()->json(['data'=> $allOccurrencies],201);
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
    public function store(StoreOccurrenceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Occurrence $occurrence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Occurrence $occurrence)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOccurrenceRequest $request, Occurrence $occurrence)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Occurrence $occurrence)
    {
        //
    }
}
