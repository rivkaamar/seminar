import { useState } from "react"

export const Son = ({funcadd})=>{
    const [name,setname] = useState("")
    return <>(
    <input onChange = {(e)=>setname(e.target.value)} type="text" placeholder="enter your name"/>
    <button onClick={()=>{funcadd(name), setname("")}}>+</button>
    )
    </>
}