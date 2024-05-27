import styled from "styled-components";
import Searcher from "../../../ui/Searcher";
import Button from "../../../ui/Button";
import { MdOutlineCancel } from "react-icons/md";
import { useRef, useState } from "react";
import { useAllusers } from "./useAllUsers";
import UserRow from "./UserRow";
import Spinner from "../../../ui/Spinner";

const Table = styled.div`
    height: 30rem;
    overflow-y: auto;
    background-color: var(--color-brand-bone-300);
`;

const InviteContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > :first-child {
        width: 23rem;

        input {
            width: 16rem;
        }
    }
`;

const ClearButton = styled(Button)`
    padding: 0.3rem;
    display: flex;
    align-items: center;
    border-radius: 50%;
    * {
        margin: 0;
        padding: 0;
    }
`;

const SearcherContainer = styled.div`
    /* background-color: var(--color-brand-bone-300); */
    display: flex;
    justify-content: center;
    align-items: center;
`;

function EventInvite() {
    const ref = useRef();
    const { users, search, setSearch, isLoading } = useAllusers();

    console.log(users, "usersss");

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

    return (
        <InviteContainer>
            <SearcherContainer>
                <Searcher type="text" onChange={handleSearch} ref={ref} />
                <ClearButton onClick={handleReset}>
                    <MdOutlineCancel />
                </ClearButton>
            </SearcherContainer>
            <Table>
                {!isLoading ? (
                    <>
                        {users.length > 0
                            ? users.map((user) => (
                                  <UserRow key={user.id} user={user} />
                              ))
                            : `No se ha encontrado ningun usuario   "${search}" `}
                    </>
                ) : (
                    <Spinner />
                )}
            </Table>
        </InviteContainer>
    );
}

export default EventInvite;
