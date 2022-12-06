import { createContext, useState } from 'react'

const RecipeContext = createContext()

function RecipeProviderWrapper(props) {


    return (
        <RecipeContext.Provider value={{}}>
            {props.children}
        </RecipeContext.Provider>
    )

}


export { RecipeContext, RecipeProviderWrapper }