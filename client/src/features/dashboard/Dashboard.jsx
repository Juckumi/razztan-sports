import styled from "styled-components";
import { useGetAllEvents } from "../events/useGetAllEvents";
import InvitesRow from "./EventRow";
import { useEffect } from "react";
import { useInbox } from "./useInbox";
import Spinner from "../../ui/Spinner";

const StyledDashboardArticle = styled.article`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: fit-content;
`;
const InvitesContainer = styled.article`
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
    height: 20rem;
    background-color: var(--color-brand-bone-300);
    box-shadow: 10px 10px 10px var(--color-brand-bone-400);
`;
const StyledEvents = styled.div`
    grid-column: 1 /-1;
`;

function Dashboard() {
    const { invitations, isLoading } = useInbox();

    if (isLoading) return <Spinner />;
    return (
        <StyledDashboardArticle>
            <StyledEvents>
                <h1 style={{ fontSize: "2rem" }}>Invitaciones & solicitudes</h1>
                {!isLoading ? (
                    <InvitesContainer>
                        {invitations?.length > 0 ? (
                            <>
                                {invitations?.map((invitation) => (
                                    <InvitesRow
                                        key={invitation.id}
                                        invites={invitation}
                                    />
                                ))}
                            </>
                        ) : (
                            <h1 style={{ textAlign: "center" }}>
                                {" "}
                                Esto esta un poco vacio :({" "}
                            </h1>
                        )}
                    </InvitesContainer>
                ) : (
                    <Spinner />
                )}
            </StyledEvents>
            <div></div>
            <div></div>
        </StyledDashboardArticle>
    );
}

export default Dashboard;
