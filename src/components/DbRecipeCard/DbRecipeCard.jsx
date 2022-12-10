import './DbRecipeCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant'

function DbRecipeCard({ title, image, readyInMinutes, servings, _id }) {


    return (

        <div className="DbRecipeCard me-2">
            <Link to={`/recipes/${_id}/information`} >
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

export default DbRecipeCard