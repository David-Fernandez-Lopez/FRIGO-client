import './RecipesResults.css'
import { Card} from 'react-bootstrap'
import { elementAcceptingRef } from '@mui/utils'
import { Link } from 'react-router-dom'

const RecipesResults = ({ recipesToSearch }) => {

    return (
        <>
            {recipesToSearch && <section className="CountriesList" style={{ "maxHeight": "40vh"}}>
                {recipesToSearch.map((elm, idx) => {
                    return (
                     
                        <Link  key={idx} to={`/recipes/${elm.id}/information`}>
                            <Card className="bg-ligth text-black">
                                    <h5>{elm.title}</h5>
                                <Card.Img className='imgResult' src={elm.image} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
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