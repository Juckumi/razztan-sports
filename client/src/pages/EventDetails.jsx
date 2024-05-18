import { useGetEventBySlug } from "../features/events/event/useGetEventBySlug";
import styled from "styled-components";
import { useContext, useLayoutEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Icon } from "../features/events/EventsCard";
import Spinner from "../ui/Spinner"
import Occurrence from "../features/events/event/Occurrence";
import { LuCalendarClock,LuCalendar   } from "react-icons/lu";
import StyledIcon from "../ui/StyledIcon";
import { formatDate } from "../utils/dateFormatter";
import DateSpan from "../ui/DateSpan";

const Img = styled.img`
    width: 100%;

`
const DivImg = styled.div`
  position: relative;
  width: 100vw;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height:  18rem;
  h1{
    position: absolute;
    font-size: 5rem;
    margin: 1rem 0;
  }

;

`

const EventBody = styled.div`
display: flex;
margin: 2rem 1rem;
`

const SideBody = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

`
const Description = styled.div`
  flex: 3;
  word-break: break-all;
  hyphens: manual;

`
const SportsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  align-items: center;
  background-color: var(--color-brand-green-500);
  color: var(--color-brand-bone-300);
  *{
    font-size: 1.5rem;
    margin: 0.5rem;
  }
  && > *{
    cursor: pointer;
    &:hover:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: 5px;
            left: 0;
            transform: scaleX(1);
            background: var(--color-brand-bone-300);
            transform-origin: bottom left;
            transition: transform 0.5s ease-out;
        }
        
            position: relative;
            transition: transform 0.5s ease-out;
        
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: -15px;
            left: 0;
            transform: scaleX(0);
            background: var(--color-brand-bone-300);
            transform-origin: bottom right;
        }
  }
  
  

`

function EventDetails() {
    const {setThemeMode} = useContext(AppContext);
    useLayoutEffect(() => {
        setThemeMode('event');
    
        return () => {
          setThemeMode('');
        };
      }, [setThemeMode]);  
    
    const {event,isLoading,error} = useGetEventBySlug();



    


    if(isLoading) return <Spinner />
    return (
      <>
        <DivImg>
            <Img src={`https://picsum.photos/300/100?random=${event.id}`} />
            <h1>{event.title}</h1>
        </DivImg>
        <SportsContainer>
          {event?.sports?.map((sport)=> 
                    <StyledIcon key={Math.random()} > <Icon  sportName={sport.name}></Icon>  </StyledIcon>

          )}
        </SportsContainer>
        <EventBody>
          
          <SideBody>
            <StyledIcon>
              <LuCalendar /> <DateSpan>{formatDate(new Date(event.start))}</DateSpan>
            </StyledIcon>
            <StyledIcon>
              <LuCalendarClock /> <DateSpan> {formatDate(new Date(event.end))}</DateSpan>
            </StyledIcon>
          
          </SideBody>
          <Description>
              {event.description}
          </Description>


          <SideBody>
          </SideBody>
        </EventBody>
        <Occurrence eventId={event?.id} />
      </>
    )
}

export default EventDetails
