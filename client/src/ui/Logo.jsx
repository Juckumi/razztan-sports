import { useNavigate } from "react-router"

function Logo({isWhite}) {
    const navigate = useNavigate();

    return (
        <div style={{textAlign:'center'}}>
            <img onClick={()=> navigate('/')} style={{width:'6.5rem',height:'6.5rem',cursor:'pointer'}} src={`../../public/razztan-sports${isWhite ? '-white': ''}.svg`} alt="logo-razztan-sports"/>
        </div>
    )
}

export default Logo
