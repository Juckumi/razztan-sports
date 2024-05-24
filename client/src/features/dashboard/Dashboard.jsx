import styled from "styled-components";
import { useGetAllEvents } from "../events/useGetAllEvents";
import EventsCard from "../events/EventsCard";
import EventRow from "./EventRow";
import { useEffect } from "react";

const StyledDashboardArticle = styled.article`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: fit-content;
`;
const EventsContainer = styled.article`
    display: grid;
    padding: 1rem 3rem 1rem 3rem;
    grid-template-columns: 1fr;
    grid-auto-rows: fit-content;
    grid-gap: 0.5rem;
    width: fit-content;
    max-height: 18rem;
    overflow-x: hidden;
    overflow-y: auto;
`;
const StyledEvents = styled.div`
    grid-column: 1 /-1;
`;

function Dashboard() {
    const { events, isLoading, error, setLimit } = useGetAllEvents();
    useEffect(() => {
        setLimit(3);
    }, []);

    if (!events) return "";
    return (
        <StyledDashboardArticle>
            <StyledEvents>
                <h1 style={{ fontSize: "2rem" }}> Eventos </h1>
                <EventsContainer>
                    {events?.data?.map((event) => (
                        <EventRow key={event.id} event={event} />
                    ))}
                </EventsContainer>
            </StyledEvents>
            <div>
                <h1 style={{ fontSize: "2rem" }}> Ahead Occurrences </h1>
            </div>
            <div></div>
            <div></div>
        </StyledDashboardArticle>
    );
}

export default Dashboard;
