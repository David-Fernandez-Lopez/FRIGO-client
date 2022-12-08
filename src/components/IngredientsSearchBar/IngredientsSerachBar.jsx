import './IngredientsSerachBar.css'
import { redirect } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useState } from 'react'
import { ContactSupportOutlined } from '@mui/icons-material'

const IngredientsSerachBar = ({ setQuery }) => {

    const [inputValue, setInputValue] = useState('')
    const [queryArr, setqueryArr] = useState([])

    const searchRecipes = e => {
        setInputValue(e.target.value)
    }

    const handleSpace = (e) => {
        if (e.keyCode === 32) {
            queryArr.push(inputValue)
            console.log(inputValue)
            setInputValue('')
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        setQuery(queryArr.toString())
    }

    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="ingredient">
                <Row>
                    <Col md={{ span: 6, offset: 2 }} >
                        <Form.Control type="text" name="ingredients" value={inputValue} onKeyDown={handleSpace} onChange={searchRecipes} placeholder='Search by ingredient' />
                    </Col>
                    <Col md={{ span: 2 }}>
                        <Button variant="dark" type="submit"><SearchIcon /></Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )

}

export default IngredientsSerachBar


