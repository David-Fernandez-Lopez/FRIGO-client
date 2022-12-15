import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useEffect, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import AddIcon from '@mui/icons-material/Add'
import dataTreatment from "../../utils/dataTreatment.js"
import { measurementUnitsContext } from "../../context/measurementUnits.context.js"


function NewShoppingListItem() {

    const { measurementsUnits } = useContext(measurementUnitsContext)


    const { localShoppingList, setLocalShoppingList} = useContext(ShoppingListContext)
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
    
        const addItemToShoppingList = data => {

            const treatedData = dataTreatment(data)
            let listCopy = [...localShoppingList]

            let duplicated = listCopy.find(obj => obj.name === treatedData.name && obj.unit === treatedData.unit)

            if (!duplicated) {
                listCopy.push(treatedData)
                return listCopy
            }

            const sumAmount = duplicated.amount + treatedData.amount

            const modifiedList = listCopy.map(elm => {
                                
                return {
                    ...elm,
                    amount: elm.name === treatedData.name && elm.unit === treatedData.unit ? sumAmount : elm.amount
                    }
                })

            return modifiedList
        }
   
        setLocalShoppingList(addItemToShoppingList(ingredientsData))
        setIngredientsData({
            name: '',
            amount: 0,
            unit: ''
        })           

    }

    const {name, amount, unit} = ingredientsData

    return (

        <Form.Group className="mb-3 mt-5" controlId="ingredients">
            <Row>                
                <Col md={{ span: 8, offset:1 }}>                                                            
                    <Row className="mb-3">      
                        <Col>   
                            <Form.Control type="text" placeholder="Ingredient Name" value={name} onChange={handleInputChange} name="name" /> 
                        </Col>
                                
                        <Col md={{ span: 2 }}>  
                            <Form.Control type="number" placeholder="Amount" value={amount? amount : ''} onChange={handleInputChange} name="amount" /> 
                        </Col>
                        
                        <Col md={{ span: 4 }}>     
                            <Form.Select aria-label="unit" value={unit} onChange={handleInputChange} name="unit">
                                <option>Unit of Measurement</option>                                
                                {measurementsUnits.map(elem => {                                            
                                    return <option key={elem._id}>{elem.unit}</option>                                    
                                })}                                
                            </Form.Select>
                        </Col>    
                    </Row>            
                </Col>
                
                <Col md={{ span: 2 }}>                    
                    <Button variant="dark" onClick={()=> (newIngredient())}><AddIcon /> Ingredient</Button>                    
                </Col>                
            </Row>          

        </Form.Group>
        
        
    )

}

export default NewShoppingListItem