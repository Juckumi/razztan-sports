<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Event;

use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use Illuminate\Support\Facades\Validator;


class BookingController extends Controller
{

    function getAllBookings(){
        try {
            $allBookings = Booking::all();
            return response()->json(['data'=> $allBookings],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }


    function getAllBookingsByEvent($id) {
        try {
            $event = Event::find($id);
    
            if (!$event) {
                return response()->json(['error' => 'Event not found'], 404);
            }
    
            // Load bookings with fields relationship
            $bookings = Booking::where('event_id', $id)->with('field')->get();
    
            return response()->json(['data' => $bookings], 200);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }
    

    function createBooking(){

        try {
                
        $validator = Validator::make(request()->all(), [
            'price' => 'required|max:23',
            'start' => 'required',
            'end' => 'required',

            'eventId' => 'required',
            'fieldId' => 'required',




        ],$messages = [
            'required' => 'el campo  :attribute es obligatorio',
            'name.max' => 'el campo :attribute es demsaiado largo el maximo es :max',
            'place.max' => 'el campo :attribute es demsaiado largo el maximo es :max',


        ]);
        if ($validator->fails()) {  
            return response()->json(['errors'=> $validator->errors()],401);

        }

        

        
            

        $booking = new Booking();
        $booking->price = request()->price;
        $booking->start = request()->start;
        $booking->end = request()->start;
        $booking->event_id = request()->eventId;

        $booking->field_id = request()->fieldId;



        $booking->save();

        if(isset(request()->sports)){

            $sports = explode(',',request()->sports);

            foreach ( $sports     as $sportName) {
                $sport = Sport::where('name', $sportName)->first();

                if ($sport) {
                    $field->sports()->attach($sport->id);
                }
            }

        }           
            return response()->json(['data'=> request()->all()],201);



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
    public function store(StoreBookingRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
