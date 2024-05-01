import styled  from 'styled-components';

const  StyledForm = styled.form`
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-brand-bone-300);
    border-radius: var(--b-radius-lg);
    :last-child {
        border: none;
    }

`;
 


function Form({children,onSubmit}) {
    return (
        <StyledForm onSubmit={(e)=> onSubmit(e)}>
            {children}
        </StyledForm>
    )
}

export default Form
