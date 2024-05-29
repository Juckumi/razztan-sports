<?php

namespace App\Http\Controllers;

use App\Models\Occurrence;
use App\Models\Event;

use App\Http\Requests\StoreOccurrenceRequest;
use App\Http\Requests\UpdateOccurrenceRequest;
use Illuminate\Support\Facades\Validator;


class OccurrenceController extends Controller
{
    function getAllOccurrences(){
        try {
            $allOccurrencies = Occurrence::with('event')->get();
            return response()->json(['data'=> $allOccurrencies],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getOccurencesByEventId($eventId){
        try {
            $occurences = Event::find($eventId)->occurrences;
            return response()->json(['data'=> $occurences],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function createOccurence(){

        try {
                
        $validator = Validator::make(request()->all(), [
            'title' => 'required|max:23',
            'description' => 'required|max:255',
            'occurencePhotoUrl' => 'required',
            'start' => 'required|date',
        ],$messages = [
            'required' => 'el campo  :attribute es obligatorio',
            'title.max' => 'el campo :attribute es demsaiado largo el maximo es :max',
        ]);
        if ($validator->fails()) {  
            return response()->json(['errors'=> $validator->errors()],401);

        }

            $imageName = time() . '-' . 'razztan-sports-occurence-'.'.' . request()->occurencePhotoUrl->extension();
            request()->occurencePhotoUrl->move(base_path('client/public/uploads/eventsPhotos'), $imageName);
            $occurencePhotoUrl = '/uploads/eventsPhotos/' . $imageName;    

            $occurrence = new Occurrence();
            $occurrence->title = request()->title;
            $occurrence->start = request()->start;
            $occurrence->description = request()->description;
            $occurrence->occurencePhotoUrl = $occurencePhotoUrl;

            $occurrence->event_id = request()->eventId ;
            $occurrence->save();

            
            return response()->json(['data'=> request()->all()],201);



        } catch (\Throwable $th) {

            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
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
