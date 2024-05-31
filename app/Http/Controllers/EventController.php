<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Sport;
use App\Models\User;


use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Str;



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
                ->where('isActive', '=', 1)
                ->where('status', '=', 'publico')
                ->where('status',['publico', 'revisado'])
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
                
        $validator = Validator::make(request()->all(), [
            'title' => 'required|max:23',
            'description' => 'required|max:255',
            'catering' => 'required|in:si,no',
            'publicStatus' => 'required|in:publico,privado,revisado',
            'eventsPhotosUrls' => 'required',
            'bannerPhotoUrl' => 'required',
            'sports' => 'required',
            'start' => 'required|date|before:end',
            'end' => 'required|date',
            'price' => 'integer|min:0',



        ],$messages = [
            'required' => 'el campo  :attribute es obligatorio',
            'title.max' => 'el campo :attribute es demsaiado largo el maximo es :max',
            'min' => 'El titulo es muy corto el menos son :min caracteres',
            'price' => 'El precio debe ser superior :min ',
            'start.before' => 'El inicio del evento debe ser anterior a su fin ',
            'in' => 'El :attribute tiene que ser las siguientes opciones: :values',
            'publicStatus' => 'El status del evento debe ser publico, privado y revisado',

        ]);
        if ($validator->fails()) {  
            return response()->json(['errors'=> $validator->errors()],401);

        }

            $imageName = time() . '-' . 'razztan-sports-banner-'.'.' . request()->bannerPhotoUrl->extension();
            request()->bannerPhotoUrl->move(base_path('client/public/uploads/eventsPhotos'), $imageName);
            $bannerPhotoUrl = '/uploads/eventsPhotos/' . $imageName;

        $eventsPhotosUrls = [];
        foreach (request()->eventsPhotosUrls as $index => $img) {

            $imageName = time() . '-' . $index . 'razztan-sports-event-'.'.' . $img->extension();
            $img->move(base_path('client/public/uploads/eventsPhotos'), $imageName);
            $eventsPhotosUrls[] = '/uploads/eventsPhotos/' . $imageName;

        }
        

        $event = new Event();
        $event->title = request()->title;
        $event->start = request()->start;
        $event->end = request()->end;
        $event->description = request()->description;
        $event->price = request()->price;
        $event->eventPhotosUrls = $eventsPhotosUrls;
        $event->bannerPhotoUrl = $bannerPhotoUrl;
        $event->status = request()->publicStatus;
        $event->isActive = true;



        $event->catering = request()->catering == 'si';
        $event->user_id = request()->userId ;
        $event->save();

        if(isset(request()->sports)){

            $sports = explode(',',request()->sports);
            
            foreach ( $sports  as $sportName) {
                $sport = Sport::where('name', $sportName)->first();

                if ($sport) {
                    $event->sports()->attach($sport->id);
                }
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
