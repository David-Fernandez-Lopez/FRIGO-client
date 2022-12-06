import './Category.css'
import CategoryCard from '../CategoryCard/CategoryCard'

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
    0: {
        items: 1
    },
    568: {
        items: 2
    },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
}

const items = [
    <div className="item" data-value="1"><CategoryCard /></div>,
    <div className="item" data-value="2"><CategoryCard /></div>,
    <div className="item" data-value="3"><CategoryCard /></div>,
    <div className="item" data-value="4"><CategoryCard /></div>,
]

function Category(props) {

    // const [recipes, setRecipes] = useState()

    // const loadRecipes = () => {
    //     recipesService
    //         .getRecipes()
    //         .then(({ data }) => setRecipes(data))
    //         .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     loadRecipes()
    // }, [])


    return (
        <div className='Category'>
            <h3>Category 1</h3>
            <hr />
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />
            <h3>Category 2</h3>
            <hr />
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />
        </div>
    )

}

export default Category