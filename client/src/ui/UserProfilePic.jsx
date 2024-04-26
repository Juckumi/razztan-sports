import { useState } from "react";
import { getUser } from "../api/userApi"
import { useClickOutside } from "../hooks/useClickOutside"
import { useNavigate } from "react-router";

function UserProfilePic() {
    const handleClose = () => {
        setShowing(()=> (false))
    }
    const handleOpen = () => {
        setShowing(()=> (true))
    }
    const handleLink = (link) => {
        navigate(link)
    }
    const navigate = useNavigate();
    const user = getUser()
    const [isShowing,setShowing] = useState();
    const ref = useClickOutside(handleClose);
  
    console.log(user)
    return (
        <div style={{position:'relative'}} ref={ref} >
            <img ref={ref} onClick={handleOpen} style={{borderRadius:'130rem',objectFit: 'cover', width:'4.5rem',height:'4.5rem'}}src={user.profilePicture} alt="profile-pic-razztan-sports"  />
            {isShowing && <ul style={{position:'absolute' ,right:0,top:'5em',backgroundColor:'white'}} >
                <li onClick={() => handleLink('/indentify/iniciar-sesion')} style={{padding:'1rem'}}>Iniciar sesion</li>
                <li  onClick={() => handleLink('/indentify/registrarse')} style={{padding:'1rem'}}>Registrarse</li>
            </ul>}
        </div>
    )
}

export default UserProfilePic
