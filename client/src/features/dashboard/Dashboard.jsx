import styled from "styled-components";
import { useGetAllEvents } from "../events/useGetAllEvents";
import InvitesRow from "./EventRow";
import { useEffect } from "react";

const StyledDashboardArticle = styled.article`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: fit-content;
`;
const InvitesContainer = styled.article`
    width: fit-content;
    overflow-x: auto;
    overflow-y: auto;
    height: 20rem;
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
                <h1 style={{ fontSize: "2rem" }}>Invitaciones & solicitudes</h1>
                <InvitesContainer>
                    {events?.data?.map((event) => (
                        <InvitesRow key={event.id} invites={event} />
                    ))}
                </InvitesContainer>
            </StyledEvents>
            <div></div>
            <div></div>
        </StyledDashboardArticle>
    );
}

export default Dashboard;
