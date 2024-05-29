import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllPaginatedFields } from "../../api/fieldApi";

function useFields() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [fields, setFields] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(searchParams.get("page") * 1);
    const [limit, setLimit] = useState(6);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearchParams({
            page: searchParams.get("page"),
        });
        async function fetchData() {
            try {
                setIsLoading(true);
                const fields = await getAllPaginatedFields({
                    limit,
                    page,
                    search,
                });

                setFields(fields);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [page, limit, search]);

    return {
        fields,
        isLoading,
        error,
        setPage,
        page,
        limit,
        setLimit,
        setSearch,
        search,
    };
}

export default useFields;
