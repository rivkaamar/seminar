import { Link } from "react-router-dom"

export const Menu = ()=>{
    return <nav>
    <li><Link to = "about">About-page</Link></li>
    <li><Link to = "homepage">Home-page</Link></li>
    <li><Link to = "login">Login-page</Link></li>
    </nav>

}