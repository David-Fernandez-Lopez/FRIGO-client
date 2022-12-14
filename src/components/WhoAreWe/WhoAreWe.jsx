import { Container, Row, Col } from "react-bootstrap"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../WhoAreWe/WhoAreWe.css'
import { Link } from "react-router-dom"


const WhoAreWe = () => {

    return (
        <Container className="WhoAreWe">
            <hr className="hrAUP"></hr>
            <h3 className='WhoAreWeT'>Who are we?</h3>
            <Row className="teamRow mb-4">
                <Col xs={5}>
                    <img className="personalImgJ" src="https://res.cloudinary.com/dp0abawuh/image/upload/v1670944890/jadde_mteitb.jpg" alt="dav" />
                </Col>
                <Col xs={5}>
                    <h4 className="teamName">Jadde Suárez</h4>
                    <p style={{ textAlign: "justify" }}>lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                     <a href="https://www.linkedin.com/in/jaddesuarez/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={5}>
                    <h4 className="teamName">David Fernández</h4>
                    <p style={{ textAlign: "justify" }}>lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
                     <a href="https://www.linkedin.com/in/davidfernandezlopez/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </Col>
                <Col xs={5}>
                    <img className="personalImgD" src="https://res.cloudinary.com/dp0abawuh/image/upload/v1470944891/david_b6qo3o.jpg" alt="dav" />
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={5}>
                    <img className="personalImgM" src="https://res.cloudinary.com/dp0abawuh/image/upload/v1670944892/marta_aow4i3.jpg" alt="dav" />
                </Col>
                <Col xs={5}>
                    <h4 className="teamName">Marta Salvador</h4>
                    <p style={{ textAlign: "justify" }}>texto</p>
                    <a href="https://www.linkedin.com/in/martasalvadorberenguer/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoAreWe