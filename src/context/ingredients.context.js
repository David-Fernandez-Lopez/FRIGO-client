import { createContext, useEffect, useState } from 'react'
import ingredientsService from '../services/ingredients.service'

const IngredientsContext = createContext()

function IngredientProviderWrapper(props) {

    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
       ingredientsLoader() 
    }, [])

    const ingredientsLoader = () => {
        
        ingredientsService
            .getIngredients()
            .then(({ data }) => setIngredients(data))
            .catch(err => console.log(err))
    }
    
    return (
        <IngredientsContext.Provider value={{ ingredients }}>
            {props.children}
        </IngredientsContext.Provider>
    )
}

export { IngredientsContext, IngredientProviderWrapper }