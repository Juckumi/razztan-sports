import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";
import styled from "styled-components";
import { useGetEventsAndOccurencesCalendar } from "./useGetEventsAndOccurencesCalendar";
import Spinner from "../../ui/Spinner";
import { useGetOccurrencesById } from "../events/event/useGetOccurrencesById";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledCalendar = styled.div`
    .fc-button {
        background-color: var(--color-brand-green-100);
        color: var(--color-brand-bone-300);
        border-color: var(--color-brand-bone-300);
    }

    .fc-button:hover {
        background-color: var(--color-brand-green-500);
    }
    .fc-button.fc-button-active,
    .fc .fc-button-primary:not(:disabled).fc-button-active {
        background-color: var(--color-brand-green-500);
    }

    width: 30rem;
    height: 30rem;
    color: var(--color-brand-green-100);

    @media (max-width: 519px) {
        width: 20rem;
        height: 20rem;
    }
`;

function Calendar() {
    const { events, occurrences } = useGetEventsAndOccurencesCalendar();
    const navigate = useNavigate();
    const handleEventClick = (info) => {
        const event = info.event.extendedProps;
        console.log(event);
        if (event.bannerPhotoUrl) {
            requestAnimationFrame(() => {
                navigate(`/event/${event.slug}`);
            });
        } else if (event.occurencePhotoUrl) {
            requestAnimationFrame(() => {
                navigate(`/event/${event.event.slug}/#${event.slug}`);
            });
        } else {
            console.error("Event slug is missing");
        }
    };

    if (events.length === 0 || occurrences.length === 0) return <Spinner />;

    return (
        <StyledCalendar>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                }}
                footerToolbar={{
                    center: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                selectable={true}
                initialView="dayGridMonth"
                locale={esLocale}
                height={"100%"}
                eventClick={handleEventClick}
                events={[...events, ...occurrences]}
                dayMaxEventRows={2}
            />
        </StyledCalendar>
    );
}

function CalendarOccurrences({ eventId }) {
    const {
        occurrences,
        isLoading: isLoadingOccur,
        error: errorOccur,
    } = useGetOccurrencesById(eventId);

    if (isLoadingOccur) return <Spinner />;

    return (
        <StyledCalendar style={{ color: "var(--color-brand-green-100)" }}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                }}
                selectable={true}
                height={"auto"}
                contentHeight={"auto"}
                initialView="dayGridMonth"
                locale={esLocale}
                events={[
                    { title: "este es mi evento", start: new Date().now() },
                ]}
                eventColor={"var(--color-brand-green-500)"}
                dayMaxEventRows={3}
            />
        </StyledCalendar>
    );
}

Calendar.Occurrences = CalendarOccurrences;

export default Calendar;
