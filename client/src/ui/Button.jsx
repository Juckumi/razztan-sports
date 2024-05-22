import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--b-radius-lg);
    background-color: var(--color-grey-100);
    color: var(--color-brand-bone-200);
    padding: 1rem 2rem;
    font-size: 1rem;
    transition: transform 1s;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    ${({ $rounded }) =>
        $rounded
            ? "padding:1rem; width: 3.5rem; height:3.5rem;   border-radius : 50%;"
            : ""}

    &&:hover {
        background-color: var(--color-grey-200);
    }
`;

export default Button;
