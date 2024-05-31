import { useEffect, useState } from "react";
import { getBookingsByEvent } from "../../../api/bookingApi";

export function useGetBookingsByEvent(eventId) {
    const [bookings, setBookings] = useState([]);
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
                const bookings = await getBookingsByEvent(eventId);

                setBookings(bookings);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        if (eventId) {
            fetchData();
        }
    }, [eventId, refecthData]);

    return { bookings, isLoading, error, refecht };
}
