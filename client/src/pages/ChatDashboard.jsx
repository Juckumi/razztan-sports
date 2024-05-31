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
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";

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
    margin: 0.5rem;
    border-radius: 1rem;
    color: var(--color-white);
    white-space: wrap;
    padding: 0.4rem;
    display: grid;
    grid-template-columns: 1fr 0.06fr;
    align-items: center;
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
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    align-items: center;
    gap: 5rem;

    position: relative;
    background-color: var(--color-grey-100);
    color: var(--color-white);
    white-space: wrap;
    min-width: 100%;
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
    width: 4rem;
    height: 4rem;
    object-fit: fill;
`;

function ChatDashboard() {
    const [openChat, setOpenChat] = useState(4);
    const [isOpen, setisOpen] = useState(true);

    const { postMessage, isLoading: isCreatingMessage } = useCreateMessage();

    const { chats, isLoading } = useGetAllUserChats();

    const openChatInfo = chats.filter((chat) => chat.id == openChat)[0];
    console.log(openChatInfo, openChatInfo);

    const [formData, setFormData] = useState({
        text: "",
        userId: 1, //TODO: id estatica
    });

    const {
        messages,
        isLoading: isLoadingMessages,
        refecht,
    } = useGetAllChatMessages(openChat);
    console.log(messages, "messages");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.text !== "") {
            const res = await postMessage({
                ...formData,
                chatId: openChatInfo.id,
            });
            if (res?.status === 201) {
                toast.success("se ha creado la occurencia con exito");
                refecht();
                setFormData({ ...formData, text: "" });
            } else {
                toast.error("Algo ha fallado al crear mensaje");
            }
        }
    };

    return (
        <StyledGrid>
            <ChatList
                isLoading={isLoading}
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
                    {!isLoading ? (
                        <>
                            {" "}
                            <h1>{openChatInfo?.name}</h1>
                        </>
                    ) : (
                        <></>
                    )}
                    <picture>
                        <source
                            srcSet={openChatInfo?.event?.bannerPhotoUrl}
                            alt="foto usuario"
                        />
                        <Img src="/EVENT.png" alt="foto usuario" />
                    </picture>{" "}
                </ForumInfo>
                <ChatContainer>
                    {!isLoadingMessages && !isCreatingMessage ? (
                        messages.map((message) => (
                            <Message key={message.id}>
                                <div>{message.text}</div>
                                <picture>
                                    <source
                                        srcSet={
                                            openChatInfo?.event?.bannerPhotoUrl
                                        }
                                        alt="foto usuario"
                                    />
                                    <Img src="/EVENT.png" alt="foto usuario" />
                                </picture>
                            </Message>
                        ))
                    ) : (
                        <Spinner />
                    )}
                </ChatContainer>
                <MessagesSend onSubmit={handleSubmit}>
                    <InputForm
                        formData={formData}
                        setFormData={setFormData}
                        name="text"
                        initialValue={formData.text}
                        disabled={isCreatingMessage}
                    />
                    <div>
                        <Button
                            style={{
                                backgroundColor: "var(--color-brand-bone-300)",
                                color: "var(--color-grey-100)",
                                padding: "0.5rem",
                            }}
                            disabled={isCreatingMessage}
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
