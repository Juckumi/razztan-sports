import styled from "styled-components";
import Button from "../../../ui/Button";
import { useCreateInvite } from "./useCreateInvite";

const StyledUserRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
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

function UserRow({ user }) {
    const { postInvite } = useCreateInvite();
    return (
        <StyledUserRow>
            <ImgDiv>
                <img src={user.profilePictureUrl} />
            </ImgDiv>
            {user.username}
            <Button $size="small" $rounded>
                +
            </Button>
        </StyledUserRow>
    );
}

export default UserRow;
