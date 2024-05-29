import { useEffect, useState } from "react";
import { getAllPaginatedEvents } from "../../api/eventApi";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

export function useGetAllEvents() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(searchParams.get("page") * 1);
    const [limit, setLimit] = useState(6);
    const [search, setSearch] = useState("");
    const [selectedFilters, setSelectedFilters] = useState(
        searchParams.get("sport-filter")
            ? searchParams.get("sport-filter").split("-")
            : []
    );

    useEffect(() => {
        setSearchParams({
            page: searchParams.get("page"),
            "sport-filter": selectedFilters.join("-"),
        });
        async function fetchData() {
            try {
                setIsLoading(true);
                const events = await getAllPaginatedEvents({
                    limit,
                    page,
                    search,
                    selectedFilters,
                });

                setEvents(events);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [page, limit, search, selectedFilters]);

    return {
        events,
        isLoading,
        error,
        setPage,
        page,
        limit,
        setLimit,
        setSearch,
        search,
        setSelectedFilters,
        selectedFilters,
    };
}
