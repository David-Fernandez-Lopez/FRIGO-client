import './CuisineCategory.css'

import { useState, useEffect } from "react"
// import CategoryCard from '../CategoryCard/CategoryCard'
import DbRecipeCard from '../DbRecipeCard/DbRecipeCard'
// import spoonacularService from "../../services/spoonacular.service"
import recipeService from "../../services/recipes.service"

import React from 'react'
import { Accordion } from 'react-bootstrap'

function CuisineCategory({ cuisine }) {

    const [category, setCategory] = useState(null)

    const loadData = () => {

        recipeService
            .getRecipesByCuisine(cuisine)
            .then(({ data }) => {
                setCategory(data)
            })
            .catch(err => console.log(err))

        // const paramsObj = { query: cuisine , number: '2' }
        // const searchParams = new URLSearchParams(paramsObj)

        // spoonacularService
        //     .getRecipesByCategory(searchParams.toString())
        //     .then(({data}) => {
        //         console.log(data)
        //         setCategory(data)
        //     })
        //     .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <Accordion.Body className='d-flex flex-nowrap justify-content-center'>
            {category?.map(elm => {
                return <DbRecipeCard key={elm._id} {...elm} />
                // return <CategoryCard className="item" data-value={elm._id}><CategoryCard {...elm} /></CategoryCard>
            })}
        </Accordion.Body>
    )

}

export default CuisineCategory