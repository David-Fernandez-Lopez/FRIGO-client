import './NewRecipeForm.css'
import { useState, useEffect, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import recipeService from "../../services/recipes.service"
import uploadServices from "../../services/upload.service"
import cuisineService from "../../services/cuisines.service"
import dishTypeService from "../../services/dishTypes.service"
import sortAlphabetically from '../../utils/sort'
import NewIngredientForm from "../NewIngredientForm/NewIngredientForm"
import { AuthContext } from './../../context/auth.context'
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import NewStepForm from "../NewStepForm/NewStepForm"

const NewRecipeForm = ({ fireFinalActions }) => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [cuisine, setCuisine] = useState([])
    const [dishType, setdishType] = useState([])
    const { refreshToken } = useContext(AuthContext)
    const [errors, setErrors] = useState([])

    const [instructionsData, setInstructionsData] = useState(
        [{
            number: 1,
            step: ''
        }]
    )
    const [ingredientsData, setIngredientsData] = useState(
        [{
            name: '',
            amount: 0,
            unit: ''
        }]
    )
    const [recipeData, setRecipeData] = useState({
        title: '',
        readyInMinutes: 0,
        servings: 0,
        cuisines: '',
        dishTypes: '',
        summary: '',
        image: ''
    })


    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {

        const promises = [
            cuisineService.getCuisines(),
            dishTypeService.getDishType(),
        ]

        Promise
            .all(promises)
            .then(([cuisines, dishType]) => {
                const cuisineSortedByName = sortAlphabetically(cuisines)
                setCuisine(cuisineSortedByName)
                const dishTypeSortedByName = sortAlphabetically(dishType)
                setdishType(dishTypeSortedByName)

            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {

        const { name, value } = e.target
        setRecipeData({ ...recipeData, [name]: value })
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setRecipeData({ ...recipeData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleFormSubmit = e => {

        e.preventDefault()
        refreshToken()
        const recipe = { ...recipeData, extendedIngredients: ingredientsData, analyzedInstructions: instructionsData }
        console.log(recipe)
        recipeService
            .createRecipe(recipe)
            .then(() =>
                fireFinalActions()
            )
            .catch(err => setErrors(err.response.data.errorMessages))

    }

    
    const { title, readyInMinutes, servings, cuisines, dishTypes, summary } = recipeData

    return (
        <Form onSubmit={handleFormSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={handleFileUpload} />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="summary">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={summary} onChange={handleInputChange} name="summary" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={{ span: 3 }}>
                    <Form.Group className="mb-3" controlId="dishTypes">
                        <Form.Label>Dish Type</Form.Label>
                        <Form.Select aria-label="dishTypes" value={dishTypes} onChange={handleInputChange} name="dishTypes">
                            <option>Please select a Dish Type</option>
                            {dishType.map(elem => {
                                return <option key={elem._id}>{elem.dishType}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={{ span: 3 }}>
                    <Form.Group className="mb-3" controlId="cuisines">
                        <Form.Label>Cuisine</Form.Label>
                        <Form.Select
                            aria-label="cuisines"
                            value={cuisines}
                            onChange={handleInputChange}
                            name="cuisines">
                            
                            <option>Please select a Cuisine</option>
                            {cuisine.map(elem => {
                                return <option key={elem._id}>{elem.cuisine}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                </Col>
   
                <Col md={{ span: 3 }}>
                    <Form.Group className="mb-3" controlId="servings">
                        <Form.Label>Servings</Form.Label>
                        <Form.Control
                            type="number"
                            value={servings}
                            onChange={handleInputChange}
                            name="servings"
                             />
                    </Form.Group>
                </Col>
                <Col md={{ span: 3 }}>
                    <Form.Group className="mb-3" controlId="readyInMinutes">
                        <Form.Label>Cooking Time (min)</Form.Label>
                        <Form.Control type="number" value={readyInMinutes} onChange={handleInputChange} name="readyInMinutes" />
                    </Form.Group>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <NewIngredientForm ingredientsData={ingredientsData} setIngredientsData={setIngredientsData} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewStepForm instructionsData={instructionsData} setInstructionsData={setInstructionsData} />
                </Col>
            </Row>
            {errors.length ? <ErrorMessage>{errors.map(e => <p key={e}>{e}</p>)}</ErrorMessage> : undefined}

            <div className="d-grid">
                <Button
                    className='createRecipeBtn'
                    variant="dark"
                    type="submit"
                    disabled={loadingImage}>{loadingImage ? 'Loading image...' : 'Create'}
                </Button>
            </div>
        </Form>
    )
}

export default NewRecipeForm