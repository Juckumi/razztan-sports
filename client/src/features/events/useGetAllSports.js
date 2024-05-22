import { useEffect, useState } from "react";
import { getAllSports } from "../../api/sportApi";

export function useGetAllSports() {
    const [sports, setSports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {
        async function fetchData(){
            try{
                setIsLoading(true)
                const events = await getAllSports();

                setSports(events)
            }catch(err){
                setError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData();
        
    }, []);


    return {sports,isLoading,error}
}

