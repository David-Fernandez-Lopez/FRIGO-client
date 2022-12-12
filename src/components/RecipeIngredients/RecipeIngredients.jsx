import { Row } from 'react-bootstrap'
import './RecipeIngredients.css'
import RestaurantIcon from '@mui/icons-material/Restaurant'

function RecipeIngredients({ extendedIngredients, servings }) {


    return (
        <>
<<<<<<< HEAD
            <h3>Ingredients</h3>
            <br />
            {extendedIngredients?.map((elm, idx) => {
                return <p key={idx}><span>{elm.amount}</span> <span>{elm.unit}</span> of {elm.name}</p>
            }
            )}
=======
            <div className='IngrContainer'>
                <h3 className='dbIngTitle'>Ingredients</h3>
                <p className='servings'>{servings} <RestaurantIcon /></p>
                <br />
                <Row>
                {extendedIngredients?.map((elm, idx) => {
                    return <p key={idx}><span>{elm.amount}</span> <span>{elm.unit}</span> of {elm.name}</p>
                    }
                    )}
                </Row>
            </div>
>>>>>>> ec56dd2ef0a804494b53542b4374f654ca5cb4eb
        </>
    )

}

export default RecipeIngredients