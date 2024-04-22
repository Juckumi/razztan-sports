import { RouterProvider} from "react-router-dom"
import router from './router/index.jsx'
import './styles/index.css'

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
