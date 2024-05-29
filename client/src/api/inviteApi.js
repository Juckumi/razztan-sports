export const createInvite = async (data) => {
    try {
        const body = JSON.stringify(data);

        const res = await fetch(`/api/invitations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error(errorData, "errors");
            throw { errorData, res };
        }

        return res;
    } catch (error) {
        console.error("Error creating occurrence:", error);
        throw error;
    }
};

export const getInvitesByUserId = async (userId) => {
    const res = await fetch(`/api/invitations/user/${userId}`);
    if (!res.ok) {
        throw new Error("No se ha podido fetchear la data usuario");
    }

    const data = await res.json();

    return data.data;
};
