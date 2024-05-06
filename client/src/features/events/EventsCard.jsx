import styled from "styled-components"

const StyledEventCard = styled.div`
    height: 12rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    overflow: hidden;
`

const StyledGrid = styled.div`
    width:100%;
    height: 9rem;
    display:grid;
    grid-template-columns: 0.4fr 1fr;
    grid-template-rows: 1fr;
`
const EventName = styled.h2`
    background: var(--color-brand-green-500);
    color: var(--color-white);
    text-align: left;
    padding: 0.7rem 1rem;
`
const Img = styled.img`

    width: 100%;
    height: 100%;
    transition: 1s transform;
    &&:hover{
        transform: scale(1.2);
    }
`
const StyledDivImg = styled.div`
    position: relative;
    overflow: hidden;
    width: 8rem;
    height: 8rem;
    border-radius: var(--b-radius-lg);

`


function EventsCard({event}) {


    return (
        <StyledEventCard>
            <EventName> {event.name} </EventName>
            <StyledGrid>
                <div>
                    dsadsa
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <StyledDivImg>  
                    <Img src='/EVENT.png' />
                </StyledDivImg>
                </div>

            </StyledGrid>
        </StyledEventCard>
    )
}

export default EventsCard
