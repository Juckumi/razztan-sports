import Searcher from "../ui/Searcher"
import NavBar from "../ui/NavBar"

import styled from 'styled-components'
import { Outlet} from "react-router"

const SearcherContainer = styled.div`
    background-color: var(--color-brand-bone-300);
`
const navLinks = [{label:'Mis eventos',link:'/user/events/jair',right:'true',list:[]},
{label:'Buscar Eventos',link:'/user/events/all',right:'true',list:[]}]
function Events() {   
    
    return (
        <section style={{textAlign:'center'}}>
            <NavBar navLinks={navLinks} color={'var(--color-grey-100)'} />
            <SearcherContainer>
                <Searcher />
            </SearcherContainer>
            <Outlet />
        </section>
    )
}

export default Events
