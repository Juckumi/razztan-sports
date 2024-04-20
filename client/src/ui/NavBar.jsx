import NavBarOption from "./NavBarOption"

const navLinks = [
    {label:'Eventos' ,link:'sa',list:['nuevos eventos','eventos activos','archivo de eventos']},
    {label:'Sport' ,link:'/user',list:['Baloncesto','futbol','polo','cricket']},
    {label:'News' ,link:'sa'},
    {label:'About Us' ,link:'sa'}
]

function NavBar() {
    return (
        <div style={{display:'flex',justifyContent:'space-around'}} >
            {navLinks?.map((navLink,index) => 
                    <NavBarOption 
                    key={index} 
                    link={navLink?.link} 
                    label={navLink?.label}
                    list={navLink.list ? navLink.list : []}
                    
                    ></NavBarOption>

            )}
        </div>
    )
}

export default NavBar
