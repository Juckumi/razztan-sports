import { useState } from "react";
import { createField } from "../../api/fieldApi";

export function useCreateFields() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function postField(event) {
        try {
            setIsLoading(true);
            const res = await createField(event);
            return res;
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }

    return { postField, isLoading, errors, setErrors };
}
