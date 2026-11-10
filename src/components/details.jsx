import { useParams } from "react-router-dom"

export const Details = ()=>{
    const params = useParams()
    return <div>
        <img src="params.c" alt="" />
    </div>
}