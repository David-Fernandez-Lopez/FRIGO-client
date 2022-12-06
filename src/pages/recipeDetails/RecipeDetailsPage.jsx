import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard/RecipeCard"

const RecipeDetailsPage = () => {

    const { id } = useParams()
    
    // console.log(id)

    return (
       <Container>
            <h1>Recipe Details Page</h1>
            <hr />
            <RecipeCard id={ id } />
    </Container>
    )
}

export default RecipeDetailsPage