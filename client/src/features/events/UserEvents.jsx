import styled from "styled-components"
import EventsCard from "./EventsCard"
import {useGetAllEvents} from "./useGetAllEvents"
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

const StyledTable = styled.div`
    width:100%;
    padding: 2rem 10%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: auto;
    
    grid-gap:10px;
`

function UserEvents() {
    const userEvents = [];
    return (
        <>
        {userEvents > 0 ?
                <StyledTable>
                    {/* { !isLoading && events?.data?.map((event)=>
                        <EventsCard  event={event} key={event.id}  />
                    )} */}
                </StyledTable>

                : 
                <>
                        <h1>No tienes eventos ahora mismo disponibles</h1>
                </>
            
            }
        </>
    )
}

export default UserEvents
