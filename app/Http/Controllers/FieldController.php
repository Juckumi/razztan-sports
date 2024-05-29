<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Http\Requests\StoreFieldRequest;
use App\Http\Requests\UpdateFieldRequest;

class FieldController extends Controller
{

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
