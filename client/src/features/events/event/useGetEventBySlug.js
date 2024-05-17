import { useEffect, useState } from "react";
import { getEventBySlug } from "../../../api/eventApi";
import { useParams } from "react-router";

export function useGetEventBySlug(){
    const [event, setEvent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {eventSlug} = useParams();



    useEffect(() => {
        async function fetchData(){
            try{
                setIsLoading(true)
                const events = await getEventBySlug(eventSlug);
                console.log("🚀 => fetchData => events:", events)

                setEvent(events)
            }catch(err){
                setError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData();
        
    }, [])




    return {event,isLoading,error}

}