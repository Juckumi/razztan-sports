import styled, { keyframes } from "styled-components";

// Define la animación de rotación
const spinAnimation = keyframes`
  to {
    transform: rotate(360deg); /* Rotación completa */
  }
`;

// Define el estilo del spinner
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const SpinnerElement = styled.div`
    width: 50px; /* Ancho del spinner */
    height: 50px; /* Altura del spinner */
    border: 3px solid #ccc; /* Grosor y color del borde */
    border-radius: 50%; /* Hace que el spinner sea circular */
    border-top-color: var(
        --color-brand-green-500
    ); /* Color del borde superior */
    animation: ${spinAnimation} 1s linear infinite; /* Animación de rotación */
`;

function Spinner() {
    return (
        <SpinnerContainer id={"spinner"}>
            <SpinnerElement />
        </SpinnerContainer>
    );
}

export default Spinner;
