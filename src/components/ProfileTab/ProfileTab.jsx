import './ProfileTab.css'
import { useState, useContext, useEffect } from 'react'
import { Tab, Tabs, Button, Modal } from 'react-bootstrap'
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded'
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm'
import spoonacularService from "../../services/spoonacular.service"
import recipeService from "../../services/recipes.service"
import { MessageContext } from "../../context/userMessage.context"
import { AuthContext } from './../../context/auth.context'
import DbRecipeCard from '../DbRecipeCard/DbRecipeCard'
import ApiRecipeCard from '../ApiRecipeCard/ApiRecipeCard'
import Loader from '../Loader/Loader'

function ProfileTab() {

    const [showModal, setShowModal] = useState(false)
    const { setShowToast, setToastMessage } = useContext(MessageContext)
    const [myRecipes, setMyRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [apiFavRecipes, setApiFavRecipes] = useState(null)
    const [dbFavRecipes, setDbFavRecipes] = useState(null)


    useEffect(() => {
        loadRecipesData()
    }, [user])

    const loadRecipesData = () => {

        //User Recipes
        recipeService
            .getRecipeByOwner()
            .then(({ data }) => {
                setMyRecipes(data)
            })
            .catch(err => console.log(err))

        //User Fav Recipes
        const apiFavRecipesCopy = []
        const dbFavRecipesCopy = []
        user.favRecipes?.map(elm => {
            if (elm.length < 10) {
                spoonacularService
                    .getRecipeById(elm)
                    .then(({ data }) => {
                        data &&
                            apiFavRecipesCopy.push(data)
                        setApiFavRecipes(apiFavRecipesCopy)
                        setIsLoading(false)
                    })
                    .catch(err => console.log(err))
            } else {
                recipeService
                    .getRecipeById(elm)
                    .then(({ data }) => {
                        data &&
                            dbFavRecipesCopy.push(data)
                        setDbFavRecipes(dbFavRecipesCopy)
                        setIsLoading(false)
                    })
                    .catch(err => console.log(err))
            }
        })
    }

    const closeModal = () => setShowModal(false)

    const openModal = () => setShowModal(true)

    const fireFinalActions = () => {
        setShowToast(true)
        setToastMessage('Recipe created successfully')
        closeModal()
    }


    return (
        <>
            <Tabs
                defaultActiveKey="My Recipes"
                id="justify-tab-example"
                className="mb-3 black-text"
                justify
            >
                <Tab eventKey="Fav Recipes" title="Fav Recipes" tabClassName='favTab'>
                    {isLoading ? <Loader /> : <>
                        {user.favRecipes.length < 1 && <h5 className='mt-5'>You don't have favorites recipes yet</h5>}
                        {
                            (dbFavRecipes || apiFavRecipes) &&
                            <section className='favRec d-flex justify-content-start mb-3'>
                                {
                                    apiFavRecipes?.map(elm => {
                                        return <ApiRecipeCard key={elm.id} {...elm} />
                                    })
                                }
                                {
                                    dbFavRecipes?.map(elm => {
                                        return <DbRecipeCard key={elm._id} {...elm} />
                                    })
                                }
                            </section>
                        }</>}
                </Tab>

                <Tab eventKey="My Recipes" title="My Recipes" tabClassName='myRecTab'>
                    <section>
                        <Button className='newRecipeBtn' variant='outline-secondary' onClick={openModal}> <LibraryBooksRoundedIcon /> New Recipe</Button>
                        <div className='d-flex justify-content-start mt-3'>
                            {isLoading ? <Loader /> : <>
                                {myRecipes.length < 1 && <h5 className='mt-5'>You don't have recipes yet</h5>}
                                {myRecipes?.map(elm => {
                                    return <DbRecipeCard key={elm._id} {...elm} />
                                })}
                            </>}
                        </div>
                        <Modal size='xl' show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <img className='logoNavBar' src="https://res.cloudinary.com/dp0abawuh/image/upload/v1671093843/Frigo_logo_Mesa_de_trabajo_1_dd2tns.png" alt="LOGO FRIGO" />
                            </Modal.Header>
                            <Modal.Body>
                                <h4 className='NRTitle mt-3'>Create a new recipe</h4>
                                <NewRecipeForm fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>
                    </section>
                </Tab>

            </Tabs>
        </>
    )

}

export default ProfileTab