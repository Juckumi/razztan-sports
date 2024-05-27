import { useState } from "react";
import { createInvite } from "../../../api/inviteApi";

export function useCreateInvite() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function postInvite(event) {
        try {
            setIsLoading(true);
            const res = await createInvite(event);

            return res;
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }
    return { postInvite };
}
