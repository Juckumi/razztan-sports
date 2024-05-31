import styled from "styled-components";

const Img = styled.img`
    border-radius: 50%;
    max-width: 4rem;
    max-height: 4rem;
    min-width: 4rem;
    min-height: 4rem;
    object-fit: fill;
`;
const Div = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    gap: 3rem;
    padding: 1rem 0.5rem;
    background-color: ${(prop) => prop.color};
    transition: 0.2s ease-in-out;
    ${(props) =>
        props.$openChat === true &&
        "background-color:var(--color-brand-green-500);"}
`;

function ChatRow({ count, chat, setOpenChat, openChat }) {
    const bgColor =
        (count + 1) % 2 === 0
            ? "var(--color-grey-200)"
            : "var(--color-grey-100)";
    const handleOpenChat = () => {
        setOpenChat(chat.id);
    };
    return (
        <Div
            color={bgColor}
            onClick={handleOpenChat}
            $openChat={openChat === chat.id}
        >
            <picture>
                <source srcSet={chat.event.bannerPhotoUrl} alt="foto usuario" />
                <Img src="/EVENT.png" alt="foto usuario" />
            </picture>
            <div
                style={{
                    color: "var(--color-white)",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}
            >
                {chat.name}
            </div>
        </Div>
    );
}

export default ChatRow;
