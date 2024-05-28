import styled from "styled-components";
import Button from "../../../ui/Button";

const StyledUserRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) =>
        props.$isSelected ? "var(--color-brand-beige-100)" : "initial"};
`;

const ImgDiv = styled.div`
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    img {
        right: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

function UserRow({ user, selectedUsersIds, setSelectedUsersIds }) {
    // const isSelected = selectedUsersIds.find(user.id);
    const isSelected = selectedUsersIds?.includes(user.id);

    return (
        <StyledUserRow $isSelected={isSelected}>
            <ImgDiv>
                <img src={user.profilePictureUrl} />
            </ImgDiv>
            {user.username}
            {!isSelected ? (
                <Button
                    $size="small"
                    $rounded
                    onClick={() =>
                        setSelectedUsersIds([...selectedUsersIds, user.id])
                    }
                >
                    +
                </Button>
            ) : (
                <Button
                    $size="small"
                    $rounded
                    onClick={() => {
                        setSelectedUsersIds([
                            ...selectedUsersIds.filter((id) => id !== user.id),
                        ]);
                    }}
                >
                    -
                </Button>
            )}
        </StyledUserRow>
    );
}

function UserRowFinal({ user }) {
    // const isSelected = selectedUsersIds.find(user.id);

    return (
        <StyledUserRow>
            <ImgDiv>
                <img src={user.profilePictureUrl} />
            </ImgDiv>
            <div></div>

            {user.username}
        </StyledUserRow>
    );
}

UserRow.Final = UserRowFinal;

export default UserRow;
