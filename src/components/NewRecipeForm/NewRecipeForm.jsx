import { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import recipeService from "../../services/recipes.service"
import uploadServices from "../../services/upload.service"
import cuisineService from "../../services/cuisines.service"
import dishTypeService from "../../services/dishTypes.service"

const NewRecipeForm = ({ fireFinalActions }) => {

    const [cuisine, setCuisine] = useState([])
    const [dishType, setdishType] = useState([])

    const loadData = () => {
        cuisineService
            .getCuisines()
            .then(({ data }) => {
                const sortedByName = [...data]
                sortedByName.sort((a, b) => {
                    return a.cuisine.localeCompare(b.cuisine)
                })
                setCuisine(sortedByName)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])

    const [recipeData, setRecipeData] = useState({
        title: '',
        readyInMinutes: 0,
        servings: 0,
        inversions: '',
        instructions: '',
        cuisines: '',
        dishTypes: '',
        summary: '',
        ingredients: '',
        image: ''
    })

    const [loadingImage, setLoadingImage] = useState(false)

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
                console.log(
                    { res }
                )

                setRecipeData({ ...recipeData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        recipeService
            .create(recipeData)
            .then(() => fireFinalActions())
            .catch(err => console.log(err))
    }

    const { title, readyInMinutes, servings, image, instructions, cuisines, dishTypes, summary, ingredients } = recipeData

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
                        <Form.Label>dishTypes</Form.Label>
                        <Form.Select aria-label="dishTypes" value={dishTypes} onChange={handleInputChange} name="dishTypes">
                            <option>Please select a dishTypes</option>
                            <option>main course</option>
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
                    <Form.Group className="mb-3" controlId="ingredients">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control type="text" value={ingredients} onChange={handleInputChange} name="ingredients" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="instructions">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control type="text" value={instructions} onChange={handleInputChange} name="instructions" />
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
                        <Form.Label>readyInMinutes</Form.Label>
                        <Form.Control type="number" value={readyInMinutes} onChange={handleInputChange} name="readyInMinutes" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Loading image...' : 'Create New Recipe'}</Button>
            </div>
        </Form>
    )
}

export default NewRecipeForm