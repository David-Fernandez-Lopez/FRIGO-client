import './CuisineCategory.css'

import { useState, useEffect } from "react"
import CategoryCard from '../CategoryCard/CategoryCard'
import spoonacularService from "../../services/spoonacular.service"

import React from 'react'
import { Accordion } from 'react-bootstrap'

function CuisineCategory({cuisine})  {

    const [category, setCategory] = useState([])
  

    const loadData = () => {

        const paramsObj = { query: cuisine , number: '2' }
        const searchParams = new URLSearchParams(paramsObj)
        
        spoonacularService
            .getRecipesByCategory(searchParams.toString())
            .then(({data}) => {
                console.log(data)
                setCategory(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [cuisine])

    


    return (
        <Accordion.Body>
            {category?.map(elm => {
                return <CategoryCard className="item" data-value={elm.id}><CategoryCard {...elm} /></CategoryCard>
            })}
        </Accordion.Body>
    )

}

export default CuisineCategory