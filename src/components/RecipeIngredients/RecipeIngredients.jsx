import { Row } from 'react-bootstrap'
import './RecipeIngredients.css'
import RestaurantIcon from '@mui/icons-material/Restaurant'

function RecipeIngredients({ extendedIngredients, servings }) {


    return (
        <>
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
        </>
    )

}

export default RecipeIngredients