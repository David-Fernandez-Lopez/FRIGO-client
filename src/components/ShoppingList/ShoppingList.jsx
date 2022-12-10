import './ShoppingList.css'
import { Row, Col , ListGroup, Button} from 'react-bootstrap'

import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useState } from "react"
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';


function ShoppingList() {

    const { shoppingList, deleteItem } = useContext(ShoppingListContext)
    


    return (
        <Row>
            {
                shoppingList.map((elem, idx) => {
                    return (
                        <Col className='shopListItems' key={ idx} md={{ span: 6 }} >
                            <ListGroup>
                                <ListGroup.Item className='cardShopList'>
                                    <Row>
                                        <Col md={{ span: 6 }}>
                                        <p className='shopListName'>{elem.name}</p>
                                        </Col>

                                        <Col md={{ span: 2 }}>
                                        <p className='shopListInfo'>{elem.amount}</p>
                                        </Col>

                                        <Col md={{ span: 2 }}>
                                        <p className='shopListInfo'>{elem.unit}</p>
                                        </Col>

                                        <Col className='d-grid' md={{ span: 2 }}>
                                            <Button  className='deleteItemButton' variant="danger" onClick={() => deleteItem(idx)} > <RemoveRoundedIcon /> </Button>
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