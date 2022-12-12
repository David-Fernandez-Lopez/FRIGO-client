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
        <Row>
            {apiSteps &&
                <>
                <h3 className='dbRSTitle'>Instructions</h3>
                <p className='minutes mb-5'>{readyInMinutes}' <AccessTimeIcon /></p>

                    <br />
                    < Tab.Container id="left-tabs-example" defaultActiveKey="0" >
                        <>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {apiSteps?.map((elm, idx) => {
                                        return (<Nav.Item key={idx}>
                                            <Nav.Link eventKey={idx}>Step {elm.number}</Nav.Link>
                                        </Nav.Item>)
                                    })}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {apiSteps?.map((elm, idx) => {
                                        return (<Tab.Pane key={idx} eventKey={idx}>
                                            <p>{elm.step}</p>
                                        </Tab.Pane>)
                                    })}
                                </Tab.Content>
                            </Col>
                        </>
                    </Tab.Container >
                </>
            }
        </Row>
    )

}

export default ApiRecipeSteps