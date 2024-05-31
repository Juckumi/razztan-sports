import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
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

function CreateFieldForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        m2: "",
        fieldPhotosUrl: "",
        dailyPrice: "",
    });
    const [refecht] = useOutletContext();
    const { postField, isLoading, errors, setErrors } = useCreateFields();

    const inputFileRef = useRef();
    const previewerRef = useRef();
    const { sports } = useGetAllSports();

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();

        for (const property in formData) {
            data.append(property, formData[property]);
        }
        data.append("fieldPhotosUrl", formData.fieldPhotosUrl);

        const res = await postField(data);

        if (res?.status === 201) {
            refecht();
            toast.success("se ha creado la pista con exito");
            navigate(-1);
        } else {
            toast.error("No se ha podido crear la pista");
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
                fieldPhotosUrl: e?.target?.files[0],
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
                <h1>Pistas</h1>

                <DivFlex>
                    <div>
                        <InputForm
                            label={"Nombre"}
                            name={"name"}
                            formData={formData}
                            setFormData={setFormData}
                            initialValue={formData.name}
                            error={errors?.name}
                            tooltip={errors?.name}
                            clearError={() => {
                                if (errors?.name) {
                                    let { name, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />{" "}
                        <InputForm
                            label={"lugar"}
                            name={"place"}
                            formData={formData}
                            setFormData={setFormData}
                            initialValue={formData.place}
                            error={errors?.place}
                            tooltip={errors?.place}
                            clearError={() => {
                                if (errors?.place) {
                                    let { place, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                        <InputForm
                            label={"metros cuadrados"}
                            name={"m2"}
                            formData={formData}
                            type={"number"}
                            setFormData={setFormData}
                            initialValue={formData.m2}
                            error={errors?.m2}
                            tooltip={errors?.m2}
                            clearError={() => {
                                if (errors?.m2) {
                                    let { m2, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                        <InputForm
                            label={"precio por dia"}
                            name={"dailyPrice"}
                            formData={formData}
                            type={"number"}
                            setFormData={setFormData}
                            initialValue={formData.dailyPrice}
                            error={errors?.dailyPrice}
                            tooltip={errors?.dailyPrice}
                            clearError={() => {
                                if (errors?.dailyPrice) {
                                    let { dailyPrice, ...data } = errors;
                                    setErrors({ ...data });
                                }
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
                        <Select
                            isFilter={false}
                            selectTitle="Deportes"
                            data={sports}
                            render={(sport) => (
                                <Icon sportName={sport.name} withText={true} />
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
                                if (errors?.sports) {
                                    let { sports, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                    </div>
                </DivFlex>

                <ButtonGroup>
                    <Button disabled={isLoading} type="submit">
                        Crear pista
                    </Button>
                </ButtonGroup>
            </Form>
        </>
    );
}

export default CreateFieldForm;
