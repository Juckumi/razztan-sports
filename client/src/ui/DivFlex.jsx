import styled from "styled-components";

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

export default DivFlex;
