import './IconsComponent.css'
import { useEffect, useState } from 'react'
import spoonacularService from "../../services/spoonacular.service"
import Loader from '../Loader/Loader'



function Icons({ id }) {

    const [icons, setIcons] = useState()

    const getData = () => {
        spoonacularService
            .getRecipeById(id)
            .then(({ data }) => {
                setIcons(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [id, icons])


    return (
        <>
            {icons &&
                <>
                    <div className='icons'>
                        <p>{icons.readyInMinutes}</p>
                        <p>{icons.servings}</p>
                    </div>
                </>
            }
        </>
    )
}

export default Icons
