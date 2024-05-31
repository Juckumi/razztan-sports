import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import InputForm from "../../ui/InputForm";
import Logo from "../../ui/Logo";
import { FiUser, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useLoginUser } from "./useLoginUser";
import toast from "react-hot-toast";

const inputs = [
    {
        label: "Email",
        type: "email",
        icon: <FiUser />,
        name: "email",
    },
    {
        label: "Contraseña",
        type: "password",
        icon: <FiLock />,
        rule: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$"),
        name: "password",
    },
];
//TODO:falta ajustar esta llamada a la api no tengo claro como deberia de hacerlo aún

function LogInForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { login, errors, setErrors } = useLoginUser();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(formData);
        if (res?.status === 201) {
            toast.success("Se ha iniciado sesion con exito");
            navigate(-1);
        } else if (res?.status === 401) {
            toast.error("Algo ha salido mal, revise los datos introducidos");
        } else {
            toast.error("No se ha podido iniciar sesion");
        }
    };
    return (
        <>
            <Logo style={{ fontSize: "4rem" }} />
            <Form onSubmit={handleSubmit}>
                <h1
                    style={{
                        color: "var(--color-brand-green-500)",
                        fontSize: "2rem",
                    }}
                >
                    Iniciar Sesion
                </h1>
                {inputs.map((input, index) => (
                    <FormRow key={index}>
                        <InputForm
                            setFormData={setFormData}
                            formData={formData}
                            name={input.name}
                            label={input.label}
                            type={input.type}
                            icon={input.icon}
                            rule={input.rule}
                            error={errors?.start}
                            tooltip={errors?.name}
                            clearError={() => {
                                if (errors?.name) {
                                    let { name, ...data } = errors;
                                    setErrors({ ...data });
                                }
                            }}
                        />
                    </FormRow>
                ))}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button>Iniciar Sesion</Button>
                </div>
            </Form>
        </>
    );
}

export default LogInForm;
