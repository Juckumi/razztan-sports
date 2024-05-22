import {  useState } from "react";
import styled from "styled-components"

const StyledSwitchContainer = styled.div`
    position: relative;
    width: 6rem;
    height: 3rem;
    border-radius: 3rem;
    background-color: var(--color-brand-bone-300);
    display: flex;
    align-items: center;

    input{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        border-radius: 3rem;

    }

`
const StyledSwitch = styled.div`
        color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        transition:   0.7s;
        transform: ${({ $isChecked}) =>
            $isChecked ? "translateX(138%)" : "translateX(0)"};
        background-color: ${({ $isChecked}) =>
            $isChecked ? "green" : "var(--color-grey-100)"};

        font-size: 1.5rem;

`
const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


function Switch({icon, checkedIcon, checked = false, message ,checkedMessage }) {
const [isChecked, setIsChecked] = useState(checked);
    return (
        <FlexDiv>
               {  message && checkedMessage ?  <p> {isChecked ? checkedMessage : message }</p> : message ? message : null }
                <StyledSwitchContainer>
                    <StyledSwitch $isChecked={isChecked}> 
                        {(icon && checkedIcon) ? isChecked ? checkedIcon : icon : icon ? icon : null}

                    </StyledSwitch>
                    <input type="checkbox"  onClick={(() => setIsChecked(!isChecked))} />

                </StyledSwitchContainer>

        </FlexDiv>
    )
}

export default Switch
