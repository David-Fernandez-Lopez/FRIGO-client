import './CategoryCard.css'
import { Card, Button } from 'react-bootstrap'


function CategoryCard({ title, image, id }) {

    return (

        <div className="CategoryCard me-2">
            <Card className="bg-ligth text-black">
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Icons</Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default CategoryCard