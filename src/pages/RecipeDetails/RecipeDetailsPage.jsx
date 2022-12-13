import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import DbRecipeSteps from "../../components/DbRecipeSteps/DbRecipeSteps"
import ApiRecipeSteps from "../../components/ApiRecipeSteps/ApiRecipeSteps"
import RecipeIngredients from "../../components/RecipeIngredients/RecipeIngredients"
import { MessageContext } from "../../context/userMessage.context"
import spoonacularService from "../../services/spoonacular.service"
import { AuthContext } from './../../context/auth.context'
import recipeService from "../../services/recipes.service"
import userService from "../../services/user.service"
import './../../components/RecipeCard/RecipeCard.css'

const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [showModal, setShowModal] = useState(false)
    const [apiRecipe, setApiRecipe] = useState(null)
    const [dbRecipe, setDbRecipe] = useState(null)
    const [userFavRecipes, setUserFavRecipes] = useState(null)
    const [favRecipe, setFavRecipe] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const { user } = useContext(AuthContext)
    const { setShowToast, setToastMessage } = useContext(MessageContext)

    useEffect(() => {
        loadUserFavRecipes()
    }, [])

    const loadUserFavRecipes = () => {
        userService
            .getFavRecipes()
            .then(({ data }) => {
                setUserFavRecipes(data.favRecipes)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [userFavRecipes, favRecipe, user])


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

        dbRecipe?.owner === user?._id && setIsOwner(true)
        userFavRecipes?.includes(id) ? setFavRecipe(true) : setFavRecipe(false)

    }

    const addRecipeToFav = () => {

        userService
            .addRecipeToFav(id)
            .then(() => {
                loadData()
                loadUserFavRecipes()
                setShowToast(true)
                setToastMessage('Recipe add to fav')
            })
            .catch(err => console.log(err))
    }

    const removeRecipeFromFav = () => {

        userService
            .removeRecipeFromFav(id)
            .then(() => {
                loadData()
                loadUserFavRecipes()
                setShowToast(true)
                setToastMessage('Recipe removed from fav')
            })
            .catch(err => console.log(err))
    }

    const closeModal = () => setShowModal(false)

    const openModal = () => setShowModal(true)

    const navigate = useNavigate()

    const deleteRecipe = () => {

        recipeService
            .deleteRecipe(dbRecipe._id)
            .then(() => {
                closeModal()
                navigate('/profile')
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {user &&
                <>
                    {!favRecipe ? <Button onClick={addRecipeToFav} className='favBtn mt-3'><FavoriteBorderIcon /></Button> :
                        <Button onClick={removeRecipeFromFav} className='favBtn mt-3'><FavoriteIcon /></Button>}
                </>
            }
            {!dbRecipe ? <RecipeCard {...apiRecipe} /> : <RecipeCard {...dbRecipe} />}
            {dbRecipe &&
                <>
                    {isOwner &&
                        <Button onClick={openModal} className='mt-3'>DETELE</Button>
                    }
                </>
            }
            <Modal size='sm' show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4 className='NRTitle mt-3'>Are you sure?</h4>
                    <Button onClick={deleteRecipe} className='mt-3'>Yes</Button>
                </Modal.Body>
            </Modal>
            <Col>
                <Row>
                    <Col md={12}>
                        {!dbRecipe ? <RecipeIngredients {...apiRecipe} /> : <RecipeIngredients {...dbRecipe} />}
                    </Col>
                    <Col ms-5 md={12}>
                        {!dbRecipe ? <ApiRecipeSteps {...apiRecipe} /> : <DbRecipeSteps {...dbRecipe} />}
                    </Col>
                </Row>
            </Col>
            <hr />
        </Container>
    )
}

export default RecipeDetailsPage