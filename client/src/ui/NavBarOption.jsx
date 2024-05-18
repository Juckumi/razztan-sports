import { useState } from "react";
import { useLocation, useNavigate } from "react-router"
import { useClickOutside } from "../hooks/useClickOutside";
import styled from 'styled-components'
import { useHeaderAnimation } from "../hooks/useHeaderAnimation";


const NavOption = styled.div`
    ${ (props) => props.right === 'true'?
    '':
    ''}
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 1rem;
    cursor: pointer;

    /* Verificar si la propiedad active es falsa */
    ${props => props.active === 'false' ? `
        &:hover span:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: -15px;
            left: 0;
            transform: scaleX(1);
            background: var(--color-brand-bone-300);
            transform-origin: bottom left;
            transition: transform 0.5s ease-out;
        }
        
        && > span {
            position: relative;
            transition: transform 0.5s ease-out;
        }
        
        span:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            bottom: -15px;
            left: 0;
            transform: scaleX(0);
            background: var(--color-brand-bone-300);
            transform-origin: bottom right;
        }
    ` : `
    && >span {
            position: relative;
            transition: transform 0.5s ease-out;
        }
        span:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        bottom: -15px;
        left: 0;
        transform: scaleX(1);
        background: var(--color-brand-bone-300);
        }
    
    
    
    `}



`;


const List = styled.ul`
    position:absolute;top:10rem;right:0;
    background: inherit;
    width: 20rem;
    height: 100vh;
    z-index: 10;
    animation: aparecerDesdeArriba 1s ease forwards; 
    border-radius: 0 0 0.6rem 0.6rem ;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;


    @keyframes aparecerDesdeArriba {
    from { 
    transform: scaleY(-0);
    transform-origin: top;

    }
    to {

      transform: scaleY(100%) ;
      transform-origin: top;

    }

}

`

const Li = styled.li`

    background: var(--color-brand-green);
    color:inherit;
    padding: 2.5rem;
    width:100%;
    border-radius: 1rem;
    


`
const Icon = styled.span`
        display: flex;
        justify-content: space-around;
        :first-child{
        font-size:1.3rem;
        align-items:center;
        margin-right: 0.4rem;
        padding: 0;
        }


`



function NavBarOption({navLink}) {
    const {label,link,list,icon,right} = navLink;
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen,setOpen] = useState(false);

    const handleClickSelect = (e) => {
        e.preventDefault()
        setOpen(()=> true)
    }
    const handleCloseSelect = () => {
        setOpen(()=> false)
    }
    const handleLink = (link) => {
        navigate(link)
    }
    const ref = useClickOutside(handleCloseSelect)


    


    return (
        list.length > 0 ? 
        (  <>
                <NavOption active={!isOpen ? 'false': 'true'} right={right} onClick={handleClickSelect}>
                    <Icon>{icon} {label}</Icon>    
                </NavOption>
   
                {isOpen && 
                    <List ref ={ref} >
                        {list?.map((element,index) =>
                                <Li key={index}  onClick={()=> handleLink(element.link)}>
                                    {element.label}
                                </Li >
                            )
                        } 
                    </List>
                }
     </>
    ): 
      //TODO:Falta que cuando se le de a events se marque como activo events y el navOtions de mas abajo

        (<NavOption active={ location.pathname.includes(link) ? 'true':'false'} right={right} onClick={()=> handleLink(link)} >
            <Icon>{icon} {label}</Icon>
        </NavOption>)
    )
}

export default NavBarOption
