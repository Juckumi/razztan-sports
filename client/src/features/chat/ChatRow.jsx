import styled from "styled-components";

const Img = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    object-fit: fill;
`;
const Div = styled.div`
    display: flex;
    align-items: center;
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
            <Img src="/EVENT.png" alt="foto usuario" />
            <div style={{ color: "var(--color-white)" }}>{chat.name}</div>
        </Div>
    );
}

export default ChatRow;
