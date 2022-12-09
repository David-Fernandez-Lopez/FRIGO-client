import './ApiRecipeSteps.css'

function ApiRecipeSteps({ analyzedInstructions }) {
    // if (analyzedInstructions) {
    //     let { steps: instructions } = analyzedInstructions[0]
    //     console.log('funciona??', instructions)
    // }

    return (
        <>
            {analyzedInstructions?.map((elm, idx) => {
                return <p key={idx}>{elm.number} - {elm.step}</p>
            })}
        </>
    )

}

export default ApiRecipeSteps