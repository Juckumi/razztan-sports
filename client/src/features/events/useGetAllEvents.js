import { useEffect, useState } from "react";
import { getAllPaginatedEvents } from "../../api/eventApi";

export function useGetAllEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [search, setSearch] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);




    useEffect(() => {
        async function fetchData(){
            try{
                setIsLoading(true)
                const events = await getAllPaginatedEvents({limit,page,search,selectedFilters});

                setEvents(events)
            }catch(err){
                setError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData();
        
    }, [page,limit,search,selectedFilters]);


    return {events,isLoading,error,setPage,page,limit,setLimit,setSearch,search,setSelectedFilters,selectedFilters}
}

