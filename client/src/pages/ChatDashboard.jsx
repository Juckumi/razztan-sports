import styled from "styled-components"

const StyledGrid = styled.div`
display: grid;
grid-template-columns: 1.2fr 4fr;
grid-auto-rows: 1fr;
height:100.5vh;
`

const ChatList = styled.div`
background-color: var(--color-grey-100);

`
const ChatPanel = styled.div`
background-color: var(--color-brand-bone-300);


`


function ChatDashboard() {
    return (
        <StyledGrid>
            <ChatList>
            list
            </ChatList>
            <ChatPanel>
            dsadsadsa
            </ChatPanel>
        </StyledGrid>
    )
}

export default ChatDashboard
