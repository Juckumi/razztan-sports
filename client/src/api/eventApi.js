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
    const res = await fetch(`/api/events`);

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};

export const getEventBySlug = async (eventSlug) => {
    const res = await fetch(`/api/events/slug/${eventSlug}`);

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};
export const getEventsByUserId = async (userId) => {
    const res = await fetch(`/api/events/user/${userId}`);
    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();
    console.log("🚀 => getEventsByUserId => data:", data);

    return data.data;
};

export const createEvent = async (event) => {
    const body = JSON.stringify(event);

    try {
        const res = await fetch(`/api/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(
                errorData.message || "No se ha podido crear el evento"
            );
        }

        return res;
    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
};
