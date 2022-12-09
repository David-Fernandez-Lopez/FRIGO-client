import './ApiRecipeSteps.css'
import { useEffect, useState } from 'react'
import { Col, Nav, Row, Tab, } from 'react-bootstrap'

function ApiRecipeSteps({ analyzedInstructions }) {
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
        <>
            {apiSteps &&
                <>
                    <h3>Instructions</h3>
                    <br />
                    < Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Row>
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
                        </Row>
                    </Tab.Container >
                    <hr />
                </>
            }
        </>
    )

}

export default ApiRecipeSteps