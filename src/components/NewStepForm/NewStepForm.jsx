import './NewStepForm.css'
import AddIcon from '@mui/icons-material/Add'
import { Form, Button, Row, Col } from "react-bootstrap"
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'



function NewStepForm({instructionsData, setInstructionsData}) {

    const handleInstructionsChange = (idx, e) => {

        const instructionsDataCopy = [...instructionsData]
        instructionsDataCopy[idx][e.target.name] = e.target.value
        setInstructionsData(instructionsDataCopy)
    }


    const newStep = (e) => {

        setInstructionsData([...instructionsData, { number: instructionsData.length + 1, step: '' }])
    }

    const deleteStep = idx => {

        const instructionsDataCopy = [...instructionsData]
        instructionsDataCopy.splice(idx, 1)
        setInstructionsData(instructionsDataCopy)
    }


    return (

        <Form.Group className="mb-3" controlId="instructions">
            <Form.Label>Instructions</Form.Label>            
            <Row>                
                <Col md={{ span: 11 }}>                    
                    {instructionsData.map((elm, idx) => {                                    
                        return (                                        
                            <Row className="mb-3" key={idx}>                                
                                <Col md={{ span: 1 }}>                                    
                                    <Form.Control
                                        className="text-center"
                                        disabled
                                        type="text"
                                        value={parseInt(elm.number)}
                                        onChange={e => handleInstructionsChange(idx, e)}
                                        name="number"
                                    />
                                </Col>                                
                                <Col>                                    
                                    <Form.Control
                                        type="text"
                                        value={elm.step}
                                        onChange={e => handleInstructionsChange(idx, e)}
                                        name="step"
                                    />
                                </Col>                                
                                <Col md={{ span: 1}} className="d-grid">                                    
                                    <Button
                                        className="deleteStepBtn"
                                        onClick={() => deleteStep(idx)}
                                    >
                                        <RemoveRoundedIcon />
                                    </Button>
                                </Col>                                
                            </Row>                            
                        )                        
                    })}                    
                </Col>
                
                <Col md={{ span: 1 }}>      
                    <Row>
                        <Col className="d-grid">
                            <Button
                                className='addStepBtn'
                                variant="dark"
                                onClick={newStep}>
                                <AddIcon />
                            </Button>                                
                        </Col>                        
                    </Row>
                </Col>                
            </Row>            
        </Form.Group>       
    )


}

export default NewStepForm