import './DbRecipeSteps.css'
import { useEffect, useState } from 'react'
import { Col, Nav, Row, Tab, } from 'react-bootstrap'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

function DbRecipeSteps({ analyzedInstructions, servings, readyInMinutes }) {

    const [dbSteps, setDbSteps] = useState(null)

    useEffect(() => {
        if (analyzedInstructions?.length >= 1) {
            setDbSteps(analyzedInstructions)
        }
    }, [analyzedInstructions])

    return (
        <>
            {dbSteps &&
                <>
                <h3 className='dbRSTitle'>Instructions</h3>
                  <p className='minutes'>{readyInMinutes}' <AccessTimeIcon /></p>
                    <br />
                    < Tab.Container className='stepsDB'id="left-tabs-example" defaultActiveKey="0" >
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {dbSteps?.map((elm, idx) => {
                                        return (<Nav.Item key={idx} className='stepsDB'>
                                            <Nav.Link eventKey={idx}>Step {elm.number}</Nav.Link>
                                        </Nav.Item>)
                                    })}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {dbSteps?.map((elm, idx) => {
                                        return (<Tab.Pane eventKey={idx}>
                                            <p>{elm.step}</p>
                                        </Tab.Pane>)
                                    })}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container >
<<<<<<< HEAD
=======
                    <hr className='mt-5' />
>>>>>>> ec56dd2ef0a804494b53542b4374f654ca5cb4eb
                </>
            }
        </>
    )

}

export default DbRecipeSteps
