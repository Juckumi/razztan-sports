import styled from "styled-components"

const Img = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    object-fit: fill;

`;
const Div = styled.div`
    display:flex;
    align-items: center;
    gap: 3rem;
    padding: 1rem 0.5rem;
    background-color: ${(prop) => prop.color};
`

function ChatRow({count,chat,setOpenChat}) {
    const bgColor = (count+1)%2 === 0 ? 'var(--color-grey-200)':'var(--color-grey-100)'
    const handleOpenChat = () => {
      setOpenChat(chat.id);
    }
    return (
        <Div color={bgColor} onClick={handleOpenChat} >
            <Img src='/EVENT.png' alt='foto usuario' />
            <div style={{color:'var(--color-white)'}}>
              {chat.name}
            </div>
        </Div>
    )
}

export default ChatRow
