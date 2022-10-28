import { Outlet } from "react-router"
import Nav from "../components/Nav"
import { userAuth } from "../hooks/userAuth"

const Home = () => {
    userAuth()
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default Home