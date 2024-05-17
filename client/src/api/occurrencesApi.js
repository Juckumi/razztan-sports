export const  getAllOccurences = async () => {
    
    const res = await fetch(`/api/occurrences`);
  
    if (!res.ok) {
        throw new Error('No se ha podido fetchear la data usuario');
    }

    const data = await res.json();

    return data.data;
};

export const getOccurrencesById = async (eventId) => {
    
    try {

        const res = await fetch(`/api/occurrences/event/${eventId}`);

        if (!res.ok) {
            throw new Error('No se ha fetchear la data usuario');
        }

        const data = await res.json();


        return data.data;
    } catch (err) {
        return err;
    }
};