import Modal from "../../../ui/Modal";
import { useCreateInvite } from "./useCreateInvite";

import InputForm from "../../../ui/InputForm";
import Form from "../../../ui/Form";
import Button from "../../../ui/Button";
import DivFlex from "../../../ui/DivFlex";
import UserRow from "./UserRow";
import styled from "styled-components";
import { useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router";
import toast from "react-hot-toast";

const UsersInvited = styled.div`
    flex: 2;
    && > * {
        overflow-y: auto;
        max-height: 21rem;

        display: flex;
        flex-flow: column;
        flex-wrap: nowrap;
    }

    @media (max-width: 610px) {
        && > * {
            flex-flow: row;
        }
    }
`;

function InviteForm({ selectedUsersIds, users }) {
    const [eventId] = useOutletContext();
    const selectedUsers = users.filter((user) =>
        selectedUsersIds?.includes(user.id)
    );
    const { postInvite, errors, setErrors } = useCreateInvite();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        text: "",
        eventId: eventId,
        userIds: selectedUsersIds,
    });

    async function handleSubmit(e) {
        console.log(e, "mi eee");
        e.preventDefault();

        const res = await postInvite(formData);

        if (res?.status === 201) {
            toast.success("se ha creado la invitacion");
            navigate(-2);
        } else if (res?.status === 401) {
            toast.error("Algo ha salido mal, revise los datos introducidos");
        } else {
            toast.error("No se ha podido crear la invitacion");
        }
    }

    return (
        <Modal>
            <Form onSubmit={handleSubmit}>
                <h1>Invitacion</h1>

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
                                if (errors.title) {
                                    let { title, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                        <InputForm
                            label={"mensaje"}
                            name={"text"}
                            type={"textArea"}
                            formData={formData}
                            setFormData={setFormData}
                            initialValue={formData.text}
                            error={errors?.title}
                            tooltip={errors?.title}
                            clearError={() => {
                                if (errors.text) {
                                    let { text, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                    </div>
                    <UsersInvited>
                        {selectedUsersIds.length.toString()} personas
                        <div>
                            {selectedUsers?.map((user) => (
                                <UserRow.Final key={user.id} user={user} />
                            ))}
                        </div>
                    </UsersInvited>
                </DivFlex>
                <Button> Enviar Invitacion</Button>
            </Form>
        </Modal>
    );
}

export default InviteForm;
