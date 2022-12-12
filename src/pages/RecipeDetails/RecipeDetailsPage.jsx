import { Col, Container, Row, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import DbRecipeSteps from "../../components/DbRecipeSteps/DbRecipeSteps"
import ApiRecipeSteps from "../../components/ApiRecipeSteps/ApiRecipeSteps"
import RecipeIngredients from "../../components/RecipeIngredients/RecipeIngredients"
import spoonacularService from "../../services/spoonacular.service"
import recipeService from "../../services/recipes.service"
import authService from "../../services/auth.service"

const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [apiRecipe, setApiRecipe] = useState(null)
    const [dbRecipe, setDbRecipe] = useState(null)


    useEffect(() => {
        loadData()
    }, [])

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

    const addRecipeToFav = () => {

        authService
            .addRecipeToFav(id)
            .then(() => {
                loadData()
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {!dbRecipe ? <RecipeCard {...apiRecipe} /> : <RecipeCard {...dbRecipe} />}
            <Button onClick={addRecipeToFav} variant="success">Add to Fav</Button>
            <hr />
                <Col>
            <Row>
                    {!dbRecipe ? <RecipeIngredients {...apiRecipe} /> : <RecipeIngredients {...dbRecipe} />}             
                    {!dbRecipe ? <ApiRecipeSteps {...apiRecipe} /> : <DbRecipeSteps {...dbRecipe} />}
            </Row>
                </Col>
            <hr />
        </Container>
    )
}

export default RecipeDetailsPage