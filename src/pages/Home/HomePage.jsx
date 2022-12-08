import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import Category from "../../components/Category/Category"
import UserMessage from "../../components/UserMessage/UserMessage"
import IngredientsSerachBar from "../../components/IngredientsSearchBar/IngredientsSerachBar"
import spoonacularService from "../../services/spoonacular.service"
import './HomePage.css'
import RecipesResults from "../../components/RecipesResults/RecipesResults"

const HomePage = () => {

    const [query, setQuery] = useState('')
    const [recipesToSerach, setrecipesToSerach] = useState([])

    const loadData = () => {

        const paramsObj = { query: query, number: '2' }
        const searchParams = new URLSearchParams(paramsObj)

        spoonacularService
            .getRecipeByIngredients(searchParams.toString())
            .then(({ data }) => {
                setrecipesToSerach(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [query])

    return (
        <Container className="homepageForm">
            <h2 className="homepageTitle mb-3">What's in your fridge?</h2>
            <IngredientsSerachBar setQuery={setQuery} />
            {/* <RecipesResults recipesToSerach={recipesToSerach} /> */}
            {/* <Category /> */}
            <hr />
            <h2>Placeholder Categories</h2>

        </Container>
    )
}

export default HomePage