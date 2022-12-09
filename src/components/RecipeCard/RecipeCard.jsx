import './RecipeCard.css'
import { Col, Row, Button, Figure, Image } from 'react-bootstrap'


function RecipeCard({ title, summary, image }) {

    console.log(title)

    return (
        <>
            <h1>{title}</h1>
            <hr />
            <p>{summary}</p>
            <Figure.Image src={image} alt="" />
        </>
    )

}

export default RecipeCard