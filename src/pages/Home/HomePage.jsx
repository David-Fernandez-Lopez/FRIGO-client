import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import Category from "../../components/Category/Category"
import UserMessage from "../../components/UserMessage/UserMessage"
import IngredientsSearchBar from "../../components/IngredientsSearchBar/IngredientsSearchBar"
import spoonacularService from "../../services/spoonacular.service"
import './HomePage.css'
import RecipesResults from "../../components/RecipesResults/RecipesResults"
import Loader from "../../components/Loader/Loader"

const HomePage = () => {

    const [query, setQuery] = useState(null)
    const [recipesToSearch, setrecipesToSearch] = useState([])

    useEffect(() => {
        loadData()
    }, [query])


    const loadData = () => {

        const paramsObj = { query: query, number: '14' }
        const searchParams = new URLSearchParams(paramsObj)

        recipesToSearch ?
            spoonacularService
                .getRecipesByCategory(searchParams.toString())
                .then(({ data }) => {
                    setrecipesToSearch(data.results)
                })
                .catch(err => console.log(err))
            :
            setQuery(null)
    }


    return (
        <Container className="homepageForm">
            <div className="bgImage">
                <img className="bgImageHP" src='https://res.cloudinary.com/dp0abawuh/image/upload/v1671119419/pexels-photo-349610_xr5o3z.png' alt='bgImage'></img>
            </div>
            <div className="HPBody">
                <h1 className="homepageTitle titles mb-5">What's in your fridge?</h1>
                <IngredientsSearchBar setQuery={setQuery} />
                <div className="homeDiv">
                    <RecipesResults recipesToSearch={recipesToSearch} />
                </div>
            </div>
            {/* <Category /> */}
        </Container>
    )
}

export default HomePage