<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\User;

use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;

class ChatController extends Controller
{

    function getAllChats(){
        try {
            $allchats= Chat::all();
            return response()->json(['data'=> $allchats],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getChatById($id){
        try {
            $chat = Chat::find($id);
            return response()->json(['data'=> $chat],201);
        } catch (\Throwable $th) {
            return response()->json(['error'=> $th->getMessage()],500);
        }
    }
    function getChatsByUserId($userId){
        try {
            $chats = User::find($userId)->chats;
            return response()->json(['data'=> $chats],201);
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
    public function store(StoreChatRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChatRequest $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }
}
