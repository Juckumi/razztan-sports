import styled from "styled-components";
import ChatList from "../features/chat/ChatList";
import { useState } from "react";
import { useGetAllChatMessages } from "../features/chat/useGetAllChatMessages";
import Button from "../ui/Button";
import { FiMessageSquare } from "react-icons/fi";
import InputForm from "../ui/InputForm";
import { LuSendHorizonal } from "react-icons/lu";
import { useCreateMessage } from "../features/chat/useCreateMessage";
import { useGetAllUserChats } from "../features/chat/useGetAllUserChats";

const StyledGrid = styled.div`
    position: relative;
    width: 100%;
    display: flex;
`;

const ChatPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--color-brand-bone-300);
    overflow: auto;
    height: 77vh;
    flex: 2;

    && > :last-child {
        overflow: auto;
    }
`;

const Message = styled.div`
    position: relative;
    background-color: var(--color-grey-200);
    color: var(--color-white);
    white-space: wrap;
    padding: 0.4rem;
`;

const ChatContainer = styled.div`
    position: relative;
    flex: 2;
    overflow: auto;
    height: 70rem;
    width: 100%;
`;

const MessagesSend = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-content: center;

    position: relative;
    background-color: var(--color-grey-100);
    color: var(--color-white);
    white-space: wrap;
    min-width: 100%;
    height: 4rem;
    * {
        font-size: 1.6rem;
    }
`;

const ForumInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-content: center;

    position: relative;
    background-color: var(--color-grey-100);
    color: var(--color-white);
    white-space: wrap;
    min-width: 100%;
    height: 4rem;
    * {
        font-size: 1.6rem;
    }
`;

const ShowChatButtom = styled(Button)`
    background-color: var(--color-brand-green-500);
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    overflow: visible;
    width: 6rem;
    height: 3rem;
    width: 3rem;
`;

const Img = styled.img`
    border-radius: 50%;
`;

function ChatDashboard() {
    const [openChat, setOpenChat] = useState(4);
    const [isOpen, setisOpen] = useState(false);

    const { postMessage, isLoading: isCreatingMessage } = useCreateMessage();

    const { chats, isLoading } = useGetAllUserChats();

    const openChatInfo = chats.filter((chat) => chat.id == openChat)[0];
    console.log(openChatInfo, openChatInfo);

    const [formData, setFormData] = useState({
        title: "",
        userId: 1, //TODO: id estatica
        ChatId: openChat,
    });

    const { messages } = useGetAllChatMessages(openChat);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log(openChat, "abierto");

    return (
        <StyledGrid>
            <ChatList
                isOpen={isOpen}
                setOpenChat={setOpenChat}
                openChat={openChat}
                chats={chats}
            />
            <ChatPanel>
                <ForumInfo>
                    <ShowChatButtom $rounded onClick={() => setisOpen(!isOpen)}>
                        <FiMessageSquare />
                    </ShowChatButtom>

                    <Img src={openChatInfo?.event?.bannerPhotoUrl} />
                </ForumInfo>
                <ChatContainer>
                    {messages.map((message) => (
                        <Message key={message.id}>{message.text}</Message>
                    ))}
                </ChatContainer>
                <MessagesSend onSubmit={handleSubmit}>
                    <InputForm />
                    <div>
                        <Button
                            style={{
                                backgroundColor: "var(--color-brand-bone-300)",
                                color: "var(--color-grey-100)",
                                padding: "0.5rem",
                            }}
                        >
                            <LuSendHorizonal />
                        </Button>
                    </div>
                </MessagesSend>
            </ChatPanel>
        </StyledGrid>
    );
}

export default ChatDashboard;
