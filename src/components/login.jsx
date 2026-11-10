import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const mynavigate = useNavigate()
    const checkManager = ()=>{
        if (username == "manager" && password == "1234") {
            mynavigate('/addrecipe')
        }
    }

    return <form>
        <input type="text" placeholder="Username"  onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" onClick={()=>checkManager()}>Login</button>
    </form>
}