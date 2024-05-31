import { useEffect, useState } from "react";
import { getOccurrencesById } from "../../../api/occurrencesApi";

export function useGetOccurrencesById(eventId) {
    const [occurrences, setOccurrences] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [refecthData, setRefecthData] = useState(false);
    const refecht = () => {
        setRefecthData(!refecthData);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const occurrences = await getOccurrencesById(eventId);

                setOccurrences(occurrences);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        if (eventId) {
            fetchData();
        }
    }, [eventId, refecthData]);

    return { occurrences, isLoading, error, refecht };
}
