import { useState } from "react";
import { useNavigate } from "react-router"
import { useClickOutside } from "../hooks/useClickOutside";
import style from '../styles/uiStyles/NavOptions.module.css'


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
       
       <div className={style.line} onClick={handleClickSelect}>
        {label}
        {isOpen && 
                <ul ref ={ref} className={style.ul}  >
                   {list?.map((element,index) =>
                    <li key={index} className={style.li} onClick={()=> handleLink(element.link)}>
                        {element.label}
                    </li>
                )} 
                </ul>
                }
        

       </div>: 
       <div onClick={()=> handleLink(link)} className={style.line} >{label}</div>

    )
}

export default NavBarOption
