import styled from "styled-components"
import { MdOutlineSportsBaseball ,MdOutlineSportsBasketball  ,MdOutlineSportsCricket ,MdOutlineSportsFootball} from "react-icons/md";
import { useNavigate } from "react-router";
import { formatDate } from "../../utils/dateFormatter";
import { LuCalendarClock } from "react-icons/lu";
import StyledIcon from "../../ui/StyledIcon";
import DateSpan from "../../ui/DateSpan";


const StyledEventCard = styled.div`
    height: 12rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    overflow: hidden;
    display: flex;
    cursor:pointer;
`

const StyledGrid = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
`
const EventName = styled.h2`
    display: flex;
    align-items: center;

    /* border : 5px solid ${(prop)=> prop.color}; */

    background: var(--color-brand-green-500);
    color: var(--color-white);
    text-align: left;
    padding: 0.7rem 1rem;
    gap:1rem;
    padding: 1rem;
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
    width: auto;
    height: 100%;
    border-radius: var(--b-radius-lg)  0 0 var(--b-radius-lg)  ;

`


export const Icon = ({sportName}) => {
    let icon= <p></p>;
    switch(sportName){
        case 'Futbol':
            icon = <StyledIcon>  <MdOutlineSportsFootball /> {sportName} </StyledIcon>
        break;
        case 'Baloncesto':
            icon =   <StyledIcon> <MdOutlineSportsBasketball  /> {sportName} </StyledIcon>
        break;
        case 'Polo':
            icon =   <StyledIcon> <MdOutlineSportsBaseball /> {sportName} </StyledIcon>
        break;
        case 'Tenis':
            icon =  <StyledIcon>   <MdOutlineSportsBaseball  /> {sportName} </StyledIcon>
        break;
        case 'Cricket':
            icon =   <StyledIcon>   <MdOutlineSportsCricket />  {sportName} </StyledIcon>
        break;
    }

    return icon;
}


function EventsCard({event}) {
    const navigate = useNavigate();

    return (
        <StyledEventCard onClick={()=> navigate(`/event/${event.slug}`)}>
              <StyledDivImg>  
                    <Img src={`https://picsum.photos/200?random=${event.id}`} />
                </StyledDivImg>
                <div style={{flex:'2',display:'flex',flexFlow:'column'}}>
                    <EventName color={event.backgroundColor}> {event.title} 
                    <div style={{width:'1rem',height:'1rem',backgroundColor:event.backgroundColor,borderRadius:'1rem'}}></div> </EventName>
                    <StyledGrid>
                        <div style={{padding:'1rem', display:'flex',gap:'1rem'}}>
                          
                                {event.sports.map((sport)=>
                                  <span key={Math.random()} > <Icon  sportName={sport.name}></Icon>  </span>
                                )}

                        </div>
                <div style={{display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
                    <DateSpan> <LuCalendarClock />  {formatDate(new Date(event.end))}</DateSpan>
                </div>

            </StyledGrid>
            </div>
        </StyledEventCard>
    )
}

export default EventsCard
