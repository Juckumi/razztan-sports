<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;

class EventController extends Controller
{
    function getAllPaginatedEvents(){
        try {
            $limit = request()->input('limit', 6);
            $page = request()->input('page', 1);
            $searchQuery = request()->input('search', 'Uriel'); // Obtener el parámetro de búsqueda
            
            $paginateEvents = Event::with('sports')
                ->where('title', 'LIKE', "%{$searchQuery}%") // Aplicar la condición de búsqueda
                ->paginate($limit, ['*'], 'page', $page);
            

        
            // Convertir la colección de deportes relacionados en objetos JSON
            $formattedEvents = $paginateEvents->map(function ($event) {
                $event->sports = $event->sports->map(function ($sport) {
                    return [
                        'id' => $sport->id,
                        'name' => $sport->name,
                        'created_at' => $sport->created_at,
                        'updated_at' => $sport->updated_at,
                    ];
                });
                return $event;
            });


            return response()->json(['data'=> $formattedEvents,'paginate' => ['limit'=>intval($limit),'page'=>intval($page),'total'=>$paginateEvents->total()]],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }

    function getAllEvents(){
        try {

            $AllEvents = Event::all();
            return response()->json(['data'=> $AllEvents],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }




    function getEventById($id){
        try {
            $event = Event::find($id);
            return response()->json(['data'=> $event],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getEventBySlug($slug){
        try {
            $event = Event::where('slug','=',$slug)->get()[0];
            $event->sports = $event->sports->map(function ($sport) {
                return [
                    'id' => $sport->id,
                    'name' => $sport->name,
                    'created_at' => $sport->created_at,
                    'updated_at' => $sport->updated_at,
                ];
            });
            return response()->json(['data'=> $event],201);
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
    public function store(StoreEventRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }
}
