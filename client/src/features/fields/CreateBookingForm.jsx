import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useOutletContext } from "react-router";
import toast from "react-hot-toast";
import Form from "../../ui/Form";
import InputForm from "../../ui/InputForm";
import DivFlex from "../../ui/DivFlex";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import { useCreateFields } from "./useCreateFields";
import Select from "../../ui/Select";
import { useGetAllSports } from "../events/useGetAllSports";
import { Icon } from "../events/EventsCard";
import { useGetEventsByUser } from "../events/useGetEventsByUser";
import { useCreateBooking } from "./useCreateBooking";
import useGetOneField from "./useGetOneField";

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
`;

const PriceDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    padding: 2rem 1rem;
    color: var(--color-white);

    background-color: var(--color-grey-200);
`;

function CreateBookingForm() {
    const navigate = useNavigate();
    const { fieldId } = useParams();
    const [formData, setFormData] = useState({
        start: "",
        end: "",
        price: 1,
    });
    const [refecht] = useOutletContext();
    const { field } = useGetOneField();

    const [price, setPrice] = useState(null);

    const { postBooking, errors, setErrors, isLoading } = useCreateBooking();

    const { events } = useGetEventsByUser();

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await postBooking({
            ...formData,
            fieldId: fieldId * 1,
            price,
        });

        if (res?.status === 201) {
            refecht();
            toast.success("se ha creado la  reserva con exito");
            navigate(-1);
        } else {
            toast.error("No se ha podido crear la reserva");
        }
    }

    useEffect(() => {
        if (formData.end && formData.end) {
            const startDate = new Date(formData.start);
            const endDate = new Date(formData.end);

            const differenceInTime = endDate - startDate;

            console.log(differenceInTime);

            const differenceInDays =
                (differenceInTime * 1) / (1000 * 3600 * 24);
            console.log(differenceInDays, "diffff");

            const price = field.dailyPrice * differenceInDays;
            setPrice(price);
        }
    }, [formData.end, formData.end]);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    color: "var(--color-white)",
                    position: "relative",
                }}
            >
                <Logo style={{ fontSize: "3rem" }} />
            </div>

            <Form onSubmit={handleSubmit}>
                <h1>Reservaciones</h1>

                <DivFlex>
                    <div>
                        <InputForm
                            label={"fecha de inicio"}
                            name={"start"}
                            type={"datetime-local"}
                            formData={formData}
                            setFormData={setFormData}
                            initialValue={formData.start}
                            error={errors?.start}
                            tooltip={errors?.start}
                            clearError={() => {
                                if (errors?.start) {
                                    let { start, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />{" "}
                        <InputForm
                            label={"fecha de fin"}
                            name={"end"}
                            type={"datetime-local"}
                            formData={formData}
                            setFormData={setFormData}
                            initialValue={formData.end}
                            error={errors?.end}
                            tooltip={errors?.end}
                            clearError={() => {
                                if (errors?.end) {
                                    let { end, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                        {price && (
                            <PriceDiv>
                                {"Precio total: " + (price.toFixed(2) || 1)}
                            </PriceDiv>
                        )}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "2rem 0",
                        }}
                    >
                        <Select
                            bookings={true}
                            isFilter={false}
                            selectTitle="Evento"
                            data={events}
                            render={(event) => event.title}
                            order={(event) =>
                                event.title.lenght > event.title.lenght
                            }
                            onSelectionChange={(item) =>
                                setFormData({
                                    ...formData,
                                    eventId: item,
                                })
                            }
                            direction={"column"}
                            initialvalue={formData.eventId}
                            error={errors?.eventId}
                            tooltip={errors?.eventId}
                            clearError={() => {
                                if (errors?.eventId) {
                                    let { eventId, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                    </div>
                </DivFlex>

                <ButtonGroup>
                    <Button disabled={isLoading} type="submit">
                        Hacer Reserva
                    </Button>
                </ButtonGroup>
            </Form>
        </>
    );
}

export default CreateBookingForm;
