import { useState } from "react";
import { useNavigate } from "react-router"


function NavBarOption({link, label,list = []}) {
    const navigate = useNavigate();
    const [isOpen,setOpen] = useState(false);
    console.log(list)


    const handleClickSelect = (e) => {
        e.preventDefault()
        setOpen(()=> true)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(link)
    }
    
    return (
       list.length > 0 ? 
       
       <div style={{position:'relative',fontSize:'1.5rem',margin:'1rem',color:'black'}} onClick={handleClickSelect}>
        {label}
        {isOpen && 
                <div style={{position:'absolute',top:'3rem',border:'1px solid black'}}>
                   {list?.map((element,index) =>
                    <div key={index} style={{background:'green',color:'white',height:'3rem',border:'1px solid black',padding:'1rem',width:'15rem'}}>
                        {element}
                    </div>
                )} 
                </div>
                }
        

       </div>: 
       <div onClick={(e)=> handleSubmit(e)} style={{fontSize:'1.5rem',margin:'1rem',color:'black'}}>{label}</div>

    )
}

export default NavBarOption
