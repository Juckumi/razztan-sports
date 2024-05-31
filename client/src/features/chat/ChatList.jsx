import styled from "styled-components";
import ChatRow from "./ChatRow";
import { useGetAllUserChats } from "./useGetAllUserChats";
import Button from "../../ui/Button";

const StyledChatList = styled.div`
    position: relative;
    background-color: var(--color-grey-100);
    height: 77vh;
    width: 0px;

    transition: 0.5s ease-in-out;

    ${(props) => props.$isOpen == true && "width: 20%;"}

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: var(--color-gray-200);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--color-brand-bone-100);
        border-radius: 5px;
    }
`;

function ChatList({ setOpenChat, isOpen, openChat, chats }) {
    console.log(isOpen);

    console.log(chats, "abierto");

    return (
        <StyledChatList $isOpen={isOpen}>
            <div style={{ overflowY: "auto", maxHeight: "100%" }}>
                {chats?.map((chat, index) => (
                    <ChatRow
                        key={chat.id}
                        setOpenChat={setOpenChat}
                        chat={chat}
                        count={index}
                        openChat={openChat}
                    />
                ))}
            </div>
        </StyledChatList>
    );
}

export default ChatList;
