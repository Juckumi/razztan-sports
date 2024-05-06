export const getAllEvents = async (filters) => {
    
        const res = await fetch(`/api/events?page=${filters.page}&limit=${filters.limit}`);
      
        if (!res.ok) {
            throw new Error('No se ha podido fetchear la data usuario');
        }

        const data = await res.json();

        return data;
};