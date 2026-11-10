import { useState } from "react"

export const Addrecipe = ()=>{
    const [recipe,setrecipe] = useState({})
    return <form>
        <input type="text" placeholder="recipename"  onChange={(e) => setrecipe({...recipe,name:e.target.value})} />
        <input type="img" placeholder="image" onChange={(e) => setrecipe({...recipe,img:e.target.value})} />
        <input type="number" placeholder="minutes" onChange={(e) => setrecipe({...recipe,time:e.target.value})} />
        {/* <button type="submit" onClick={()}></button> */}
    </form>
}