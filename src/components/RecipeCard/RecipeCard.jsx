import './RecipeCard.css'
import { useEffect, useState } from 'react'
import { Col, Row, Figure } from 'react-bootstrap'


function RecipeCard({ title, summary, image, dishTypes, cuisines }) {

    const [dish, setDish] = useState([])
    const [cuisine, setCuisine] = useState([])

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
            <h1 className='recipeTitle mt-5'>{title}</h1>
            <Row>
                <Col>
                    <Figure.Image className='recipeImg' src={image} alt="recipe image" />
                </Col>
                <Col className='summaryCol'>
                    <p className='summaryTitle'><em>Summary</em></p>
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                    <Row className='tag mt-2'>
                        <p>{dish?.map((elm, idx) => <span className="badge bg-light text-capitalize text-dark fw-lighter p-2" key={idx}>{elm}</span>)}</p>
                        <p>{cuisine?.map((elm, idx) => <span className="badge bg-light text-capitalize text-dark fw-lighter p-2" key={idx}>{elm}</span>)}</p>
                    </Row>
                </Col>
            </Row>
        </>
    )

}

export default RecipeCard