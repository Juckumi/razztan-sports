import styled from "styled-components"
import ChatList from "../features/chat/ChatList"
import { useState } from "react";
import { useGetAllChatMessages } from "../features/chat/useGetAllChatMessages";

const StyledGrid = styled.div`
position: relative;
display: grid;
grid-template-columns: 1.2fr 4fr;
grid-auto-rows: 1fr;
max-height:100.5vh;
`


const ChatPanel = styled.div`
display:flex;
flex-direction: column;
position: relative;
background-color: var(--color-brand-bone-300);
height:70vh;
padding: 1rem 0.3rem;
`

const Message = styled.div`
    position: relative;
    border-radius: 0.5rem;
    background-color:  var(--color-grey-100);
    color:var(--color-white);
    white-space: wrap;
    max-width: 60%;
    padding: 0.4rem;
`;


function ChatDashboard() {
    const [openChat, setOpenChat] = useState(4);
    const {messages,isLoading} = useGetAllChatMessages(openChat);
    const userId = 14;
    
    return (
        <StyledGrid>
            <ChatList setOpenChat={setOpenChat} />
            <ChatPanel>
            {messages.map((message)=>
                <Message style={{alignSelf:(userId === message?.user_id)? 'flex-end' : 'flex-start'}} key={message.id}>{message.text}</Message>
            )}
            </ChatPanel>
        </StyledGrid>
    )
}

export default ChatDashboard
