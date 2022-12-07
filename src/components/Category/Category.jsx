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

        const promises = [
            spoonacularService.getRecipeByIngredients('apple'),
            spoonacularService.getRecipesByCategory('main course')
        ]

        Promise
            .all(promises)
            .then(([apple, African]) => {
                console.log(apple.data)
                console.log(African.data.results)
                setCategory1(apple.data)
                setCategory2(African.data.results)
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


    return (
        <div className='Category'>
            <h3>Apple Party</h3>
            <hr />
            <AliceCarousel
                mouseTracking
                items={appleParty}
                responsive={responsive}
            />
            <h3>Category 2</h3>
            <hr />
            <AliceCarousel
                mouseTracking
                items={africanParty}
                responsive={responsive}
            />
        </div>
    )

}

export default Category