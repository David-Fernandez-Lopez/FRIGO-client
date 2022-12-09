import './ApiRecipeSteps.css'
import Loader from '../Loader/Loader'
import { useState } from 'react'

function ApiRecipeSteps({ analyzedInstructions }) {
    // if (analyzedInstructions) {
    //     let { steps: instructions } = analyzedInstructions[0]
    //     console.log('funciona??', instructions)
    // }

    // const [steps, setSteps] = useState(null)

    // if (analyzedInstructions?.length >= 1) {
    //     setSteps(analyzedInstructions[0].steps)
    //     console.log('steps', steps)
    // }

    return (
        <>
            {/* {!steps ?
                <Loader />
                :
                <>
                    {steps?.map((elm, idx) => {
                        return <p key={idx}>{elm.number} - {elm.step}</p>
                    })}
                </>
            } */}
        </>
    )

}

export default ApiRecipeSteps