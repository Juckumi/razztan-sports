import Pagination from "../../ui/Pagination";
import { FaFilter } from "react-icons/fa6";

import styled from "styled-components";
import EventsCard, { Icon } from "./EventsCard";
import { useGetAllEvents } from "./useGetAllEvents";
import { useGetAllSports } from "./useGetAllSports";
import Spinner from "../../ui/Spinner";
import Searcher from "../../ui/Searcher";
import { useEffect, useRef, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../ui/Button";
import Select from "../../ui/Select";
import DateSpan from "../../ui/DateSpan";
import { useSearchParams } from "react-router-dom";

const ClearButton = styled(Button)`
    padding: 0.3rem;
    display: flex;
    align-items: center;
    * {
        margin: 0;
        padding: 0;
    }
`;

const StyledTable = styled.div`
    width: 100%;
    padding: 2rem 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    grid-gap: 10px;
`;
const SearcherContainer = styled.div`
    background-color: var(--color-brand-bone-300);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FiltersContainer = styled(SearcherContainer)`
    background-color: var(--color-brand-bone-300);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 0 0;
`;

function AllEvents() {
    const {
        events,
        isLoading,
        error,
        setPage,
        limit,
        setSearch,
        setSelectedFilters,
        selectedFilters,
    } = useGetAllEvents();
    console.log("🚀 => AllEvents => events:", events);
    const { sports } = useGetAllSports();
    const [searchParams, setSearchparams] = useSearchParams();

    const ref = useRef();
    let searchTimeout;
    const handleSearch = (e) => {
        const searchValue = e.target.value;

        if (searchValue.length > 2 || searchValue.length === 0) {
            clearTimeout(searchTimeout);

            searchTimeout = setTimeout(() => {
                setSearch(searchValue);
            }, 500);
        }
    };
    const handleReset = () => {
        ref.current.value = "";
        setSearch("");
    };
    const handleSelectChange = (item) => {
        setSelectedFilters(item);
    };

    if (error) return <div>Algo ha ido mal {error}</div>;
    return (
        <>
            <FiltersContainer>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Select
                        isFilter={true}
                        selectTitle="Deportes"
                        data={sports}
                        render={(sport) => (
                            <Icon sportName={sport.name} withText={true} />
                        )}
                        onSelectionChange={handleSelectChange}
                        multiple
                        initialvalue={selectedFilters || []}
                    />
                </div>
            </FiltersContainer>
            <SearcherContainer>
                <Searcher type="text" onChange={handleSearch} ref={ref} />
                <ClearButton onClick={handleReset}>
                    <MdOutlineCancel />
                </ClearButton>
            </SearcherContainer>
            <DateSpan>
                {events?.paginate?.total !== 0 &&
                    events?.paginate?.total &&
                    `Un total de "${events?.paginate?.total}" resultados`}
            </DateSpan>

            {!isLoading ? (
                <>
                    {events?.data?.length > 0 && events?.paginate ? (
                        <>
                            <StyledTable>
                                {!isLoading &&
                                    events?.data?.map((event) => (
                                        <EventsCard
                                            event={event}
                                            key={event.slug}
                                        />
                                    ))}
                            </StyledTable>
                            <Pagination
                                page={events?.paginate?.page}
                                totalPages={Math.ceil(
                                    events?.paginate?.total / limit
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

export default AllEvents;
