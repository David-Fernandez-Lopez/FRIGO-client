import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import { useState, useEffect, useContext, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useReactToPrint } from "react-to-print"
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
import PrintIcon from '@mui/icons-material/Print'
import './../../components/RecipeCard/RecipeCard.css'
import './RecipeDetailsPage.css'

const RecipeDetailsPage = () => {

    const { id } = useParams()

    const [showModal, setShowModal] = useState(false)
    const [apiRecipe, setApiRecipe] = useState(null)
    const [dbRecipe, setDbRecipe] = useState(null)
    const [userFavRecipes, setUserFavRecipes] = useState(null)
    const [favRecipe, setFavRecipe] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const { user, refreshToken } = useContext(AuthContext)
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

    useEffect(() => {
        dbRecipe?.owner === user?._id && setIsOwner(true)
    }, [dbRecipe])

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
                refreshToken()
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
                refreshToken()
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

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <Container className="RecipeDetailsPage" ref={componentRef}>
            {user &&
                <>
                    {!favRecipe ? <Button onClick={addRecipeToFav} className='favBtn mt-3'><FavoriteBorderIcon /></Button> :
                        <Button onClick={removeRecipeFromFav} className='favBtn mt-3'><FavoriteIcon /></Button>}
                </>
            }
            {!dbRecipe ? <RecipeCard {...apiRecipe} /> : <RecipeCard {...dbRecipe} />}
            <Button className='PrintButton mt-3 me-3 noPrint' variant="outline-secondary"
                size='sm' onClick={handlePrint} > <PrintIcon /> <span>Print</span> </Button>
            {dbRecipe &&
                <>
                    {isOwner &&
                        <Button size='sm' onClick={openModal} variant="danger noPrint" className='mt-3'>DELETE</Button>
                    }
                </>
            }
            <Modal size='md' show={showModal} onHide={closeModal}>
               <Modal.Header closeButton>
                    <img className='logoFrigo' src="https://res.cloudinary.com/dp0abawuh/image/upload/v1671093843/Frigo_logo_Mesa_de_trabajo_1_dd2tns.png" alt="LOGO FRIGO" />
                </Modal.Header>
                <Modal.Body>
                    <p className='deleteModalTitle mt-3'>Are you sure you want to delete your recipe?</p>
                    <div className="deleteRecipeBtn">
                        <Button onClick={deleteRecipe} className='yesBtn mt-3'>Yes</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Col>
                <Row>
                    <Col md={12}>
                        {!dbRecipe ? <RecipeIngredients {...apiRecipe} /> : <RecipeIngredients {...dbRecipe} />}
                    </Col>
                    <Col className='ms-5' md={12}>
                        {!dbRecipe ? <ApiRecipeSteps {...apiRecipe} /> : <DbRecipeSteps {...dbRecipe} />}
                    </Col>
                </Row>
            </Col>
            <hr />
        </Container>
    )
}

export default RecipeDetailsPage