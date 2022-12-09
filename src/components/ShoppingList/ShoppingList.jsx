import './ShoppingList.css'
import { Row, Col , ListGroup, Button} from 'react-bootstrap'

import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useState } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'


function ShoppingList() {

    const { shoppingList, deleteItem } = useContext(ShoppingListContext)
    


    return (
        <Row>
            {
                shoppingList.map((elem, idx) => {
                    return (
                        <Col key={ idx} md={{ span: 6 }}>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={{ span: 6 }}>
                                        <p>{elem.name}</p>
                                        </Col>

                                        <Col md={{ span: 2 }}>
                                        <p>{elem.quantity}</p>
                                        </Col>

                                        <Col md={{ span: 2 }}>
                                        <p>{elem.units}</p>
                                        </Col>

                                        <Col className='d-grid' md={{ span: 2 }}>
                                            <Button  variant="danger" onClick={() => deleteItem(idx)} > <DeleteForeverIcon /> </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    )
                })
            }
        </Row>
    )

}

export default ShoppingList