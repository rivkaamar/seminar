import { useState } from "react";

export const Homepage = () => {
    const [recipes, setRecipes] = useState([
        {id: 1, name: "salat", img: "logo192.jpg", time: 20}, 
        {id: 2, name: "pizza", img: "logo512.jpg", time: 30}
    ]);

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <div>
            <h1>רשימת מתכונים</h1>
            
            {recipes.map((r, i) => {
                return (
                    <div 
                        key={i} 
                        onClick={() => setSelectedRecipe(r)} 
                        style={{ cursor: 'pointer', margin: '15px 0', border: '1px solid #ccc', padding: '10px', display: 'inline-block' }}>
                        <div><img src={r.img} alt={r.name} width="100" /></div>
                    </div>
                );
            })}

            {selectedRecipe && <AdditionalDetails recipe={selectedRecipe} />}
        </div>
    );
};

