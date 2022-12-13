import { Row } from 'react-bootstrap'
import './RecipeIngredients.css'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { ShoppingListContext } from '../../context/shoppingList.context'
import { useContext } from 'react'
import capitalize  from './../../utils/capitalize'
import spoonacularUnitsConversor  from './../../utils/spoonacularUnitsConversor'
import Loader from './../Loader/Loader'


function RecipeIngredients({ extendedIngredients, servings }) {
    

    const { localShoppingList } = useContext(ShoppingListContext)

    // console.log(localShoppingList)

    const editedIngredients = extendedIngredients && spoonacularUnitsConversor(extendedIngredients)

    // let cardColor

    // editedIngredients?.map(elm => {        
    //     let cardColor = localShoppingList.forEach(item => (item.name === elm.name) ? cardColor = 'green' : cardColor = 'red')
    // })
    

        
    
    return (
        <>
            {extendedIngredients
                ?
                <div className='IngrContainer'>                    
                    <h3 className='dbIngTitle'>Ingredients</h3>                    
                    <p className='servings'>{servings} <RestaurantIcon /></p>                    
                    <br />
                    
                    <Row>                        
                        {editedIngredients?.map((elm, idx) => {                        
                            return <p className='block' key={idx}> {capitalize(elm.name)} - <span>{elm.amount}</span> <span>{elm.unit}</span> </p>                            
                        }                            
                        )}                        
                    </Row>                    
                </div>
                :
                <Loader/>
            }
        </>
    )

}

export default RecipeIngredients