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
            <h1>{title}</h1>
            <hr />
            <Row>
                <Col>
                    <Figure.Image src={image} alt="recipe image" />
                </Col>
                <Col>
                    <p className="my-2">{dish?.map((elm, idx) => <span className="badge bg-light me-2 text-capitalize text-dark fw-lighter p-2" key={idx}>{elm}</span>)}</p>
                    <p lassName="my-2">{cuisine?.map((elm, idx) => <span className="badge bg-light me-2 text-capitalize text-dark fw-lighter p-2" key={idx}>{elm}</span>)}</p>
                    <div className='Summary' dangerouslySetInnerHTML={{ __html: summary }} />
                </Col>
            </Row>
        </>
    )

}

export default RecipeCard