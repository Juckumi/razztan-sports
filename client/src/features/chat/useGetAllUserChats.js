import { useEffect, useState } from "react";
import { getAllChats, getChatsByUserId } from "../../api/chatApi";

export function useGetAllUserChats() {
    const [chats, setChats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                //TODO:hay que cambiar la funcion a que muestre por usario los chats no todos
                // const userchats = await getChatsByUserId(4);
                const userchats = await getAllChats();

                setChats(userchats);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return { chats, isLoading };
}
