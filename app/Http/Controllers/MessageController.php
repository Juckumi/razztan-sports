<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Chat;
use App\Http\Requests\StoreMessageRequest;
use App\Http\Requests\UpdateMessageRequest;

use Illuminate\Support\Facades\Validator;


class MessageController extends Controller
{
    function getAllMessages(){
        try {
            $allMessage= Message::all();
            return response()->json(['data'=> $allMessage],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getMessageById($id){
        try {
            $message = Message::find($id);
            return response()->json(['data'=> $message],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getMessagesByChatId($chatId){
        try {
            $messages = Chat::find($chatId)->messages;
            return response()->json(['data'=> $messages],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }

    function createMessage(){

        try {


                
        $validator = Validator::make(request()->all(), [
            'text' => 'required|max:255',
            'userId' => 'required',
            'chatId' => 'required',

        ],$messages = [
            'required' => 'el campo  :attribute es obligatorio',
            'text.max' => 'el campo :attribute es demsaiado largo el maximo es :max',
        ]);
        if ($validator->fails()) {  
            return response()->json(['errors'=> $validator->errors()],401);
        }   
            $message = new Message();
            $message->text = request()->text;
            $message->user_id = request()->userId;
            $message->chat_id = request()->chatId;

            $message->save();
          
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
    public function store(StoreMessageRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */ 
    public function edit(Message $message)  
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMessageRequest $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}
