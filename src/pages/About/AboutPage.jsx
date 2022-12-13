import { Container, Row } from "react-bootstrap"
import WhatIsFrigo from "../../components/WhatIsFrigo/WhatIsFrigo"
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe"
import '../About/AboutPage.css'

const AboutPage = () => {

    return (
        <>
            <Container fluid className="aboutPage">
                <Row className="flex-column">
                    <img className="imageAU" src='https://photoshop-kopona.com/uploads/posts/2018-02/1519121034_paper-texture-2.jpg' alt='team image' />
                    <h1 className='aboutPageTitle'>About Us</h1>
                </Row>
            </Container>
            <Container>
                <Row className='justify-content-center'>
                    <WhatIsFrigo />
                    <WhoAreWe />
                </Row>
            </Container>
        </>
    )
}

export default AboutPage