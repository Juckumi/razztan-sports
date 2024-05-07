import styled from "styled-components"
import ChatRow from "./ChatRow"
import { useGetAllUserChats } from "./useGetAllUserChats";

const StyledChatList = styled.div`
background-color: var(--color-grey-100);
`

function ChatList({setOpenChat}) {
    const {chats,isLoading} = useGetAllUserChats();
    console.log(chats,'aaaaa')
    return (
        <StyledChatList>
              <h1 style={{color:'var(--color-grey-200)',textAlign:'center'}}> Tus Chats</h1>
                <div style={{overflowY:'auto',maxHeight:'90vh'}}>
                    {chats?.map((chat,index)=>
                    <ChatRow key={chat.id} setOpenChat={setOpenChat} chat={chat} count={index}/>
                    )}
                </div>    
        </StyledChatList>
    )
}

export default ChatList
