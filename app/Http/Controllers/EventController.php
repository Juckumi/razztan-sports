<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Sport;
use App\Models\User;


use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;

class EventController extends Controller
{
    function getAllPaginatedEvents(){
        try {
            $limit = request()->input('limit', 6);
            $page = request()->input('page', 1);
            $filter = request()->input('filter', '[]');
            
            $filter = json_decode($filter);
            



            $searchQuery = request()->input('search', ''); 
            
            $paginateEvents = Event::with('sports')->orderBy('created_at', 'desc')

                ->where('title', 'LIKE', "%{$searchQuery}%")
                ->when(!empty($filter), function($query) use ($filter) {
                    $query->whereHas('sports', function($query) use ($filter) {
                        $query->whereIn('name', $filter);
                    });
                })
                ->paginate($limit, ['*'], 'page', $page);

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



            return response()->json(['data'=> $formattedEvents,'paginate' => ['limit'=>intval($limit),'page'=>intval($page),'total'=>$paginateEvents->total(), 'filter' => $filter]],201);
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

    function getEventByUserId($id){
        try {
            $events = User::find($id)->ownedEvents;

            $eventsWithSport = $events->map(function ($event) {
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
            
            return response()->json(['data'=> $eventsWithSport],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }

    function createEvent(){
        try {


        $event = new Event();

        $event->title = request()->title;
        $event->start = request()->start;
        $event->end = request()->end;
        $event->description = request()->description;
        $event->price = request()->price;

        $event->catering = request()->catering == 'si';
        $event->user_id = request()->userId ;


        $event->save();

        $eventId = $event->id;

        foreach (request()->sports as $sportName) {
            $sport = Sport::where('name', $sportName)->first();

            if ($sport) {
                $event->sports()->attach($sport->id);
            }
        }

            
            
            return response()->json(['data'=> request()->all()],201);



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
