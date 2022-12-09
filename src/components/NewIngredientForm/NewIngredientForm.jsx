import { Form, Button, Row, Col } from "react-bootstrap"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddIcon from '@mui/icons-material/Add'


function NewIngredientForm({ingredientsData, setIngredientsData}) {


    const handleIngredientsChange = (idx, e) => {

        const ingredientsDataCopy = [...ingredientsData]
        ingredientsDataCopy[idx][e.target.name] = e.target.value
        setIngredientsData(ingredientsDataCopy)
    }

    const newIngredient = () => setIngredientsData([...ingredientsData, { name: '', quantity: 0, units: '' }])

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
                                    <Form.Control type="number" placeholder="Quantity" value={elm.quantity} onChange={e => handleIngredientsChange(idx, e)} name="quantity" />                                    
                                </Col>
                                
                                <Col md={{ span: 2 }}>                                    
                                    <Form.Select aria-label="ingredient.units" value={elm.units} onChange={e => handleIngredientsChange(idx, e)} name="units">                                        
                                        <option>Please select a Unit of Measurement</option>                                        
                                        <option>mg</option>                                        
                                        <option>ml</option>                                        
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