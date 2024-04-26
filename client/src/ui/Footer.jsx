import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: var(--color-grey-100);
    height: 10vh;
    color: var(--color-brand-bone-300);
`;

function Footer() {
    return (
        <StyledFooter>
            <h1>Este es el footer</h1>
        </StyledFooter>
    )
}

export default Footer
