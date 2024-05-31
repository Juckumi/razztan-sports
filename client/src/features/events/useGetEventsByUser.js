import { useEffect, useState } from "react";
import { getEventsByUserId } from "../../api/eventApi";

export function useGetEventsByUser() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const userId = 1;
    const [refecthData, setRefecthData] = useState(false);
    const refecht = () => {
        setRefecthData(!refecthData);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const events = await getEventsByUserId(userId);

                setEvents(events);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [userId, refecthData]);

    return { events, isLoading, error, refecht };
}
