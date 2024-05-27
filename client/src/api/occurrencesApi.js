export const getAllOccurences = async () => {
    const res = await fetch(`/api/occurrences`);

    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};

export const getOccurrencesById = async (eventId) => {
    try {
        const res = await fetch(`/api/occurrences/event/${eventId}`);

        if (!res.ok) {
            throw new Error("No se ha fetchear la data usuario");
        }

        const data = await res.json();

        return data.data;
    } catch (err) {
        return err;
    }
};

export const createOccurence = async (body) => {
    try {
        console.log(body, "bodyyyyyyy");
        const res = await fetch(`/api/occurrences`, {
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
        console.error("Error creating occurrence:", error);
        throw error;
    }
};
