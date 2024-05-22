import styled from "styled-components";

const Form = styled.form`
    padding: 1rem;
    margin: 0.5rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    min-height: 20rem;
    min-width: 30rem;
    & > :last-child {
        border: none;
    }
`;

export default Form;
