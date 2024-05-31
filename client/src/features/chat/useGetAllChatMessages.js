import { useEffect, useState } from "react";
import { getMessagesByChatId } from "../../api/messageApi";

export function useGetAllChatMessages(openChat) {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refecthData, setRefecthData] = useState(false);
    const refecht = () => {
        setRefecthData(!refecthData);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const chatMessages = await getMessagesByChatId(openChat);

                setMessages(chatMessages);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [openChat, refecthData]);

    return { messages, isLoading, error, refecht };
}
