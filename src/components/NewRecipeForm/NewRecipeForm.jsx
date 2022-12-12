import { useState, useEffect, useContext } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import recipeService from "../../services/recipes.service"
import uploadServices from "../../services/upload.service"
import cuisineService from "../../services/cuisines.service"
import dishTypeService from "../../services/dishTypes.service"
import sortAlphabetically from '../../utils/sort'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import NewIngredientForm from "../NewIngredientForm/NewIngredientForm"

const NewRecipeForm = ({ fireFinalActions }) => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [cuisine, setCuisine] = useState([])
    const [dishType, setdishType] = useState([])

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
        const recipe = { ...recipeData, extendedIngredients: ingredientsData, analyzedInstructions: instructionsData }
        console.log(recipe)
        recipeService
            .createRecipe(recipe)
            .then(() =>

                fireFinalActions()
            )
            .catch(err => console.log(err))
    }

    const handleInstructionsChange = (idx, e) => {

        const instructionsDataCopy = [...instructionsData]
        instructionsDataCopy[idx][e.target.name] = e.target.value
        setInstructionsData(instructionsDataCopy)
    }


    const newStep = (e) => {

        setInstructionsData([...instructionsData, { number: instructionsData.length + 1, step: '' }])
    }

    const deleteStep = idx => {

        const instructionsDataCopy = [...instructionsData]
        instructionsDataCopy.splice(idx, 1)
        setInstructionsData(instructionsDataCopy)
    }


    const { title, readyInMinutes, servings, cuisines, dishTypes, summary } = recipeData

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" value={title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="summary">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={summary} onChange={handleInputChange} name="summary" />
            </Form.Group>

            <Row>
                <Col>
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
                <Col>
                    <Form.Group className="mb-3" controlId="cuisines">
                        <Form.Label>Cuisine</Form.Label>
                        <Form.Select aria-label="cuisines" value={cuisines} onChange={handleInputChange} name="cuisines">
                            <option>Please select a Cuisine</option>
                            {cuisine.map(elem => {
                                return <option key={elem._id}>{elem.cuisine}</option>
                            })}
                        </Form.Select>
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
                    <Form.Group className="mb-3" controlId="instructions">
                        <Form.Label>Instructions</Form.Label>
                        <Row>
                            <Col md={{ span: 10 }}>
                                {instructionsData.map((elm, idx) => {
                                    return (
                                        <Row className="mb-3" key={idx}>
                                            <Col md={{ span: 1 }}>
                                                <Form.Control className="text-center" disabled type="text" value={parseInt(elm.number)} onChange={e => handleInstructionsChange(idx, e)} name="number" />
                                            </Col>
                                            <Col>
                                                <Form.Control type="text" value={elm.step} onChange={e => handleInstructionsChange(idx, e)} name="step" />
                                            </Col>
                                            <Col md={{ span: 1, offset: 1 }}>
                                                <Button className="deleteIngredientBtn" onClick={() => deleteStep(idx)}> <DeleteForeverIcon /> </Button>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Col>
                            <Col md={{ span: 2 }}>
                                <Button variant="dark" onClick={newStep}><AddIcon /> Step</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="servings">
                        <Form.Label>Servings</Form.Label>
                        <Form.Control type="number" value={servings} onChange={handleInputChange} name="servings" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="readyInMinutes">
                        <Form.Label>Cooking Time (min)</Form.Label>
                        <Form.Control type="number" value={readyInMinutes} onChange={handleInputChange} name="readyInMinutes" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Loading image...' : 'Create'}</Button>
            </div>
        </Form>
    )
}

export default NewRecipeForm