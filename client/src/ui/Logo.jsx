import { useNavigate } from "react-router"
import RazztanSportsIcon from "./RazztanSportsIcon";
import styled from "styled-components";

const Span = styled.span`
    cursor: pointer;
`

function Logo({style = {fontSize:'6.5rem', color:  'var(--color-white)'}}) {
    const navigate = useNavigate();

    return (
        <div style={{textAlign:'center'}}>
            <Span onClick={()=> navigate('/user/dashboard')}>
                <RazztanSportsIcon  style={style} />
            </Span>
        </div>
    )
}

export default Logo
