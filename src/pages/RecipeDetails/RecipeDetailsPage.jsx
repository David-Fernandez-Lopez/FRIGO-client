import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import spoonacularService from "../../services/spoonacular.service"
import recipeService from "../../services/recipes.service"

const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [apiRecipe, setApiRecipe] = useState(null)
    const [dbRecipe, setDbRecipe] = useState(null)

    const loadData = () => {
        spoonacularService
            .getRecipeById(id)
            .then(({ data }) => {
                setApiRecipe(data)
            })
            .catch(err => console.log(err))

        console.log(apiRecipe)

        recipeService
            .getRecipeById(id)
            .then(({ data }) => {
                // console.log(data)
                setDbRecipe(data)
            })
            .catch(err => console.log(err))
    }

    console.log(apiRecipe)
    console.log(dbRecipe)

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Container>
            <h1>Recipe Details Page</h1>
            <hr />
            <RecipeCard  {...apiRecipe} />
        </Container>
    )
}

export default RecipeDetailsPage