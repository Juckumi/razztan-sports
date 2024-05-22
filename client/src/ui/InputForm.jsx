import { useEffect, useRef } from "react";
import styled from "styled-components";

const Label = styled.label`
    font-size: 0.8rem;
    margin: 0.2rem;
`;

const Input = styled.input`
    font-size: 1.2rem;
    padding: 10px;
    height: 2rem;
    border-radius: var(--b-radius-md);
    border: none;

    &&:focus {
        outline: 3px solid var(--color-brand-green-100);
    }
`;
const TextArea = styled.textarea`
    font-size: 1.2rem;
    padding: 10px;
    height: 10rem;
    border-radius: var(--b-radius-md);
    resize: none;
    border: none;

    &&:focus {
        outline: 3px solid var(--color-brand-green-100);
    }
`;
const Div = styled.div`
    display: grid;
    text-align: left;
    margin: 0 1rem;
`;
const Span = styled.span`
    font-size: 1.7rem;
    min-width: 1.7rem;
    display: inline-block;
`;

function InputForm({
    formData,
    setFormData,
    label,
    name,
    type,
    icon,
    rule = new RegExp(""),
    style,
    initialValue = "",
    disabled = false,
}) {
    useEffect(() => {
        if (ref.current) {
            ref.current.value = initialValue;
        }
    }, [initialValue]);
    const ref = useRef();
    const handleRequirements = (e) => {
        if (rule.test(e.target.value) == false) {
            e.target.style.outline = "2px red solid";
        } else {
            e.target.style.outline = "3px  green solid";
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        }
    };
    return (
        <>
            <Span>{icon}</Span>
            <Div className="input-form-label">
                <Label>{label}</Label>
                {type !== "textArea" ? (
                    <Input
                        onChange={(e) => handleRequirements(e)}
                        type={type}
                        placeholder={label}
                        name={name}
                        style={style}
                        ref={ref}
                        disabled={disabled}
                    />
                ) : (
                    <TextArea
                        disabled={disabled}
                        placeholder={label}
                        name={name}
                        onChange={(e) => handleRequirements(e)}
                        style={style}
                        ref={ref}
                    ></TextArea>
                )}
            </Div>
        </>
    );
}

export default InputForm;
