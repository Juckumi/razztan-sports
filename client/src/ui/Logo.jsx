// eslint-disable-next-line react/prop-types
function Logo({isWhite}) {
    return (
        <img style={{width:'8rem',height:'8rem'}} src={`../../public/razztan-sports${isWhite ? '-white': ''}.svg`} alt="logo-razztan-sports"/>
    )
}

export default Logo
