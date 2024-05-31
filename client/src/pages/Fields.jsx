import styled from "styled-components";
import Spinner from "../ui/Spinner";

import useFields from "../features/fields/useFields";
import Pagination from "../ui/Pagination";
import FieldCard from "../features/fields/FieldCard";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../ui/Button";

const StyledTable = styled.div`
    width: 100%;
    padding: 2rem 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    grid-gap: 10px;

    @media (max-width: 1250px) {
        grid-template-columns: 1fr;
    }
`;
const StyledSection = styled.section`
    background-image: url("/razztan-sports-assets-2.svg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: auto;
    height: 77vh;
`;
function Fields() {
    const [searchParams, setSearchparams] = useSearchParams();
    const navigate = useNavigate();

    const { fields, isLoading, limit, setPage, refecht } = useFields();
    console.log(fields, "fieldss");
    return (
        <StyledSection>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexFlow: "row",
                    padding: "2rem",
                    gap: "1rem",
                }}
            >
                <h2>Añade una pista</h2>
                <Button.Animated
                    $rounded
                    onClick={() => navigate("crear-pista")}
                >
                    +
                </Button.Animated>
            </div>
            {!isLoading ? (
                <>
                    {fields?.data?.length > 0 && fields?.paginate ? (
                        <>
                            <StyledTable>
                                {!isLoading &&
                                    fields?.data?.map((field) => (
                                        <FieldCard
                                            navigate={navigate}
                                            field={field}
                                            key={field.id}
                                        />
                                    ))}
                            </StyledTable>
                            <Pagination
                                page={fields?.paginate?.page}
                                totalPages={Math.ceil(
                                    fields?.paginate?.total / limit
                                )}
                                setPage={(value) => {
                                    setPage(value);
                                    setSearchparams(
                                        { page: value },
                                        { replace: true }
                                    );
                                }}
                            />
                        </>
                    ) : (
                        "No hay resultados de tu busqueda"
                    )}
                </>
            ) : (
                <Spinner />
            )}
            <Outlet context={[refecht]} />
        </StyledSection>
    );
}

export default Fields;
