import './CategoryCard.css'
import { Card, Button } from 'react-bootstrap'

function CategoryCard() {

    return (
        <div className="CategoryCard">
            <Card className="bg-ligth text-black">
                <Card.Img src="https://www.allrecipes.com/thmb/j-UIY1oXZZWisuG5e5tRitsOvIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Icons</Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default CategoryCard