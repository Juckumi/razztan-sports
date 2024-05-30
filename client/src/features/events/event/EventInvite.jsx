import styled from "styled-components";
import Searcher from "../../../ui/Searcher";
import Button from "../../../ui/Button";
import { MdOutlineCancel } from "react-icons/md";
import { useRef, useState } from "react";
import { useAllusers } from "./useAllUsers";
import UserRow from "./UserRow";
import Spinner from "../../../ui/Spinner";

import InviteForm from "./InviteForm";
import Form from "../../../ui/Form";

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

    &&:last-child {
        width: 20rem;
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function EventInvite() {
    const ref = useRef();
    const { users, search, setSearch, isLoading } = useAllusers();

    const [selectedUsersIds, setSelectedUsersIds] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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
        <>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <InviteContainer>
                    <SearcherContainer>
                        <Searcher
                            type="text"
                            onChange={handleSearch}
                            ref={ref}
                        />
                        <ClearButton onClick={handleReset}>
                            <MdOutlineCancel />
                        </ClearButton>
                    </SearcherContainer>
                    <ButtonGroup>
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            disabled={!selectedUsersIds.length > 0}
                        >
                            Invitacion
                        </Button>
                    </ButtonGroup>
                    <Table>
                        {!isLoading ? (
                            <>
                                {users.length > 0
                                    ? users.map((user) => (
                                          <UserRow
                                              key={user.id}
                                              user={user}
                                              selectedUsersIds={
                                                  selectedUsersIds
                                              }
                                              setSelectedUsersIds={
                                                  setSelectedUsersIds
                                              }
                                          />
                                      ))
                                    : `No se ha encontrado ningun usuario   "${search}" `}
                            </>
                        ) : (
                            <Spinner />
                        )}
                    </Table>
                </InviteContainer>
            </Form>
            {isOpen && (
                <InviteForm selectedUsersIds={selectedUsersIds} users={users} />
            )}
        </>
    );
}

export default EventInvite;
