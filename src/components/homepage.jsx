import { useState } from "react";
import { Link } from "react-router-dom";

export const Homepage = ()=>{

    const [recipes, setRecipes] = useState([{id:1, name:"salat", img:"logo192.jpg", time:20}, {id:2, name:"pizza", img:"logo512.jpg", time:30}]);
    return <div>
        {recipes.map((r, i) => {
            return <div key={i}>
                <li><Link to = "details"><img src={r.name}></img></Link></li>
            </div>
        })}
    </div>
}