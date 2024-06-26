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
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }

    return { postEvent, isLoading, errors, setErrors };
}
