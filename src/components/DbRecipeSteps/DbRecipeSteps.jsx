import './DbRecipeSteps.css'

function DbRecipeSteps({ analyzedInstructions }) {
    // if (analyzedInstructions) {
    //     let { steps: instructions } = analyzedInstructions[0]
    //     console.log('funciona??', instructions)
    // }

    console.log(analyzedInstructions)
    return (
        <>
            {analyzedInstructions?.map((elm, idx) => {
                return <p key={idx}>{elm.number} - {elm.step}</p>
            })}
        </>
    )

}

export default DbRecipeSteps