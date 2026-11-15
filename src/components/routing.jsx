import { Route, Routes } from "react-router-dom"
import { Menu } from "./menu"
import { Homepage } from "./homepage"
import { Addrecipe } from "./addrecipe"
import { Login } from "./login"
import { Details } from "./details"
import { About } from "./about"

export const Routing = () => {
    return <Routes>
        <Route path="manu" element={<Menu></Menu>}></Route>
        <Route path="homepage" element={<Homepage></Homepage>}></Route>
        <Route path="addrecipe" element={<Addrecipe></Addrecipe>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="details/:c" element={<Details></Details>}></Route>
        <Route path="about" element={<About></About>}></Route>

    </Routes>
}