import { Container, Row, Col } from "react-bootstrap"
import '../WhoAreWe/WhoAreWe.css'


const WhoAreWe = () => {

    return (
        <Container className="WhoAreWe">
            <hr className="hrAUP"></hr>
            <h3 className='WhoAreWeT'>Who are we?</h3>
            <Row className="teamRow mb-4">
                <Col xs={6}>
                    <img className="imgDavid" src="" alt="dav" />
                </Col>
                <Col xs={6}>
                    <h5>Jadde Suárez</h5>
                    <p>Info sobre nosotros</p>
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={6}>
                    <h5>David Fernández</h5>
                    <p>Info sobre nosotros</p>
                </Col>
                <Col xs={6}>
                    <img className="imgDavid" src="" alt="dav" />
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={6}>
                    <img className="imgDavid" src="" alt="dav" />
                </Col>
                <Col xs={6}>
                    <h5>Marta Salvador</h5>
                    <p>Info sobre nosotros</p>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoAreWe