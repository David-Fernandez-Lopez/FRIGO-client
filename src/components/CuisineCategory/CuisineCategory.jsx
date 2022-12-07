import './CuisineCategory.css'

import { useState, useEffect } from "react"
import CategoryCard from '../CategoryCard/CategoryCard'
import spoonacularService from "../../services/spoonacular.service"

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 3
    },
    1024: {
        items: 4,
        itemsFit: 'contain'
    },
}

function CuisineCategory()  {

    const [category, setCategory] = useState([])
  

    const loadData = () => {

       
        spoonacularService
            .getRecipesByCategory('main course')
            .then(({data}) => {
                console.log(data)
                setCategory(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])

    const myCategory = category.map(elm => {
        return <div className="item" data-value={elm.id}><CategoryCard {...elm} /></div>
    })


    return (
        <div className='Category'>
            <h3>Apple Party</h3>
            <hr />
            <AliceCarousel
                mouseTracking
                items={myCategory}
                responsive={responsive}
            />
        </div>
    )

}

export default CuisineCategory