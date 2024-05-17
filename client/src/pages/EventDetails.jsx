import { useGetEventBySlug } from "../features/events/event/useGetEventBySlug";
import styled from "styled-components";
import { useContext, useLayoutEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Icon } from "../features/events/EventsCard";
import Spinner from "../ui/Spinner"
import Calendar from "../features/dashboard/Calendar";
import { useGetOccurrencesById } from "../features/events/event/useGetOccurrencesById";
import Occurrence from "../features/events/event/Occurrence";
import { LuCalendarClock } from "react-icons/lu";

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
  height:  15rem;
  h1{
    font-size: 5rem;
    margin: 3rem 0;
  }

;

`

const EventBody = styled.div`
display: flex;
margin: 1rem 1rem;
`

const SideBody = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;

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
    margin: 0.5rem;
  }

`
const EventOccurences = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: fit-content;
  color: var(--color-brand-bone-300);
  *{
    margin: 0.5rem;
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
            {/* <h1>{event.title}</h1> */}
            <Img src={`https://picsum.photos/300/100?random=${event.id}`} />
        </DivImg>
        <SportsContainer>
          {event?.sports?.map((sport)=> 
                    <span key={Math.random()} > <Icon  sportName={sport.name}></Icon>  </span>

          )}
        </SportsContainer>
        <EventBody>
          
          <SideBody>
          <LuCalendarClock />
          <LuCalendarClock />
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
