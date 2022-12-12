import { Col, Container, Row, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import DbRecipeSteps from "../../components/DbRecipeSteps/DbRecipeSteps"
import ApiRecipeSteps from "../../components/ApiRecipeSteps/ApiRecipeSteps"
import RecipeIngredients from "../../components/RecipeIngredients/RecipeIngredients"
import spoonacularService from "../../services/spoonacular.service"
import recipeService from "../../services/recipes.service"
import userService from "../../services/user.service"

const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [apiRecipe, setApiRecipe] = useState(null)
    const [dbRecipe, setDbRecipe] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)
    const [favRecipe, setFavRecipe] = useState(false)


    useEffect(() => {
        loadCurrentUser()
        loadData()
    }, [])

    const loadCurrentUser = () => {

        userService
            .getCurrentUserById()
            .then(({ data }) => {
                setCurrentUser(data)

            })
            .catch(err => console.log(err))

        currentUser?.favRecipes.includes(id) && setFavRecipe(true)
    }

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

        userService
            .addRecipeToFav(id)
            .then(() => {
                loadData()
            })
            .catch(err => console.log(err))
    }

    const removeRecipeFromFav = () => {

        userService
            .removeRecipeFromFav(id)
            .then(() => {
                loadData()
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {!dbRecipe ? <RecipeCard {...apiRecipe} /> : <RecipeCard {...dbRecipe} />}
            <Button onClick={addRecipeToFav} variant="success">Add to Fav</Button>
            <Button onClick={removeRecipeFromFav} variant="success">Remove from Fav</Button>
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