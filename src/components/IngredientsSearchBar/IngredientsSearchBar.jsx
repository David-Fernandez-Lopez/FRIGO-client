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
import ingredientsService from '../../services/ingredients.service'
import Select from 'react-select'

import { IngredientsContext } from '../../context/ingredients.context'

const IngredientsSearchBar = ({ setQuery }) => {

    const [inputValue, setInputValue] = useState('')
    const [queryArr, setQueryArr] = useState([])

   const {ingredients} = useContext(IngredientsContext)

    const searchRecipes = e => {
        setInputValue(e.target.value)
    }

    const handleKeys = e => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            let queryArrCopy1 = [...queryArr]
            queryArrCopy1.push(inputValue)
            setQueryArr(queryArrCopy1)
            setInputValue('')
        }
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
   
    const options = ingredients.map(elem => {
        return { label: elem.name, value:elem.value}
    })


    return (

        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-4" controlId="ingredient">
                <Row>
                    <Col md={{ span: 7, offset: 2 }} >

                        <Select 
                            // value={selectedOption}
                            onChange={event => console.log(event)}
                            options={options} />
                        
                        {/* <SelectSearch options={options}
                            autoComplete='on'
                            search='true' 
                            value={options.map(elm => {
                                return(elm.value)
                            })}
                            onChange={() => console.log('aquí')}
                            name='ingredients'
                            placeholder='Search by ingredient'
                        /> */}
                        <Form.Control type="text" name="ingredients" value={inputValue} onKeyDown={handleKeys} onChange={searchRecipes} placeholder='Search by ingredient' />
                    </Col>
                    <Col md={{ span: 2 }}>
                        <Button variant="dark" type="submit"><SearchIcon /></Button>
                    </Col>
                </Row>
                <p className='mt-3'> {queryArr.map((elm, idx) => {
                    return <span className='badge bg-light me-2 text-capitalize text-dark' key={idx}>{elm} <HighlightOffIcon onClick={() => handleIgredients(idx)} /></span>
                })}</p>
            </Form.Group>
        </Form>
    )

}

export default IngredientsSearchBar


