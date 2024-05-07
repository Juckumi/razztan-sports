export const getAllChats = async () => {
    
    try {
        const res = await fetch('/api/chats');

        const data = await res.json();
        if (!res.ok) {
            throw new Error('No se ha fetchear la data usuario');
        }       

        return data.data;
    } catch (err) {
        return err;
    }
};
export const getChatsByUserId = async (userId) => {
    
    try {
        const res = await fetch(`/api/chats/user/${userId}`);

       
        if (!res.ok) {
            throw new Error('No se ha fetchear la data usuario');
        }
        const data = await res.json();

        return data.data;
    } catch (err) {
        return err;
    }
};