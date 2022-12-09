import { Container } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import DbRecipeSteps from "../../components/DbRecipeSteps/DbRecipeSteps"
import ApiRecipeSteps from "../../components/ApiRecipeSteps/ApiRecipeSteps"
import RecipeIngredients from "../../components/RecipeIngredients/RecipeIngredients"
import spoonacularService from "../../services/spoonacular.service"
import recipeService from "../../services/recipes.service"


const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [apiRecipe, setApiRecipe] = useState(null)
    const [dbRecipe, setDbRecipe] = useState(null)

    const loadData = () => {

        if (id.length < 10) {
            spoonacularService
                .getRecipeById(id)
                .then(({ data }) => {
                    setApiRecipe(data)
                })
                .catch(err => console.log(err))
        } else {
            recipeService
                .getRecipeById(id)
                .then(({ data }) => {
                    setDbRecipe(data)
                })
                .catch(err => console.log(err))
        }

    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <Container>
            {dbRecipe === null ? <RecipeCard {...apiRecipe} /> : <RecipeCard {...dbRecipe} />}
            {dbRecipe === null ? <RecipeIngredients {...apiRecipe} /> : <RecipeIngredients {...dbRecipe} />}
            {dbRecipe === null ? <ApiRecipeSteps {...apiRecipe} /> : <DbRecipeSteps {...dbRecipe} />}
        </Container>
    )
}

export default RecipeDetailsPage