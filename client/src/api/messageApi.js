import API_BASE_URL from "./config";

export const getAllMessages = async () => {
    try {
        const res = await fetch(`/api/chats`);

        const data = await res.json();
        if (!res.ok) {
            throw new Error("No se ha fetchear la data usuario");
        }

        return data.data;
    } catch (err) {
        return err;
    }
};
export const getMessagesByChatId = async (chatId) => {
    try {
        const res = await fetch(`/api/messages/chat/${chatId}`);

        const data = await res.json();
        if (!res.ok) {
            throw new Error("No se ha fetchear la data usuario");
        }

        return data.data;
    } catch (err) {
        return err;
    }
};

export const createMessage = async (data) => {
    try {
        const body = JSON.stringify(data);

        const res = await fetch(`/api/messages`, {
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
