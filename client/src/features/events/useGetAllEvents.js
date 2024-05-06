import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/eventApi";

function useGetAllEvents() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);


    useEffect(() => {
        async function fetchData(){
            try{
                setIsLoading(true)
                const events = await getAllEvents({limit,page});

                setEvents(events)
            }catch(err){
                setError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData();
        console.log("🚀 => useGetAllEvents => events:", events)
        
    }, [page,limit]);


    return {events,isLoading,error,setPage,page,limit}
}

export default useGetAllEvents
