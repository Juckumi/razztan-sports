import { useEffect, useState } from "react";
import { getEventsByUserId } from "../../api/eventApi";

export function useGetEventsByUser() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const userId = 1;

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
    }, [userId]);

    return { events, isLoading, error };
}
