import './IngredientsSearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const IngredientsSearchBar = ({ setQuery }) => {

    const [inputValue, setInputValue] = useState('')
    const [queryArr, setQueryArr] = useState([])

    const searchRecipes = e => {
        setInputValue(e.target.value)
    }

    const handleKeys = e => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            queryArr.push(inputValue)
            setInputValue('')
        }
    }

    const handleIgredients = idx => {
        let queryArrCopy = [...queryArr]
        queryArrCopy.splice(idx, 1)
        setQueryArr(queryArrCopy)
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
                        <Form.Control type="text" name="ingredients" value={inputValue} onKeyDown={handleKeys} onChange={searchRecipes} placeholder='Search by ingredient' />
                    </Col>
                    <Col md={{ span: 2 }}>
                        <Button variant="dark" type="submit"><SearchIcon /></Button>
                    </Col>
                </Row>
                <p className='mt-3'> {queryArr.map((elm, idx) => {
                    return <span className='Ingredient' key={idx}>{elm} <HighlightOffIcon onClick={() => handleIgredients(idx)} /></span>
                })}</p>
            </Form.Group>
        </Form>
    )

}

export default IngredientsSearchBar


