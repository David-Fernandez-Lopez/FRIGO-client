import { useEffect, useState } from "react"
import { Accordion, Container } from "react-bootstrap"
import CuisineCategory from "../../components/CuisineCategory/CuisineCategory"
import DbRecipeCard from "../../components/DbRecipeCard/DbRecipeCard"
import RecipesSearchBar from "../../components/RecipesSearchBar/RecipesSearchBar"
import cuisineService from "../../services/cuisines.service"
import recipesService from "../../services/recipes.service"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './RecipesPage.css'

const RecipesPage = () => {

    const [cuisineList, setCuisineList] = useState([])
    const [query, setQuery] = useState(null)
    const [recipesByTitle, setRecipesByTitle] = useState(null)

    useEffect(() => {
        loadData()
    }, [query])

    const loadData = () => {

        cuisineService
            .getCuisines()
            .then(({ data }) => {
                setCuisineList(data)
            })
            .catch(err => console.log(err))

        query ?
            recipesService
                .getRecipesByTitle(query)
                .then(({ data }) => {
                    setRecipesByTitle(data)
                })
                .catch(err => console.log(err))
            :
            setQuery(null)
    }

    const responsive = {
        0: {
            items: 1
        },
        950: {
            items: 3
        },
        1200: {
            items: 5,
            itemsFit: 'contain'
        },
    }

    const items = recipesByTitle?.map(elm => {
        return <>
            <div style={{ width: '225px', margin: '20px 0' }}>
                <DbRecipeCard key={elm._id} {...elm} />
            </div>
        </>


    })

    return (
        <Container>
            <div className="recipePageHeader">
                <h1 className="titles mb-5">Search for a Recipe!</h1>
                <RecipesSearchBar setQuery={setQuery} />
            </div>
            {recipesByTitle &&
                <section className="recipeResults">
                    <AliceCarousel
                        autoPlay
                        autoPlayInterval={2000}
                        disableDotsControls
                        mouseTracking
                        items={items}
                        responsive={responsive}
                    // responsive={responsive}
                    />
                </section>
            }
            <h3 className="titles mb-5">Or Explore our Cuisines!</h3>
            <Accordion>

                {cuisineList.map((elm, idx) => {
                    return (
                        <Accordion.Item key={elm._id} eventKey={`${idx + 1}`}>
                            <Accordion.Header>{elm.cuisine}</Accordion.Header>
                            <CuisineCategory cuisine={elm.cuisine} />
                        </Accordion.Item>
                    )
                })}

            </Accordion>
        </Container>
    )
}

export default RecipesPage