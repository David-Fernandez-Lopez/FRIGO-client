import './ApiRecipeSteps.css'
import { useEffect, useState } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import AccessTimeIcon from '@mui/icons-material/AccessTime'


function ApiRecipeSteps({ analyzedInstructions, readyInMinutes }) {
    // if (analyzedInstructions) {
    //     let { steps: instructions } = analyzedInstructions[0]
    //     console.log('funciona??', instructions)
    // }

    const [apiSteps, setApiSteps] = useState(null)

    useEffect(() => {
        if (analyzedInstructions?.length >= 1) {
            setApiSteps(analyzedInstructions[0].steps)
        }
    }, [analyzedInstructions])


    return (
        <Row className="recipeSteps">
            {apiSteps &&
                <>
                    <h3 className='dbRSTitle'>Instructions</h3>
                    <p className='minutes mb-5'>{readyInMinutes}' <AccessTimeIcon /></p>

                    <br />
                    <div className='noPrint'>
                        < Tab.Container id="left-tabs-example" defaultActiveKey="0" >
                            <Row>
                                <Col sm={2}>
                                    <Nav variant="pills" className="flex-column">
                                        {apiSteps?.map((elm, idx) => {
                                            return (<Nav.Item key={idx}>
                                                <Nav.Link eventKey={idx}>Step {elm.number}</Nav.Link>
                                            </Nav.Item>)
                                        })}
                                    </Nav>
                                </Col>
                                <Col sm={{ span: 8, offset: 1 }}>
                                    <Tab.Content>
                                        {apiSteps?.map((elm, idx) => {
                                            return (<Tab.Pane key={idx} eventKey={idx}>
                                                <p>{elm.step}</p>
                                            </Tab.Pane>)
                                        })}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container >
                    </div>
                    <div className='onlyToPrint'>
                        {apiSteps?.map((elm, idx) => {
                            return <p key={idx}><span className='fw-bold'>Step {elm.number}: </span>{elm.step}</p>
                        })}
                    </div>
                </>
            }
        </Row>
    )

}

export default ApiRecipeSteps