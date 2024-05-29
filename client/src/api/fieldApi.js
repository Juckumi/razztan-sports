export const getAllPaginatedFields = async (filters) => {
    const res = await fetch(
        `/api/fields/paginated?page=${filters.page}&limit=${filters.limit}&search=${filters.search}`
    );

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data fields");
    }

    const data = await res.json();

    return data;
};
