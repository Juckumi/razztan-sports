import { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/userApi";

export function useAllusers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const allUsers = await getAllUsers({
                    search,
                });

                setUsers(allUsers);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [search]);

    return {
        users,
        isLoading,
        error,
        setSearch,
        search,
    };
}
