import styled from "styled-components";
import Form from "../../../ui/Form";
import InputForm from "../../../ui/InputForm";
import Button from "../../../ui/Button";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useCreateOccurence } from "./useCreateOccurence";
import { toast } from "react-hot-toast";
import Logo from "../../../ui/Logo";
import { useOutletContext } from "react-router";
import DivFlex from "../../../ui/DivFlex";

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
`;

const ImgViewerContainer = styled.div`
    width: 13rem;
    height: 13rem;
    display: grid;
    grid-template-columns: 1fr;
    cursor: pointer;

    grid-template-rows: 1fr;
`;

function CreateOccurenceForm() {
    const [eventId] = useOutletContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        start: "",
        eventId,
    });
    const { postOccurence, isLoading, errors, setErrors } =
        useCreateOccurence();

    const inputFileRef = useRef();
    const previewerRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();

        for (const property in formData) {
            console.log(property);
            data.append(property, formData[property]);
        }
        data.append("occurencePhotoUrl", formData.occurencePhotoUrl);

        const res = await postOccurence(data);
        if (res?.status === 201) {
            toast.success("se ha creado la occurencia con exito");
            navigate(-1);
        } else {
            toast.error("No se ha podido crear la occurencia");
        }
    }
    const handleInputClick = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };
    const handleImgPreviewer = (e) => {
        if (previewerRef?.current) {
            setFormData({
                ...formData,
                occurencePhotoUrl: e?.target?.files[0],
            });
            previewerRef.current.src = URL.createObjectURL(e.target.files[0]);
        }
    };

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
                <h1>Occurencia</h1>

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
                        <InputForm
                            type="datetime-local"
                            name={"start"}
                            label="fecha inicio"
                            formData={formData}
                            setFormData={setFormData}
                            initialValue={formData.description}
                            error={errors?.description}
                            tooltip={errors?.description}
                            clearError={() => {
                                let { start, ...data } = errors;
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
                        <div style={{ display: "flex", flexFlow: "column" }}>
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

                <ButtonGroup>
                    <Button disabled={isLoading} type="submit">
                        Crear Occurrencia
                    </Button>
                </ButtonGroup>
            </Form>
        </>
    );
}

export default CreateOccurenceForm;
