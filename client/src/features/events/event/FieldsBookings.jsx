import styled from "styled-components";
import { useGetBookingsByEvent } from "./useGetBookingsByEvent";

const Img = styled.img`
    width: 10rem;
    height: 10rem;
    border-color: aquamarine;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 3rem;
    }

    div > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

function FieldsBookings({ eventId }) {
    const { bookings } = useGetBookingsByEvent(eventId);
    console.log(bookings[4]?.field);

    return (
        <Container>
            <h1>Pistas</h1>
            <div>
                {bookings.length > 0 &&
                    bookings.map((booking, index) => (
                        <div key={index}>
                            <Img
                                src={booking?.field?.fieldPhotosUrl}
                                alt="dsads"
                            />
                            <span>{booking.field.name}</span>
                        </div>
                    ))}
            </div>
        </Container>
    );
}

export default FieldsBookings;
