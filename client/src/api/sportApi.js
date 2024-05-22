export const getAllSports = async () => {
    
    try {
        const res = await fetch('/api/sports');

        const data = await res.json();
        if (!res.ok) {
            throw new Error('No se ha fetchear la data usuario');
        }       

        return data.data;
    } catch (err) {
        return err;
    }
};