import { useState } from "react";
import { createEvent } from "../../../api/eventApi";

export function useCreateEvent() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function postEvent(event) {
        try {
            setIsLoading(true);
            const res = await createEvent(event);

            return res;
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { postEvent, isLoading, error };
}
