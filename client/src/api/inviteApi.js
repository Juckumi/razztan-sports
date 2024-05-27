export const createInvite = async (body) => {
    try {
        console.log(body, "bodyyyyyyy");
        const res = await fetch(`/api/invitations`, {
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
