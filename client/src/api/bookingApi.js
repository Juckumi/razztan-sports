export const createBooking = async (data) => {
    try {
        const body = JSON.stringify(data);

        console.log(data);

        const res = await fetch(`/api/bookings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });

        console.log(body);
        console.log(res);

        if (!res.ok) {
            const errorData = await res.json();
            console.log(errorData);
            console.error(errorData, "errors");
            throw { errorData, res };
        }

        return res;
    } catch (error) {
        console.error("Error creating booking:", error);
        throw error;
    }
};

export const getBookingsByEvent = async (eventId) => {
    try {
        const res = await fetch(`/api/bookings/event/${eventId}`);

        if (!res.ok) {
            throw new Error("No se ha fetchear la data bookings");
        }

        const data = await res.json();

        return data.data;
    } catch (err) {
        return err;
    }
};
