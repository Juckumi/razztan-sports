import { Outlet } from "react-router"


function LandingPage() {
    return (
          <>
          <Outlet />
              {/* <h3>Esta es la landing Pages</h3> */}
             <img src="https://www.tangol.com/blog/Fotos/Galeria/polo_0_202004020913310.JPG" alt="" style={{width:'100vw',objectFit:'cover'}}/>
          </>
    )
}

export default LandingPage
