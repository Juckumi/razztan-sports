import styled from "styled-components";
import Form from "../../ui/Form";
import InputForm from "../../ui/InputForm";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Select from "../../ui/Select";
import { useGetAllSports } from "./useGetAllSports";
import { Icon } from "./EventsCard";
import { useNavigate } from "react-router";
import { useCreateEvent } from "./event/useCreateEvent";
import { toast } from "react-hot-toast";
import DateSpan from "../../ui/DateSpan";
import { LuCalendarClock } from "react-icons/lu";
import { formatDate } from "../../utils/dateFormatter";

const DivFlex = styled.div`
    margin: 0.5rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    min-height: 20rem;
    min-width: 30rem;
    & > :last-child {
        border: none;
    }
    display: flex;
    gap: 1.5rem;
`;
const Checked = styled.div`
    display: flex;
    margin: 1rem 0 0 1rem;
    * {
        width: 1rem;
        height: 1rem;
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
`;
const Circle = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${({ $active }) =>
        $active === true
            ? "var(--color-grey-100)"
            : "var(--color-brand-green-100)"};
    z-index: 10;
    transition: 0.3s;
`;
const Hr = styled.hr`
    position: absolute;
    width: 100%;
    bottom: 1rem;
    z-index: 1;
`;
const Styledlabel = styled.label`
    font-size: 0.8rem;
    margin: 0 1rem;
`;
const ColumnForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & > * {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    & > :first-child {
        margin: 0 0 2rem 0;
    }
`;
const ImgViewerContainer = styled.div`
    width: 13rem;
    height: 13rem;
    display: grid;
    grid-template-columns: 1fr;

    grid-template-rows: 1fr;
`;

function CreateEventForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        start: "",
        end: "",
        price: 0,
        userId: 1,
    });
    const { postEvent, isLoading, errors, setErrors } = useCreateEvent();
    const [step, setStep] = useState(1);
    const [isPrice, setIsPrice] = useState(true);

    const inputFileRef = useRef();
    const previewerRef = useRef();
    const previewerRefBanner = useRef();

    const [arrayPreview, setArrayPreview] = useState([]);

    const { sports } = useGetAllSports();

    const handleNextStep = () => {
        if (step + 1 <= 3) setStep((s) => s + 1);
    };
    const handlePrevStep = () => {
        if (step - 1 > 0) setStep((s) => s - 1);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setIsPrice(true);

        if (step === 3) {
            const data = new FormData();

            for (const property in formData) {
                console.log("sasasa", property);
                data.append(property, formData[property]);
            }

            // Añadir archivos a FormData
            for (let i = 0; i < formData?.eventsPhotosUrls?.length; i++) {
                data.append(
                    `eventsPhotosUrls[${i}]`,
                    formData.eventsPhotosUrls[i]
                );
            }

            const res = await postEvent(data);
            if (res?.status === 201) {
                toast.success("se ha creado con exito el evento");
                navigate(-1);
            } else {
                toast.error("No se ha podido crear el evento");
            }
        }
    }
    const handleInputClick = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };
    const handleImgPreviewer = (e) => {
        if (previewerRefBanner.current) {
            setFormData({ ...formData, bannerPhotoUrl: e.target.files[0] });
            return;
        }
        if (previewerRef.current) {
            setFormData({ ...formData, eventsPhotosUrls: e.target.files });
        }
    };
    useEffect(() => {
        if (
            formData.eventsPhotosUrls &&
            (previewerRef.current || previewerRefBanner.current)
        ) {
            if (formData.eventsPhotosUrls.length > 0) {
                if (step === 1) {
                    previewerRef.current.src = URL.createObjectURL(
                        formData.eventsPhotosUrls[0]
                    );
                }
            }
            if (formData.bannerPhotoUrl) {
                if (step === 3) {
                    previewerRefBanner.current.src = URL.createObjectURL(
                        formData.bannerPhotoUrl
                    );
                }
            }
        }
    }, [
        formData.eventsPhotosUrls,
        formData.bannerPhotoUrl,
        step,
        previewerRef,
    ]);

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "var(--color-white)",
                    position: "relative",
                }}
            >
                <span>
                    Paso <Circle $active={step === 1}>1</Circle>
                </span>
                <Hr />
                <span>
                    Paso <Circle $active={step === 2}>2</Circle>
                </span>
                <span>
                    Paso <Circle $active={step === 3}>3</Circle>
                </span>
            </div>

            <Form onSubmit={handleSubmit}>
                <h1>
                    {step === 1 && "General"}
                    {step === 2 && "Opciones"}
                    {step === 3 && "Vista previa"}
                </h1>

                {step === 1 && (
                    <DivFlex>
                        <div>
                            <InputForm
                                label={"Titulo"}
                                name={"title"}
                                formData={formData}
                                setFormData={setFormData}
                                initialValue={formData.title}
                                error={errors?.title}
                                tooltip={errors?.title}
                                clearError={() => {
                                    let { title, ...data } = errors;
                                    setErrors({ ...data });
                                }}
                            />
                            <InputForm
                                type="textArea"
                                name={"description"}
                                label="Descripcion Breve"
                                formData={formData}
                                setFormData={setFormData}
                                initialValue={formData.description}
                                error={errors?.description}
                                tooltip={errors?.description}
                                clearError={() => {
                                    let { description, ...data } = errors;
                                    setErrors({ ...data });
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{ display: "flex", flexFlow: "column" }}
                            >
                                <input
                                    type="file"
                                    ref={inputFileRef}
                                    style={{ display: "none" }}
                                    onChange={handleImgPreviewer}
                                    accept="image/*"
                                    multiple
                                />

                                <span style={{ fontSize: "0.8rem" }}>
                                    Elige una imagen
                                </span>
                                <ImgViewerContainer>
                                    <img
                                        ref={previewerRef}
                                        src={`/EVENT.png`}
                                        onClick={handleInputClick}
                                    />
                                </ImgViewerContainer>
                            </div>
                        </div>
                    </DivFlex>
                )}
                {step === 2 && (
                    <DivFlex>
                        <ColumnForm>
                            <div>
                                <Styledlabel>Elige deportes</Styledlabel>
                                <Select
                                    isFilter={false}
                                    selectTitle="Deportes"
                                    data={sports}
                                    render={(sport) => (
                                        <Icon
                                            sportName={sport.name}
                                            withText={true}
                                        />
                                    )}
                                    order={(sport) =>
                                        sport.name.lenght > sport.name.lenght
                                    }
                                    onSelectionChange={(item) =>
                                        setFormData({
                                            ...formData,
                                            sports: item,
                                        })
                                    }
                                    direction={"column"}
                                    multiple
                                    initialvalue={formData.sports}
                                    error={errors?.sports}
                                    tooltip={errors?.sports}
                                    clearError={() => {
                                        let { sports, ...data } = errors;
                                        setErrors({ ...data });
                                    }}
                                />
                            </div>
                        </ColumnForm>
                        <ColumnForm>
                            <div>
                                <Styledlabel>status publico</Styledlabel>

                                <Select
                                    isFilter={false}
                                    selectTitle="Status"
                                    data={["publico", "privado", "revisado"]}
                                    render={(publicStatus) => publicStatus}
                                    order={(publicStatus) =>
                                        publicStatus.lenght >
                                        publicStatus.lenght
                                    }
                                    onSelectionChange={(item) =>
                                        setFormData({
                                            ...formData,
                                            publicStatus: item,
                                        })
                                    }
                                    direction={"column"}
                                    initialvalue={formData.publicStatus}
                                    error={errors?.publicStatus}
                                    tooltip={errors?.publicStatus}
                                    clearError={() => {
                                        let { publicStatus, ...data } = errors;
                                        setErrors({ ...data });
                                    }}
                                />
                            </div>
                            <div>
                                <InputForm
                                    type="date"
                                    name={"start"}
                                    initialValue={formData.start}
                                    label="Fecha de comienzo"
                                    formData={formData}
                                    setFormData={setFormData}
                                    error={errors?.start}
                                    tooltip={errors?.start}
                                    clearError={() => {
                                        let { start, ...data } = errors;
                                        setErrors({ ...data });
                                    }}
                                />
                                <Checked>
                                    <input
                                        label="Precio"
                                        type="checkbox"
                                        onChange={(e) =>
                                            setIsPrice(!e.target.checked)
                                        }
                                    />
                                </Checked>
                                <InputForm
                                    label="Precio"
                                    disabled={isPrice}
                                    name="price"
                                    type="number"
                                    formData={formData}
                                    setFormData={setFormData}
                                    initialValue={formData.price}
                                    style={{ width: "6rem" }}
                                    clearError={() => {
                                        let { price, ...data } = errors;
                                        setErrors({ ...data });
                                    }}
                                />
                            </div>
                        </ColumnForm>
                        <ColumnForm>
                            <div>
                                <Styledlabel>Catering</Styledlabel>

                                <Select
                                    isFilter={false}
                                    selectTitle="catering"
                                    data={["si", "no"]}
                                    render={(catering) => catering}
                                    order={(catering) =>
                                        catering.lenght > catering.lenght
                                    }
                                    onSelectionChange={(item) =>
                                        setFormData({
                                            ...formData,
                                            catering: item,
                                        })
                                    }
                                    initialvalue={formData.catering}
                                    error={errors?.catering}
                                    tooltip={errors?.catering}
                                    clearError={() => {
                                        let { catering, ...data } = errors;
                                        setErrors({ ...data });
                                    }}
                                />
                            </div>
                            <div>
                                <InputForm
                                    type="date"
                                    name={"end"}
                                    initialValue={formData.end}
                                    label="Fecha Fin"
                                    formData={formData}
                                    setFormData={setFormData}
                                    error={errors?.end}
                                    clearError={() => {
                                        let { end, ...data } = errors;
                                        setErrors({ ...data });
                                    }}
                                    tooltip={errors?.end}
                                />
                            </div>
                        </ColumnForm>
                    </DivFlex>
                )}
                {step === 3 && (
                    <div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridAutoRows: "10rem",
                                textAlign: "center",
                                position: "relative",
                            }}
                        >
                            <input
                                id={"banner"}
                                type="file"
                                ref={inputFileRef}
                                style={{ display: "none" }}
                                onChange={handleImgPreviewer}
                                accept="image/*"
                            />
                            <h1
                                style={{
                                    position: "absolute",
                                    bottom: "2rem",
                                    zIndex: "5",
                                    width: "100%",
                                }}
                            >
                                {formData.title}
                            </h1>
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    gridColumn: "1 / -1",
                                }}
                                ref={previewerRefBanner}
                                src={`/EVENT.png`}
                                onClick={handleInputClick}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                margin: "1rem 0",
                                justifyContent: "space-between",
                            }}
                        >
                            {formData?.sports?.map((sport, index) => (
                                <Icon
                                    key={index}
                                    sportName={sport}
                                    withText={true}
                                />
                            ))}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "2rem 1rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <span>catering:{formData.catering}</span>
                                <span>status:{formData.publicStatus}</span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div>
                                    <LuCalendarClock />
                                    <DateSpan>
                                        {formatDate(new Date(formData.start))}
                                    </DateSpan>
                                </div>
                                <div>
                                    <LuCalendarClock />
                                    <DateSpan>
                                        {formatDate(new Date(formData.end))}
                                    </DateSpan>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <ButtonGroup>
                    {step === 3 && (
                        <Button disabled={isLoading} type="submit">
                            Crear Evento
                        </Button>
                    )}

                    {step - 1 <= 1 ? (
                        <Button onClick={handleNextStep}>
                            siguiente <FiArrowRight />
                        </Button>
                    ) : (
                        <div></div>
                    )}
                    {step + 1 >= 3 && (
                        <Button onClick={handlePrevStep}>
                            <FiArrowLeft />
                            anterior
                        </Button>
                    )}
                </ButtonGroup>
            </Form>
        </>
    );
}

export default CreateEventForm;
