import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import spoonacularService from "../../services/spoonacular.service"

const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [recipe, setRecipe] = useState({})

    const loadData = () => {
        spoonacularService
            .getRecipeById(id)
            .then(({ data }) => {
                console.log(data)
                setRecipe(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Container>
            <h1>Recipe Details Page</h1>
            <hr />
            <RecipeCard id={id} />
        </Container>
    )
}

export default RecipeDetailsPage