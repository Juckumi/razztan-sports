import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // a plugin!
import timeGridPuglin from '@fullcalendar/timegrid'
import esLocale from '@fullcalendar/core/locales/es';
import styled from 'styled-components';
import { useGetEventsAndOccurencesCalendar } from './useGetEventsAndOccurencesCalendar';
import Spinner from '../../ui/Spinner';
import { useGetOccurrencesById } from '../events/event/useGetOccurrencesById';
import { useEffect } from 'react';


const StyledCalendar = styled.div`



.fc-button {
    background-color: var(--color-brand-green-100); /* Cambia el color de fondo de los botones */
    color: var(--color-brand-bone-300); /* Cambia el color del texto de los botones */
    border-color: var(--color-brand-bone-300); /* Cambia el color del borde de los botones */
  }

  .fc-button:hover {
    background-color: var(--color-brand-green-500); /* Cambia el color de fondo al pasar el mouse sobre los botones */
  }
  .fc-button.fc-button-active,.fc .fc-button-primary:not(:disabled).fc-button-active {
    background-color: var(--color-brand-green-500); /* Cambia el color de fondo del botón seleccionado */
  }
  `



function Calendar() {
    const date = new Date();
    const {events,occurrences} = useGetEventsAndOccurencesCalendar();

    console.log("🚀 => Calendar => occurrences:", occurrences)
    console.log("🚀 => Calendar => events:", events)
    if(events.length === 0 || !occurrences.length === 0) return <Spinner />;
  
    
    return (
        <StyledCalendar style={{width:'30rem',height:'30rem',color:'var(--color-brand-green-100)'}}>
                <FullCalendar
                    plugins={[ dayGridPlugin ,interactionPlugin,timeGridPuglin]}
                    headerToolbar={{
                        left: 'prev',
                        center: 'title',
                        right:'next'
                    }}
                    footerToolbar={{
                        center: 'dayGridMonth,timeGridWeek,timeGridDay'            
                    }}
                    selectable={true}
                    initialView="dayGridMonth"
                    locale={esLocale}
                    height={'100%'}
                    events={events}
                    dayMaxEventRows={3}
                />
        </StyledCalendar>
    )
}

 function CalendarOccurences({eventId}) {
  const {occurrences,isLoading:isLoadingOcccur,error:errorOccur} = useGetOccurrencesById(eventId);
 
  if(isLoadingOcccur) return <Spinner />;

  
  return (
      <StyledCalendar style={{color:'var(--color-brand-green-100)'}}>
              <FullCalendar
                  plugins={[ dayGridPlugin ,interactionPlugin,timeGridPuglin]}
                  headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right:'next'
                }}
                  selectable={true}

                  height={'auto'}
                  contentHeight={'auto'}
                  initialView="dayGridMonth"
                  locale={esLocale}
                  events={occurrences}
                  eventColor={'var(--color-brand-green-500)'}
                  dayMaxEventRows={3}
              />
      </StyledCalendar>
  )
}

Calendar.Occurrences = CalendarOccurences;

export default Calendar