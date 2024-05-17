import Pagination from "../../ui/Pagination";

import styled from "styled-components"
import EventsCard from "./EventsCard"
import {useGetAllEvents} from "./useGetAllEvents"
import Spinner from "../../ui/Spinner";
import Searcher from "../../ui/Searcher";
import { useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../ui/Button";

const ClearButton = styled(Button)`
    padding: 0.3rem;
    display: flex;
    align-items: center;
    *{
        margin: 0;
        padding: 0;
    }
`

const StyledTable = styled.div`
    width:100%;
    padding: 2rem 10%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-rows: auto;
    
    grid-gap:10px;
`
const SearcherContainer = styled.div`
    background-color: var(--color-brand-bone-300);
    display: flex;
    justify-content: center;
    align-items: center;
`

function AllEvents() {
    const {events,isLoading,error,setPage,limit,setSearch} = useGetAllEvents();
    console.log("🚀 => AllEvents => events:", events)
    const ref = useRef();
    let searchTimeout;
    const handleSearch = (e)=>{
        const searchValue = e.target.value;

        if(searchValue.length > 2 || searchValue.length === 0  ){
            clearTimeout(searchTimeout); 

            searchTimeout = setTimeout(() => {
                setSearch(searchValue);
            }, 500);         }
            

    }
    const handleReset = ()=>{
        ref.current.value = '';
        setSearch('')
    }

    if(error) return  <div>Algo ha ido mal {error}</div>
    return (
        <>
        <SearcherContainer>
            <Searcher type='text' onChange={handleSearch} ref={ref}/> <ClearButton onClick={handleReset} > <MdOutlineCancel  /> </ClearButton>
        </SearcherContainer>
           { events?.data?.length > 0  && events?.paginate ?  <>
                { !isLoading ?
                                <>
                                <StyledTable>
                                        { !isLoading && events?.data?.map((event)=>
                                            <EventsCard  event={event} key={event.slug} />
                                        )}
                                    </StyledTable>
                                    <Pagination page={events?.paginate?.page} totalPages={Math.ceil(events?.paginate?.total/limit)} setPage={setPage} />
                                    </>:
                                    <Spinner />
                    }
            </>:
            'No hay resultados de tu busqueda'
            }
        </>     
    )
}

export default AllEvents
