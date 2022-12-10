import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useEffect, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import AddIcon from '@mui/icons-material/Add'
import dataTreatment from "../../utils/dataTreatment.js"


function NewShoppingListItem() {


    const { shoppingList, setShoppingList, unifyItems} = useContext(ShoppingListContext)
    const [ingredientsData, setIngredientsData] = useState(
        {
            name: '',
            amount: 0,
            unit: ''
        }
    )
    
    
    
    const handleInputChange = e => {

        const { name, value } = e.target
        
        setIngredientsData({ ...ingredientsData, [name]: value })
    }

    const newIngredient = () => {

        const ingredientsDataCopy = { ...ingredientsData }
        console.log(ingredientsDataCopy)

        let ingredientsTreated = dataTreatment(ingredientsDataCopy)
        console.log(ingredientsTreated)

        setIngredientsData(ingredientsTreated)
        console.log(ingredientsData)
        
        setShoppingList([...shoppingList, ingredientsData])
        setIngredientsData({
            name: '',
            amount: 0,
            unit: ''
        })           
        unifyItems()
    }

    const {name, amount, unit} = ingredientsData

    return (

        <Form.Group className="mb-3" controlId="ingredients">
            <Row>                
                <Col md={{ span: 8, offset:1 }}>                                                            
                    <Row className="mb-3">      
                        <Col>   
                            <Form.Control type="text" placeholder="Ingredient Name" value={name} onChange={handleInputChange} name="name" /> 
                        </Col>
                                
                        <Col md={{ span: 2 }}>  
                            <Form.Control type="number" placeholder="Amount" value={amount || ''} onChange={handleInputChange} name="amount" /> 
                        </Col>
                        
                        <Col md={{ span: 4 }}>     
                            <Form.Select aria-label="unit" value={unit} onChange={handleInputChange} name="unit">  
                                <option>Unit of Measurement</option>     
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