import { Container } from "react-bootstrap"
import '../Greetings/Greetings.css'


const Greetings = () => {

    return (
        <Container className="Greetings">
            <p>Special thanks to our teacher <span style={{fontWeight:'600'}}>German Alvarez</span> & our TAs <span style={{fontWeight:'600'}}>Daniel Gonzalez</span> and <span style={{fontWeight:'600'}}>Jaime Martin</span> for their endless pacience and for constantly getting the best out of us. </p>
        </Container>
    )
}

export default Greetings