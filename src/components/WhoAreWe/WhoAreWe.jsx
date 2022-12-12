import { Container, Row, Col } from "react-bootstrap"
import '../WhoAreWe/WhoAreWe.css'


const WhoAreWe = () => {

    return (
        <Container className="WhoAreWe">
            <h3 className='WhoAreWeT'>Who are we?</h3>
            <Row>
                <Col md={4}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEWxtbawtLWytrfBxcbFycq/w8TP09TO0tPIqrM6AAABTElEQVR4nO3TiW0DMQwAQT05u/+OczgkJRjGCjMVcCVyvPb+Odh+jWuebY895hwHuwtPDlz/hetc8ylc69tv/SFrKqxT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Dvr3DMsU41x1M4Tv3Cp+zZ0m/P8UHzLrzuJR3zTPchzmu8r32y6/0Lfkcaweazk+sAAAAASUVORK5CYII=" alt="team image" />
                </Col>
                <Col md={8}>
                    <p>Hola</p>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoAreWe