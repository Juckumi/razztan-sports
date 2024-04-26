import styled from "styled-components"

const StyledFormRow  = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
padding: 2rem 1rem;
border-top: 1px solid var(--color-brand-green-100);

`

function FormRow( {children}) {
    return (
        <StyledFormRow>
             {children}
        </StyledFormRow>
    )
}

export default FormRow
