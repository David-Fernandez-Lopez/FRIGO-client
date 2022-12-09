import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import AddIcon from '@mui/icons-material/Add'


function NewShoppingListItem() {


    const { shoppingList, setShoppingList} = useContext(ShoppingListContext)
    const [ingredientsData, setIngredientsData] = useState(
        {
            name: '',
            quantity: 0,
            units: ''
        }
    )

    const handleInputChange = e => {

        const { name, value } = e.target
        setIngredientsData({ ...ingredientsData, [name]: value })
    }

    const newIngredient = () => setShoppingList([...shoppingList, ingredientsData])

    const {name, quantity, units} = ingredientsData

    return (

        <Form.Group className="mb-3" controlId="ingredients">
            <Form.Label>Ingredients</Form.Label>            
            <Row>                
                <Col md={{ span: 10 }}>                                                            
                            <Row className="mb-3">                                
                                <Col>                                    
                                    <Form.Control type="text" placeholder="Ingredient Name" value={name} onChange={handleInputChange} name="name" />                                    
                                </Col>
                                
                                <Col md={{ span: 2 }}>                                    
                                    <Form.Control type="number" placeholder="Quantity" value={quantity} onChange={handleInputChange} name="quantity" />                                    
                                </Col>
                                
                                <Col md={{ span: 2 }}>                                    
                                    <Form.Select aria-label="ingredient.units" value={units} onChange={handleInputChange} name="units">                                        
                                        <option>Please select a Unit of Measurement</option>                                        
                                        <option>mg</option>                                        
                                        <option>ml</option>                                        
                                    </Form.Select>                                    
                                </Col>                                                     
                            </Row>                                           
                </Col>
                
                <Col md={{ span: 2 }}>                    
                    <Button variant="dark" onClick={newIngredient}><AddIcon /> Ingredient</Button>                    
                </Col>                
            </Row>          

        </Form.Group>
        
        
    )

}

export default NewShoppingListItem