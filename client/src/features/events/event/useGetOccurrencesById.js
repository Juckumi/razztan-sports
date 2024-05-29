import { useEffect, useState } from "react";
import { getOccurrencesById } from "../../../api/occurrencesApi";

export function useGetOccurrencesById(eventId) {
    const [occurrences, setOccurrences] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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
    }, [eventId]);

    return { occurrences, isLoading, error };
}
