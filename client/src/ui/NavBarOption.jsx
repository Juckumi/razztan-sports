import { useState } from "react";
import { useNavigate } from "react-router"
import { useClickOutside } from "../hooks/useClickOutside";
import styled from 'styled-components'


const NavOption = styled.div`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 1rem;
    color: var(--color-brand-bone-100);
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
        
        span {
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
        span {
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
    position:absolute;top:9.8rem;left: 0;
    background: var(--color-brand-green-500);
    width: 20rem;
    height: 100vh;
    z-index: -1;
    animation: aparecerDesdeArriba 1s ease forwards; 
    border-radius: 0 0 0.6rem 0.6rem ;

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
    color:white;
    padding: 2.5rem;
    width:100%;
    border-radius: 1rem;
    z-index: 20;


`



function NavBarOption({link, label,list = []}) {
    const navigate = useNavigate();
    const [isOpen,setOpen] = useState(false);
    console.log(list)


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
       
       <NavOption active={!isOpen ? 'false': 'true'} onClick={handleClickSelect}>
       <span> {label}</span>
        {isOpen && 
                <List ref ={ref}  >
                   {list?.map((element,index) =>
                    <Li  key={index}  onClick={()=> handleLink(element.link)}>
                        {element.label}
                    </Li >
                )} 
                </List>
                }
        

       </NavOption>: 
       <NavOption active='false' onClick={()=> handleLink(link)} >
             <span> {label}</span>
        </NavOption>

    )
}

export default NavBarOption
