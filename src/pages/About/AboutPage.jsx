import { Container, Row } from "react-bootstrap"
import WhatIsFrigo from "../../components/WhatIsFrigo/WhatIsFrigo"
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe"
import Greetings from "../../components/Greetings/Greetings"
import '../About/AboutPage.css'

const AboutPage = () => {

    return (
        <>
            <Container fluid className="aboutPage">
                <Row className="flex-column">
                    <img className="imageAU" src='https://res.cloudinary.com/dp0abawuh/image/upload/v1670944891/team_cuveix.png' alt='team image' />
                    <h1 className='aboutPageTitle'>About Us</h1>
                </Row>
            </Container>
            <Container>
                <Row className='justify-content-center'>
                    <WhatIsFrigo />
                    <WhoAreWe />
                    <Greetings />
                </Row>
            </Container>
        </>
    )
}

export default AboutPage