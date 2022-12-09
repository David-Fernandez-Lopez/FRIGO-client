import './ShoppingList.css'
import { Row, Col } from 'react-bootstrap'

import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useState } from "react"

function ShoppingList() {

    const { shoppingList, setShoppingList} = useContext(ShoppingListContext)

    return (
        <Row>
            {
                shoppingList.map(elem => {
                    return (
                        <Col md={{ span: 6 }}>
                            
                            <p>{elem.name}</p>
                            <p>{elem.quantity}</p>
                            <p>{elem.units}</p>

                        </Col>
                    )
                })
            }
        </Row>
    )

}

export default ShoppingList