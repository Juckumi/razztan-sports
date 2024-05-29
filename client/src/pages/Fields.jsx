import styled from "styled-components";
import Spinner from "../ui/Spinner";

import useFields from "../features/fields/useFields";
import Pagination from "../ui/Pagination";
import FieldCard from "../features/fields/FieldCard";
import { useNavigate, useSearchParams } from "react-router-dom";
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

function Fields() {
    const [searchParams, setSearchparams] = useSearchParams();

    const { fields, isLoading, limit, setPage, page } = useFields();
    console.log(fields, "fieldss");
    const navigate = useNavigate();
    if (isLoading) return <Spinner />;
    return (
        <>
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
            </div>{" "}
            {!isLoading ? (
                <>
                    {fields?.data?.length > 0 && fields?.paginate ? (
                        <>
                            <StyledTable>
                                {!isLoading &&
                                    fields?.data?.map((field) => (
                                        <FieldCard
                                            field={field}
                                            key={event.slug}
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
        </>
    );
}

export default Fields;
