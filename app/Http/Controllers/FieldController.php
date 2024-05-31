<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Sport;

use App\Http\Requests\StoreFieldRequest;
use App\Http\Requests\UpdateFieldRequest;
use Illuminate\Support\Facades\Validator;


class FieldController extends Controller
{

    function getFieldById($id){
        try {
            $field = Field::find($id);
            return response()->json(['data'=> $field],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }

    function getAllPaginatedFields(){
        try {
            $limit = request()->input('limit', 6);
            $page = request()->input('page', 1);
            $filter = request()->input('filter', '[]');
            
            $filter = json_decode($filter);
            
            $searchQuery = request()->input('search', ''); 
            
            $paginateFields = Field::with('sports')->orderBy('created_at', 'desc')

                ->where('name', 'LIKE', "%{$searchQuery}%")
                ->when(!empty($filter), function($query) use ($filter) {
                    $query->whereHas('sports', function($query) use ($filter) {
                        $query->whereIn('name', $filter);
                    });
                })
                ->paginate($limit, ['*'], 'page', $page);

            $formattedFields = $paginateFields->map(function ($field) {
                $field->sports = $field->sports->map(function ($sport) {
                    return [
                        'id' => $sport->id,
                        'name' => $sport->name,
                        'created_at' => $sport->created_at,
                        'updated_at' => $sport->updated_at,
                    ];
                });
                return $field;
            });



            return response()->json(['data'=> $formattedFields,'paginate' => ['limit'=>intval($limit),'page'=>intval($page),'total'=>$paginateFields->total(), 'filter' => $filter]],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getAllFields(){
        try {
            $allFields = Field::all();
            return response()->json(['data'=> $allFields],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }


    function createField(){

        try {
                
        $validator = Validator::make(request()->all(), [
            'name' => 'required|max:23',
            'fieldPhotosUrl' => 'required',
            'sports' => 'required',
            'place' => 'required|max:30',
            'm2' => 'required|integer',
            'dailyPrice' => 'required',




        ],$messages = [
            'required' => 'el campo  :attribute es obligatorio',
            'name.max' => 'el campo :attribute es demsaiado largo el maximo es :max',
            'place.max' => 'el campo :attribute es demsaiado largo el maximo es :max',


        ]);
        if ($validator->fails()) {  
            return response()->json(['errors'=> $validator->errors()],401);

        }

            $imageName = time() . '-' . 'razztan-sports-field'.'.' . request()->fieldPhotosUrl->extension();
            request()->fieldPhotosUrl->move(base_path('client/dist/uploads/fieldPhotos'), $imageName);
            $bannerPhotoUrl = '/uploads/fieldPhotos/' . $imageName;

        
            

        $field = new Field();
        $field->name = request()->name;
        $field->fieldPhotosUrl = $bannerPhotoUrl;
        $field->place = request()->place;
        $field->m2 = request()->m2;
        $field->dailyPrice = request()->dailyPrice;


        $field->save();

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
    public function store(StoreFieldRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Field $field)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Field $field)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFieldRequest $request, Field $field)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Field $field)
    {
        //
    }
}
