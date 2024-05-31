import API_BASE_URL from "./config";

export const getAllPaginatedEvents = async (filters) => {
    const res = await fetch(
        `/api/events/paginated?page=${filters.page}&limit=${
            filters.limit
        }&search=${filters.search}&filter=${encodeURIComponent(
            JSON.stringify(filters.selectedFilters)
        )}`
    );

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data;
};

export const getAllEvents = async () => {
    const res = await fetch(`${API_BASE_URL}/api/events`);

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};

export const getEventBySlug = async (eventSlug) => {
    const res = await fetch(`${API_BASE_URL}/api/events/slug/${eventSlug}`);

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};
export const getEventsByUserId = async (userId) => {
    const res = await fetch(`${API_BASE_URL}/api/events/user/${userId}`);
    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};

export const createEvent = async (body) => {
    // const body = JSON.stringify(event);

    try {
        const res = await fetch(`${API_BASE_URL}/api/events`, {
            method: "POST",
            body,
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error(errorData);
            throw { errorData, res };
        }

        return res;
    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
};
