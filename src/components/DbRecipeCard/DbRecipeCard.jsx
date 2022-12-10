import './DbRecipeCard.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DbRecipeCard({ title, image, _id }) {

    return (

        <div className="DbRecipeCard me-2">
            <Link to={`/recipes/${_id}/information`} >
                <Card className="bg-ligth text-black">
                    <Card.Img src={image} alt="Card image" />
                    <Card.ImgOverlay className='d-flex justify-content-center align-items-center'>
                        <p>{title}</p>
                    </Card.ImgOverlay>
                </Card>
            </Link>
        </div>
    )

}

export default DbRecipeCard