import './RecipeIngredients.css'

function RecipeIngredients({ extendedIngredients }) {


    return (
        <>
            <h3>Ingredients</h3>
            <br />
            {extendedIngredients?.map((elm, idx) => {
                return <p key={idx}><span>{elm.amount}</span> <span>{elm.unit}</span> of {elm.name}</p>
            }
            )}
            <hr />
        </>
    )

}

export default RecipeIngredients