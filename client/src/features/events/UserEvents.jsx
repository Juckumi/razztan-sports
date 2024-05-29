import EventsCard from "./EventsCard";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { Outlet, useNavigate } from "react-router";
import { useGetEventsByUser } from "./useGetEventsByUser";
import styled from "styled-components";

const StyledTable = styled.div`
    width: 100%;
    padding: 2rem 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    grid-gap: 10px;
    @media (max-width: 1250px) {
        grid-template-columns: 1fr;
    }
`;
const StyledEmptyDiv = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
        margin: 1rem;
    }
`;

function UserEvents() {
    const navigate = useNavigate();
    const { events, isLoading } = useGetEventsByUser();
    return (
        <>
            {!isLoading ? (
                <>
                    {events.length > 0 ? (
                        <>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexFlow: "column",
                                    padding: "2rem",
                                }}
                            >
                                <h1>¡Crea un nuevo evento!</h1>
                                <Button.Animated
                                    $rounded
                                    onClick={() => navigate("crear-evento")}
                                >
                                    +
                                </Button.Animated>
                            </div>
                            <StyledTable>
                                {!isLoading &&
                                    events?.map((event) => (
                                        <EventsCard
                                            event={event}
                                            key={event.id}
                                        />
                                    ))}
                            </StyledTable>
                        </>
                    ) : (
                        <StyledEmptyDiv>
                            <div>
                                <h1>No hay nada por aqui aún</h1>
                                <h3>
                                    Empieza a crear dale al boton y comencemos
                                </h3>
                            </div>

                            <Button.Animated
                                $rounded
                                onClick={() => navigate("crear-evento")}
                            >
                                +
                            </Button.Animated>
                        </StyledEmptyDiv>
                    )}
                    <Outlet />
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
}

export default UserEvents;
