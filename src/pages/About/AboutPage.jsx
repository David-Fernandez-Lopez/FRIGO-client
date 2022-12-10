import { Container } from "react-bootstrap"
import '../About/AboutPage.css'


const AboutPage = () => {

    return (
        <Container className="aboutPage">
            <div>
                <img src='https://images.unsplash.com/photo-1652358357453-25ae54e2e98a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='team image' />
                <h1 className='aboutPageTitle'>About Us</h1>
            </div>
            <hr />
            <h3 className='aboutTitles'>Who are we & What is FRIGO?</h3>
    </Container>
    )
}

export default AboutPage