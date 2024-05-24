import { useEffect, useState } from "react";
import { createEvent } from "../../../api/eventApi";

export function useCreateEvent() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function postEvent(event) {
        try {
            setIsLoading(true);
            const res = await createEvent(event);

            return res;
        } catch (error) {
            console.log("🚀 => postEvent => error:", error);
            setErrors(error.errors);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log("mierrrrrrrrrrrrrrrrrrrrrrr", errors);
    }, [errors]);

    return { postEvent, isLoading, errors, setErrors };
}
