import styled from "styled-components";
import { FiSkipBack, FiSkipForward, FiRewind } from "react-icons/fi";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    padding: 1rem;
    margin: 1rem;
    border-radius: 50%;
    transition: 0.5s;
`;
const ForwardPage = styled(Div)`
    background-color: ${(props) =>
        props.$pages * 1 + 1 <= props.$totalpages * 1
            ? "var(--color-brand-green-500);cursor:pointer;&&:hover{background-color: var(--color-brand-green-300);} "
            : "var(--color-brand-green-100)"};
`;
const PreviousPage = styled(Div)`
    background-color: ${(props) =>
        props.$pages * 1 - 1 > 0
            ? "var(--color-brand-green-500);cursor:pointer;&&:hover{background-color: var(--color-brand-green-300);}"
            : "var(--color-brand-green-100)"};
`;

function Pagination({ page, totalPages, setPage }) {
    const handleFirstPage = () => {
        if (page - 1 !== 0) setPage(1);
    };
    const handleLastPage = () => {
        if (page + 1 <= totalPages) setPage(totalPages);
    };

    const handlePreviousPage = () => {
        if (page - 1 !== 0) setPage(page - 1);
    };
    const handleNextPage = () => {
        if (page + 1 <= totalPages) setPage(page + 1);
    };
    return (
        <Container>
            <PreviousPage $pages={page} onClick={handleFirstPage}>
                <FiRewind />
            </PreviousPage>
            <PreviousPage $pages={page} onClick={handlePreviousPage}>
                <FiSkipBack />
            </PreviousPage>
            <div>
                Página {page} de {totalPages}
            </div>
            <ForwardPage
                onClick={handleNextPage}
                $pages={page}
                $totalpages={totalPages}
            >
                <FiSkipForward />
            </ForwardPage>
            <ForwardPage
                onClick={handleLastPage}
                $pages={page}
                $totalpages={totalPages}
            >
                <FiRewind style={{ transform: "rotate(180deg)" }} />
            </ForwardPage>
        </Container>
    );
}

export default Pagination;
