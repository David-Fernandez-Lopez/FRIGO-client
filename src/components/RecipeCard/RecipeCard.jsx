import './RecipeCard.css'
import { useEffect, useState } from 'react'
import { Col, Row, Button, Figure, Image } from 'react-bootstrap'


function RecipeCard({ title, summary, image, dishTypes, cuisines }) {



    const [dish, setDish] = useState(null)
    const [cuisine, setCuisine] = useState(null)

    useEffect(() => {
        if (dishTypes?.length >= 1) {
            setDish(dishTypes)
        }

        if (cuisines?.length >= 1) {
            setCuisine(cuisines)
        }

    }, [dishTypes, cuisines])

    return (
        <>
            <h1>{title}</h1>
            <hr />
            <p>{summary}</p>
            <Figure.Image src={image} alt="recipe image" />
            <p>{dish?.map((elm, idx) => <span key={idx}>{elm} | </span>)}</p>
            <p>{cuisine?.map((elm, idx) => <span key={idx}>{elm} | </span>)}</p>
            <hr />
        </>
    )

}

export default RecipeCard