import SearchIcon from '@mui/icons-material/Search'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useContext, useEffect, useState } from 'react'


const RecipesSearchBar = ({ setQuery }) => {

    const [inputValue, setInputValue] = useState('')

    const searchRecipes = e => {
        setInputValue(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        setQuery(inputValue)
        setInputValue('')
    }

    return (
        <Form onSubmit={handleFormSubmit} >
            <Form.Group className="mb-4" controlId="ingredient">
                <Row>
                    <Col md={{ span: 7, offset: 2 }} >
                        <Form.Control type="text" name="recipes" value={inputValue} onChange={searchRecipes} placeholder='Search Recipes' />
                    </Col>
                    <Col md={{ span: 1 }}>
                        <Button variant="dark" type="submit"><SearchIcon /></Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )

}

export default RecipesSearchBar