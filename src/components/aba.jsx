import { useState } from "react"
import { Ben } from "./ben"

export const ABA = ()=>{
    const [users,setusers] = useState([
        {id:"216884388",firstname:"rivka",lastname:"amar",city:"beit-shemesh"},
        {id:"336884388",firstname:"rachel",lastname:"levi",city:"jerusalem"}
    ])

    const add = (obj)=>{
        setusers(v=>v.concat(obj))
    }
    return <>
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>city</th>
                </tr>
                
            </thead>
            <tbody>
                {users.map((x)=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.firstname}</td>
                        <td>{x.lastname}</td>
                        <td>{x.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Ben funcadd = {add}></Ben>
    </>
}