import './IngredientsSearchBar.css'
import 'react-select-search/style.css'
import SearchIcon from '@mui/icons-material/Search'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useContext, useEffect, useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
// import { SettingsPowerRounded } from '@mui/icons-material'
// import SelectSearch from 'react-select-search'
// import { useSelect } from 'react-select-search'
// import { useLoaderData } from 'react-router-dom'
import Select from 'react-select'

import { IngredientsContext } from '../../context/ingredients.context'

const IngredientsSearchBar = ({ setQuery }) => {

    const [queryArr, setQueryArr] = useState([])

    const {ingredients} = useContext(IngredientsContext)


    const handleKeys = e => {
        let queryArrCopy1 = [...queryArr]
        queryArrCopy1.push(e.label)
        setQueryArr(queryArrCopy1)
    }

    const handleIgredients = idx => {
        let queryArrCopy2 = [...queryArr]
        queryArrCopy2.splice(idx, 1)
        setQueryArr(queryArrCopy2)
    }


    const handleFormSubmit = e => {
        e.preventDefault()
        setQuery(queryArr.toString())
    }

    const clearQuery = () => {
        setQuery(null)
        setQueryArr([])
    }
   
    const options = ingredients.map(elem => {
        return { label: elem.name, value:elem._id}
    })


    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-4" controlId="ingredient">
                <Row>
                    <Col md={{ span: 7, offset: 2 }} >

                        <Select value='' onChange={e=>handleKeys(e)} options={options} placeholder='Insert your ingredients'/>
                        
                    </Col>
                    <Col md={{ span: 1 }}>
                        <Button variant="dark" type="submit"><SearchIcon /></Button>
                    </Col>
                    <Col md={{ span: 2 }}>
                        <Button variant="white" className='clearBtn' onClick={clearQuery}>Clear search</Button>
                    </Col>
                </Row>
                <p className='mt-3 ms-3 ingredientsList'> {queryArr.map((elm, idx) => {
                    return <span className='ingredientResult badge me-2 text-capitalize text-dark' key={idx}>{elm} <HighlightOffIcon onClick={() => handleIgredients(idx)} /></span>
                })}</p>
            </Form.Group>
        </Form>
    )

}

export default IngredientsSearchBar


