import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/eventApi";
import { getAllOccurences } from "../../api/occurrencesApi";

export function useGetEventsAndOccurencesCalendar() {
    const [events, setEvents] = useState([]);
    const [occurrences, setOccurrences] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchData(){
            try{
                setIsLoading(true)
                const events = await getAllEvents();
                const occurrences = await getAllOccurences();

                setOccurrences(occurrences)
                setEvents(events)
            }catch(err){
                setError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData();
        
    }, []);


    return {events,occurrences,isLoading,error}
}

