import './RecipesResults.css'
import { Card, Container, Row} from 'react-bootstrap'
import { elementAcceptingRef } from '@mui/utils'
import { Link } from 'react-router-dom'
import { ConfirmationNumber } from '@mui/icons-material'

const RecipesResults = ({ recipesToSearch }) => {

    return (
        <>
            {recipesToSearch && <section className="recipeResults">
                {recipesToSearch.map((elm, idx) => {
                    return (
                        <Link  key={idx} to={`/recipes/${elm.id}/information`}>
                            <Card className="recipeResultsCard">
                                <Card.Img className='imgResult' src={elm.image} alt="Card image" />
                                <p className='recipeRsultsT'>{elm.title}</p>
                            </Card>
                        </Link>
                    )
                }
                )}
            </section>}
        </>
    )
}

export default RecipesResults