import NavBarOption from "./NavBarOption"

const navLinks = [
    {label:'Eventos' ,link:'sa',list:[{label:'nuevos eventos',link:'/nuevos-eventos'},{label:'eventos activos',link:'/eventos-activos'},{label:'eventos activos',link:'/eventos-activos'}]},
    {label:'Sport' ,link:'/user',list:[{label:'Baloncesto',link:'/baloncesto'},{label:'Futbol',link:'/futbol'},{label:'Tenis',link:'/tenis'},{label:'Polo',link:'/polo'}]},
    {label:'About Us' ,link:'sa'}
]

function NavBar() {
    return (
        <div style={{display:'flex',boxShadow:'0 10px 10px -10px var(--color-brand-green-100)',justifyContent:'center',background:'var(--gardient-brand-green)'
    }} >
            {navLinks?.map((navLink,index) => 
                    <NavBarOption 
                    key={index} 
                    link={navLink?.link} 
                    label={navLink?.label}
                    list={navLink.list ? navLink.list : []}
                    
                    />

            )}
        </div>
    )
}

export default NavBar
