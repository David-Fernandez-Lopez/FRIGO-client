import './RecipesResults.css'
import { Card } from 'react-bootstrap'

const RecipesResults = ({ recipesToSearch }) => {


    return (
        <>
            {recipesToSearch && <section className="CountriesList" style={{ "maxHeight": "50vh", "overflow": "scroll" }}>
                {recipesToSearch.map(elm => {
                    return (<Card className="bg-ligth text-black">
                        <Card.Img src={elm.image} alt="Card image" />
                        <Card.ImgOverlay>

                        </Card.ImgOverlay>
                    </Card>)
                }
                )}
            </section>}
        </>
    )
}

export default RecipesResults