import './DbRecipeCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function DbRecipeCard({ title, image, readyInMinutes, servings, _id }) {


    return (

        <div className="DbRecipeCard me-3">
            <Link to={`/recipes/${_id}/information`} >
                <Card className="bg-ligth border-0">
                    <Card.Img src={image} alt="Card image" />
                    <Card.ImgOverlay className='CardBody'>
                        <p className='Icons'>{servings} <RestaurantIcon /> {readyInMinutes}' <AccessTimeIcon /></p>
                        <p className='CardTitle'>{title}</p>
                    </Card.ImgOverlay>
                </Card>
            </Link>
        </div>
    )

}

export default DbRecipeCard