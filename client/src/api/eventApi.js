export const  getAllPaginatedEvents = async (filters) => {
    
        const res = await fetch(`/api/events/paginated?page=${filters.page}&limit=${filters.limit}&search=${filters.search}`);
      
        if (!res.ok) {
            throw new Error('No se ha podido fetchear la data usuario');
        }

        const data = await res.json();

        return data;
};

export const  getAllEvents = async () => {
    
    const res = await fetch(`/api/events`);
  
    if (!res.ok) {
        throw new Error('No se ha podido fetchear la data usuario');
    }

    const data = await res.json();

    return data.data;
};

export const  getEventBySlug = async (eventSlug) => {
    
    const res = await fetch(`/api/events/slug/${eventSlug}`);
  
    if (!res.ok) {
        throw new Error('No se ha podido fetchear la data usuario');
    }

    const data = await res.json();
    console.log("🚀 => getEventBySlug => data:", data.data)

    return data.data;
};