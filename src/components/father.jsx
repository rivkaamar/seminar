import { useState } from "react"

export const Father = ()=>{
    const [names,setnames] = useState(["rivka","dina","rachel","ayala","tamar"])
    const func = (name1)=>{
        setnames(v=>v.concat(name1))
    }
    return<>(
    {names.map((name,index)=>(<div key = {index}>{name}</div>))}
    <Son funcadd = {func}></Son>
    )
    </>
}