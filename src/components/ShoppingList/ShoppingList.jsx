import './ShoppingList.css'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'

import { ShoppingListContext } from "../../context/shoppingList.context.js"
import { useContext, useState, useRef, useEffect } from "react"
import { useReactToPrint } from "react-to-print"
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import PrintIcon from '@mui/icons-material/Print'
import sortShoppingList from '../../utils/sortShoppingList'
import Loader from './../Loader/Loader'

function ShoppingList() {

    const { localShoppingList, deleteItem } = useContext(ShoppingListContext)
    const [sortedList, setSortedList] = useState([])

    useEffect(() => {
        setSortedList(localShoppingList && sortShoppingList(localShoppingList))
    }, [localShoppingList])

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className='melasuda'>
            <Button className='PrintButton mb-3'
                size='sm' onClick={handlePrint} > <PrintIcon /> <span>Print</span> </Button>

            <Row className='Print' ref={componentRef}>
                <h3 className='onlyToPrint'>My Shopping List</h3>
                {localShoppingList
                    ?
                    sortedList.map((elm, idx) => {
                        return (
                            <Col className='shopListItems' key={idx} md={{ span: 6 }} >
                                <ListGroup>
                                    <ListGroup.Item className='cardShopList'>
                                        <Row className='shopListRow'>
                                            <Col md={{ span: 6 }}>
                                                <p className='shopListName'>{elm.name}</p>
                                            </Col>

                                            <Col md={{ span: 2 }}>
                                                <p className='shopListInfo'>{elm.amount}</p>
                                            </Col>

                                            <Col md={{ span: 2 }}>
                                                <p className='shopListInfo'>{elm.unit}</p>
                                            </Col>

                                            <Col className='d-grid' md={{ span: 2 }}>
                                                <Button
                                                    className='deleteItemButton'
                                                    variant="danger"
                                                    onClick={() => deleteItem(elm)}
                                                > <RemoveRoundedIcon />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        )
                    })
                    :
                    <Loader />
                }
            </Row>
        </div>
    )

}

export default ShoppingList