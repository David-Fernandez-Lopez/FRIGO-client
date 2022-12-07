import './CategoryCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CategoryCard({ title, image, id }) {

    return (

        <div className="CategoryCard me-2">
            <Link>
            <Card className="bg-ligth text-black">
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Icons</Card.Title>
                    <p>{title}</p>
                </Card.ImgOverlay>
                <Card.Body>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )

}

export default CategoryCard