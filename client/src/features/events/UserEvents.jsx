import styled, { keyframes } from "styled-components";
import EventsCard from "./EventsCard";
import { useGetAllEvents } from "./useGetAllEvents";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { Outlet, useNavigate } from "react-router";
import { useGetEventsByUser } from "./useGetEventsByUser";

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
`;

const StyledTable = styled.div`
    width: 100%;
    padding: 2rem 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    grid-gap: 10px;
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
const ButtonAnimated = styled(Button)`
    animation: ${SpinAnimation} 4s ease-in-out infinite;
    font-size: 2rem;
`;
function UserEvents() {
    const navigate = useNavigate();
    const { events, isLoading } = useGetEventsByUser();
    console.log("🚀 => UserEvents => events:", events);
    return (
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
                        <ButtonAnimated
                            $rounded
                            onClick={() => navigate("crear-evento")}
                        >
                            +
                        </ButtonAnimated>
                    </div>
                    <StyledTable>
                        {!isLoading &&
                            events?.map((event) => (
                                <EventsCard event={event} key={event.id} />
                            ))}
                    </StyledTable>
                </>
            ) : (
                <StyledEmptyDiv>
                    <div>
                        <h1>No hay nada por aqui aún</h1>
                        <h3>Empieza a crear dale al boton y comencemos</h3>
                    </div>

                    <ButtonAnimated
                        $rounded
                        onClick={() => navigate("crear-evento")}
                    >
                        +
                    </ButtonAnimated>
                </StyledEmptyDiv>
            )}
            <Outlet />
        </>
    );
}

export default UserEvents;
