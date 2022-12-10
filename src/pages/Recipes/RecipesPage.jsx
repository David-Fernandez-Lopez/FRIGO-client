import { useEffect, useState } from "react"
import { Accordion, Container } from "react-bootstrap"
import CuisineCategory from "../../components/CuisineCategory/CuisineCategory"
import cuisineService from "../../services/cuisines.service"


const RecipesPage = () => {

    const [cuisineList, setCuisineList] = useState([])

    const loadData = () => {

        cuisineService
            .getCuisines()
            .then(({ data }) => {
                setCuisineList(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <Container>
            <h1 className="titles mb-4">Recipes Page</h1>

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