<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\User;

use App\Http\Requests\StoreInvitationRequest;
use App\Http\Requests\UpdateInvitationRequest;

use Illuminate\Support\Facades\Validator;


class InvitationController extends Controller
{
    function getAllInvitations(){
        try {
            $allInvitations = Invitation::all();
            return response()->json(['data'=> $allInvitations],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }

    function getAllInvitationsByUserId($id){
        try {
            $invitations = User::find($id)->invitations()->with('event')->get();
            return response()->json(['data'=> $invitations],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function createInvitation(){

        try {


                
        $validator = Validator::make(request()->all(), [
            'title' => 'required|max:23',
            'text' => 'required|max:255',
            'userIds' => 'required',
            'eventId' => 'required'
        ],$messages = [
            'required' => 'el campo  :attribute es obligatorio',
            'title.max' => 'el campo :attribute es demsaiado largo el maximo es :max',
        ]);
        if ($validator->fails()) {  
            return response()->json(['errors'=> $validator->errors()],401);
        }   
            $invitation = new Invitation();
            $invitation->title = request()->title;
            $invitation->text = request()->text;
            $invitation->status = 'pendiente';

            $invitation->event_id = request()->eventId ;
            $invitation->save();
            if(request()->userIds){
                
                foreach (request()->userIds as $userId) {
                    $invitation->users()->attach($userId);
                }
            }
            return response()->json(['data'=> request()->all()],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
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
    public function store(StoreInvitationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Invitation $invitation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invitation $invitation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvitationRequest $request, Invitation $invitation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invitation $invitation)
    {
        //
    }
}
