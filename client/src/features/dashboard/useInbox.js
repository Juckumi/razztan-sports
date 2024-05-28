import { useEffect, useState } from "react";
import { getInvitesByUserId } from "../../api/inviteApi";

export function useInbox() {
    // const [events, setEvents] = useState([]);
    const [invitations, setInvitations] = useState();
    const userId = 1; //TODO: usuario estatico

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                // const events = await getAllEvents();
                const occurrences = await getInvitesByUserId(userId);

                setInvitations(occurrences);
                // setEvents(events);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return { invitations, isLoading, error };
}
