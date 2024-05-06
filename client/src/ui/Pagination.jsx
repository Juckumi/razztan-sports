import styled from 'styled-components';
import { FiSkipBack,FiSkipForward  } from "react-icons/fi";

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const Div = styled.div`
display:flex;
justify-content: center;
align-items: center;
color:var(--color-white);
background-color: var(--color-brand-green-500);
padding:1rem;
margin:1rem;
border-radius: 50%;
cursor:pointer;
transition: 0.5s;

&&:hover{
    background-color: var(--color-brand-green-300);

}

`


function Pagination({page,totalPages,setPage}) {


    const handlePreviousPage = () => {
       if(page-1 !== 0) setPage(page-1)
    }
    const handleNextPage  = () => {
        if(page+1 <= totalPages) setPage(page+1)
    }
    return (
        <Container>
            <Div onClick={handlePreviousPage} > <FiSkipBack /> </Div>
                <div>
                    Página {page} de {totalPages}
                </div>
            <Div onClick={handleNextPage}> <FiSkipForward /> </Div>
        </Container>
    )
}

export default Pagination
