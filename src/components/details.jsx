export const AdditionalDetails = ({ recipe }) => {
    return (
        <div style={{ marginTop: '30px', padding: '20px', border: '2px dashed #333' }}>
            <h2>פרטים נוספים</h2>
            <p>שם המתכון: {recipe.name}</p>
            <p>זמן הכנה: {recipe.time} דקות</p>
            <div>
                <img src={recipe.img} alt={recipe.name} width="300" />
            </div>
        </div>
    );
};
