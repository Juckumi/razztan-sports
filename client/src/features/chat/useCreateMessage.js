import { useState } from "react";
import { createMessage } from "../../api/messageApi";

export function useCreateMessage() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function postMessage(invite) {
        try {
            setIsLoading(true);
            const res = await createMessage(invite);

            return res;
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }
    return { postMessage, errors, setErrors, isLoading };
}
