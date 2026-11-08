import { useState } from "react"

export const Ben = ({funcadd})=>{
    const [obj,setobj]= useState({})
    return <div>
        <input onChange = {(e)=>setobj({...obj,id:e.target.value})} type="text" placeholder="enter your id" />
        <input onChange = {(e)=>setobj({...obj,firstname:e.target.value})} type="text" placeholder="enter your firstname" />
        <input onChange = {(e)=>setobj({...obj,lastname:e.target.value})} type="text" placeholder="enter your lastname" />
        <label>choose city</label>
        <select onChange = {(e)=>setobj({...obj,city:e.target.value})}>
            <option>beit-shemesh</option>
            <option>jerusalem</option>
        </select>
        <button onClick={()=>funcadd(obj)}>+</button>
    </div>
}