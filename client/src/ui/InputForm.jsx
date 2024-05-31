import { useEffect, useRef } from "react";
import styled from "styled-components";

const Label = styled.label`
    font-size: 0.8rem;
    margin: 0.2rem;
`;

const Input = styled.input`
    /* font-size: 1.2rem; */
    padding: 10px;
    height: 2rem;
    border-radius: var(--b-radius-md);
    border: none;
    ${(props) => props.$error && "outline:2px solid var(--color-warning);"};

    &:focus {
        outline: 3px solid var(--color-brand-green-100);
    }
`;

const TextArea = styled.textarea`
    font-size: 0.9rem;
    padding: 10px;
    height: 10rem;
    border-radius: var(--b-radius-md);
    resize: none;
    border: none;
    ${(props) => props.$error && "outline:2px solid var(--color-warning);"};

    &:focus {
        outline: 3px solid var(--color-brand-green-100);
    }
`;

const Div = styled.div`
    display: grid;
    text-align: left;
    margin: 0 1rem;
    position: relative;
    .tooltip {
        display: none;
        transition: visibility 1s;
    }
    &:hover {
        .tooltip {
            display: initial;
        }
    }
`;

const Span = styled.span`
    font-size: 1.7rem;
    min-width: 1.7rem;
    display: inline-block;
`;

const Tooltip = styled.ul`
    background-color: var(--color-brand-green-100);
    color: #fff;
    text-align: justify;
    list-style-type: circle;

    border-radius: var(--b-radius-sm);
    padding: 0.5rem 1rem 0.5rem 2rem;
    position: absolute;
    max-width: 30rem;
    z-index: 1;
    top: -5px;
    left: 105%;
    li {
        min-width: 14rem;
        max-width: 30rem;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent var(--color-brand-green-100) transparent
            transparent;
    }
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
    error,
    tooltip,
    clearError,
}) {
    useEffect(() => {
        if (ref.current) {
            ref.current.value = initialValue;
        }
    }, [initialValue]);

    const ref = useRef();
    const handleRequirements = (e) => {
        // if (rule.test(e.target.value) === false) {
        //     e.target.style.outline = "2px solid var(--color-warning)";
        // } else {
        //     e.target.style.outline = "3px solid green";
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // }
    };

    return (
        <>
            <Span>{icon}</Span>
            <Div>
                <Label>{label}</Label>
                {type !== "textArea" ? (
                    <Input
                        $error={error || null}
                        onChange={(e) => handleRequirements(e)}
                        type={type}
                        placeholder={label}
                        name={name}
                        style={style}
                        ref={ref}
                        disabled={disabled}
                        onClick={clearError}
                    />
                ) : (
                    <TextArea
                        $error={error || null}
                        disabled={disabled}
                        placeholder={label}
                        name={name}
                        onChange={(e) => handleRequirements(e)}
                        style={style}
                        ref={ref}
                        onClick={clearError}
                    ></TextArea>
                )}
                {tooltip && (
                    <Tooltip className="tooltip">
                        {tooltip.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </Tooltip>
                )}
            </Div>
        </>
    );
}

export default InputForm;
