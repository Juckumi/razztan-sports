export const getAllMessages = async () => {
    try {
        const res = await fetch("/api/chats");

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
