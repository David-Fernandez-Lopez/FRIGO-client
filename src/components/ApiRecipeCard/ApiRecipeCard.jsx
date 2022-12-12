import './ApiRecipeCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant'

function ApiRecipeCard({ title, image, readyInMinutes, servings, id }) {

    return (

        <div className="ApiRecipeCard me-2">
            <Link to={`/recipes/${id}/information`} >
                <Card className="bg-ligth text-black">
                    <Card.Img src={image} alt="Card image" />
                    <Card.ImgOverlay className='CardBody'>
                        <p className='Icons'>{servings} <RestaurantIcon /> {readyInMinutes}'</p>
                        <p className='CardTitle'>{title}</p>
                    </Card.ImgOverlay>
                </Card>
            </Link>
        </div>
    )

}

export default ApiRecipeCard