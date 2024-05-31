import { useState } from "react";
import { createBooking } from "../../api/bookingApi";

export function useCreateBooking() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function postBooking(event) {
        try {
            setIsLoading(true);
            const res = await createBooking(event);
            return res;
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }

    return { postBooking, isLoading, errors, setErrors };
}
