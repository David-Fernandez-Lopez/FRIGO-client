import { Container } from "react-bootstrap"
import WhatIsFrigo from "../../components/WhatIsFrigo/WhatIsFrigo"
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe"
import '../About/AboutPage.css'

const AboutPage = () => {

    return (
        <Container className="aboutPage">
            <div>
                <img src='https://photoshop-kopona.com/uploads/posts/2018-02/1519121034_paper-texture-2.jpg' alt='team image' />
                <h1 className='aboutPageTitle'>About Us</h1>
            </div>
            <WhatIsFrigo />
            <WhoAreWe />
    </Container>
    )
}

export default AboutPage