import { useState, useEffect } from "react"
import './Category.css'
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

function Category(props) {

    const [category1, setCategory1] = useState([])
    const [category2, setCategory2] = useState([])
    const [category3, setCategory3] = useState([])

    const loadData = () => {

        const paramsObjAfrican = { query: 'main course' , number: '2' }
        const searchParamsAfrican = new URLSearchParams(paramsObjAfrican)

        const paramsObjVegetarian = { query: 'vegetarian' , number: '2' }
        const searchParamsVegetarian = new URLSearchParams(paramsObjVegetarian)

        const promises = [
            spoonacularService.getRecipeByIngredients('apple'),
            spoonacularService.getRecipesByCategory(searchParamsAfrican.toString()),
            spoonacularService.getRecipesByCategory(searchParamsVegetarian.toString())
        ]

        Promise
            .all(promises)
            .then(([apple, mainCourse, vegetarian]) => {
                // console.log(apple.data)
                // console.log(mainCourse.data.results)
                setCategory1(apple.data)
                setCategory2(mainCourse.data.results)
                setCategory3(vegetarian.data.results)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])

    const appleParty = category1.map(elm => {
        return <div className="item" data-value={elm.id}><CategoryCard {...elm} /></div>
    })

    const africanParty = category2.map(elm => {
        return <div className="item" data-value={elm.id}><CategoryCard {...elm} /></div>
    })

    const vegetarianParty = category3.map(elm => {
        return <div className="item" data-value={elm.id}><CategoryCard {...elm} /></div>
    })

    return (
        <div className='Category'>
            <h4>Apple Party</h4>
            <hr />
            <AliceCarousel
                mouseTracking
                items={appleParty}
                responsive={responsive}
            />
            <h4>Main Course</h4>
            <hr />
            <AliceCarousel
                mouseTracking
                items={africanParty}
                responsive={responsive}
            />
            <h4>Veggie Moment</h4>
            <hr />
            <AliceCarousel
                mouseTracking
                items={vegetarianParty}
                responsive={responsive}
            />
        </div>
    )

}

export default Category