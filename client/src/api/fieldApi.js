import API_BASE_URL from "./config";

export const getOneField = async (fieldId) => {
    console.log(fieldId, "fieldId");
    const res = await fetch(`${API_BASE_URL}/api/fields/${fieldId}`);
    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};

export const getAllPaginatedFields = async (filters) => {
    const res = await fetch(
        `${API_BASE_URL}/api/fields/paginated?page=${filters.page}&limit=${filters.limit}&search=${filters.search}`
    );

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data fields");
    }

    const data = await res.json();

    return data;
};

export const createField = async (body) => {
    // const body = JSON.stringify(event);

    try {
        const res = await fetch(`${API_BASE_URL}/api/fields`, {
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
