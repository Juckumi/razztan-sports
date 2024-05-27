import { useState } from "react";
import { createOccurence } from "../../../api/occurrencesApi";

export function useCreateOccurence() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function postOccurence(event) {
        console.log(event, "occurenciaaaa");
        try {
            setIsLoading(true);
            const res = await createOccurence(event);
            return res;
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }

    return { postOccurence, isLoading, errors, setErrors };
}
