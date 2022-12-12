import { Row } from 'react-bootstrap'
import './RecipeIngredients.css'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { ShoppingListContext } from '../../context/shoppingList.context'
import { useContext } from 'react'
import { capitalize } from '@mui/material'

function RecipeIngredients({ extendedIngredients, servings }) {
    

    const { shoppingList } = useContext(ShoppingListContext)

    console.log(extendedIngredients)

    const isInShoppingList = extendedIngredients?.map(elm => {

        const ingredient = { name: elm.name.toUpperCase(), amount: parseInt(elm.amount), unit: elm.unit } 
        
        if (shoppingList.includes(ingredient.name)) {
            console.log(ingredient)
        }
    })

    return (
        <>
            <div className='IngrContainer'>
                <h3 className='dbIngTitle'>Ingredients</h3>
                <p className='servings'>{servings} <RestaurantIcon /></p>
                <br />
                <Row>
                    {extendedIngredients?.map((elm, idx) => {
                        return <p className='block' key={idx}> {capitalize(elm.name)} - <span>{elm.amount}</span> <span>{elm.unit}</span> </p>
                    }
                    )}
                </Row>
            </div>
        </>
    )

}

export default RecipeIngredients