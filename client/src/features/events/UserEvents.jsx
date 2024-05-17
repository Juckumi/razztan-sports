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
    const {events,isLoading,error,setPage,limit} = useGetAllEvents();

    if(isLoading) return <Spinner />
    if(error) return  <div>Algo ha ido mal {error}</div>
    return (
        <>
        <StyledTable>
            { !isLoading && events?.data?.map((event)=>
                <EventsCard  event={event} key={event.id}  />
            )}
        </StyledTable>
        <Pagination page={events?.paginate?.page} totalPages={Math.round(events?.paginate?.total/limit)} setPage={setPage} />

        </>
    )
}

export default UserEvents
