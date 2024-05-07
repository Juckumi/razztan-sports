import { useEffect, useState } from "react";
import { getMessagesByChatId } from "../../api/messageApi";

export function useGetAllChatMessages(openChat) {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                setIsLoading(true)
                const chatMessages = await getMessagesByChatId(openChat);

                setMessages(chatMessages)
            }catch(err){
                setError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData();
        
    }, [openChat]);


    return {messages,isLoading,error}
}

