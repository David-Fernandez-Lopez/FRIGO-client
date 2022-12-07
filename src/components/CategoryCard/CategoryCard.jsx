import './CategoryCard.css'
import { Card, Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import IconsComponent from '../IconsComponent/IconsComponent'

function CategoryCard({ title, image, id }) {

    return (

        <div className="CategoryCard me-2">
            <Link to="/recipe/:id/information" >
            <Card className="bg-ligth text-black">
                <Card.Img className='categoryImg' src={image} alt="Card image" />
                    <Card.ImgOverlay>
                       <p> <IconsComponent id={id} /></p> 
                    </Card.ImgOverlay>
                    <Card.Body>
                        <p>{title}</p>           
                        <p>{id}</p>           
                    </Card.Body>
            </Card>
            </Link>
        </div>
    )

}

export default CategoryCard