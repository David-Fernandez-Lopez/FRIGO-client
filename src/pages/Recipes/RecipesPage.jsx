import { useEffect, useState } from "react"
import { Accordion, Container } from "react-bootstrap"
import CuisineCategory from "../../components/CuisineCategory/CuisineCategory"
import cuisineService from "../../services/cuisines.service"

const RecipesPage = () => {

    const [cuisineList, setCuisineList] = useState([])
    

    const loadData = () => {

        cuisineService
            .getCuisines()
            .then(({data}) => {
                console.log(data)
                setCuisineList(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
       <Container>
            <h1>Recipes Page</h1>
            <hr />

            <Accordion>
                
                {cuisineList.map((elem, idx) => {
                    return (
                        <Accordion.Item key={elem._id} eventKey={`${idx+1}`}>
                            <Accordion.Header>{elem.cuisine}</Accordion.Header>
                            {/* <CuisineCategory cuisine={elem.cuisine}/> */}
                        </Accordion.Item>
                    )
                })}
                
            </Accordion>
        </Container>
    )
}

export default RecipesPage