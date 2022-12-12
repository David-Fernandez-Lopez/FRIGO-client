import { Form, Button, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'
import { measurementUnitsContext } from "../../context/measurementUnits.context"


function NewIngredientForm({ ingredientsData, setIngredientsData }) {

    const { measurementsUnits } = useContext(measurementUnitsContext)

    const handleIngredientsChange = (idx, e) => {

        const ingredientsDataCopy = [...ingredientsData]
        ingredientsDataCopy[idx][e.target.name] = e.target.value
        setIngredientsData(ingredientsDataCopy)
    }

    const newIngredient = () => setIngredientsData([...ingredientsData, { name: '', amount: 0, unit: '' }])

    const deleteIngredient = idx => {
        const ingredientsDataCopy = [...ingredientsData]
        ingredientsDataCopy.splice(idx, 1)
        setIngredientsData(ingredientsDataCopy)
    }


    return (

        <Form.Group className="mb-3" controlId="ingredients">
            <Form.Label>Ingredients</Form.Label>
            <Row>
                <Col md={{ span: 10 }}>
                    {ingredientsData.map((elm, idx) => {
                        return (

                            <Row className="mb-3" key={idx}>
                                <Col>
                                    <Form.Control type="text" placeholder="Ingredient Name" value={elm.name} onChange={e => handleIngredientsChange(idx, e)} name="name" />
                                </Col>

                                <Col md={{ span: 2 }}>
                                    <Form.Control type="number" placeholder="amount" value={parseInt(elm.amount)} onChange={e => handleIngredientsChange(idx, e)} name="amount" />
                                </Col>

                                <Col md={{ span: 2 }}>
                                    <Form.Select aria-label="ingredient.unit" value={elm.unit} onChange={e => handleIngredientsChange(idx, e)} name="unit">
                                        <option>Unit of Measurement</option>
                                        {measurementsUnits.map(elem => {
                                            return <option key={elem._id}>{elem.unit}</option>
                                        })}
                                    </Form.Select>
                                </Col>
                                <Col md={{ span: 1, offset: 1 }}>
                                    <Button variant="danger" onClick={() => deleteIngredient(idx)}> <DeleteForeverIcon /> </Button>
                                </Col>
                            </Row>
                        )
                    })}
                </Col>

                <Col md={{ span: 2 }}>
                    <Button variant="dark" onClick={newIngredient}><AddIcon /> Ingredient</Button>
                </Col>
            </Row>

        </Form.Group>


    )

}

export default NewIngredientForm