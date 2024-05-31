import { useState } from "react";
import { loginUser } from "../../api/userApi";

export function useLoginUser() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    async function login(event) {
        try {
            setIsLoading(true);
            const res = await loginUser(event);

            return res;
        } catch ({ errorData, res }) {
            setErrors(errorData.errors);
            return res;
        } finally {
            setIsLoading(false);
        }
    }

    return { login, isLoading, errors, setErrors };
}
