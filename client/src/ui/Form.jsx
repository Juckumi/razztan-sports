import styled from "styled-components";

const Form = styled.form`
    position: relative;
    padding: 1rem;
    margin: 0.5rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    min-height: 20rem;
    min-width: 30rem;
    & > :last-child {
        border: none;
    }

    @media (max-width: 610px) {
        min-height: 20rem;
        width: 100%;
        min-width: initial;
        margin: 0;
    }
`;

export default Form;
