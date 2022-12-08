import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import Category from "../../components/Category/Category"
import UserMessage from "../../components/UserMessage/UserMessage"
import IngredientsSerachBar from "../../components/IngredientsSearchBar/IngredientsSerachBar"
import spoonacularService from "../../services/spoonacular.service"
import './HomePage.css'



const HomePage = () => {

    const [query, setQuery] = useState('')
    const [recipesToSerach, setrecipesToSerach] = useState([])

    const loadData = () => {

        const paramsObj = { query: query, number: '1' }
        const searchParams = new URLSearchParams(paramsObj)

        spoonacularService
            .getRecipeByIngredients(searchParams.toString())
            .then(({ data }) => {
                setrecipesToSerach(data)
                console.log('data', data)
            })
            .catch(err => console.log(err))
    }

    console.log('estoy en el padre', query)

    useEffect(() => {
        loadData()
    }, [query])




    return (
        <Container className="homepageForm">
            <h2 className="homepageTitle mb-3">What's in your fridge?</h2>
            <IngredientsSerachBar setQuery={setQuery} />
            {/* <Category /> */}
            <hr />
            <h2>Placeholder Categories</h2>

        </Container>
    )
}

export default HomePage