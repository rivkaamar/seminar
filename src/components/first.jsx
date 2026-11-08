import { useState} from "react"
import { Btn } from "./btn"
export const First = ()=>{

    const [mycolor,setMycolor]= useState("green")
    const f1 = () => {
        setMycolor("pink")
    }
    return <>

    <div style={{backgroundColor:mycolor}}>
        hiii
    </div>
    <Btn func1 = {f1}></Btn>
    </>
}