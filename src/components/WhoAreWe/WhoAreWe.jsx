import { Container, Row, Col } from "react-bootstrap"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../WhoAreWe/WhoAreWe.css'
import { Link } from "react-router-dom"


const WhoAreWe = () => {

    return (
        <Container className="WhoAreWe">
            <hr className="hrAUP"></hr>
            <h3 className='WhoAreWeT'>Who are we?</h3>
            <Row className="teamRow mb-4">
                <Col xs={5}>
                    <img className="personalImgJ"
                        src="https://res.cloudinary.com/dp0abawuh/image/upload/v1671120190/IMG_6157_yetwod.png"
                        alt="dav" />
                </Col>
                <Col xs={5}>
                    <h4 className="teamName">Jadde Suárez</h4>
                    <p style={{ textAlign: "justify" }}>Technology is something that I've always been fascinated about and have been following as far as I can remember,
                        I'm a logical and pragmatic person and I think web dev has a lot to offer in these aspects,
                        but art and design also caught my attention as a teenager, so I decided to study architecture.
                        As technologies evolved, I learned more and more about programming,
                        so I figured that I could merge the logical and creative parts of my life in an on-demand skill such as web development.
                        So, I decided to enroll in a Bootcamp to grow my knowledge in this field and I hope to continue learning in the future.</p>
                    <a href="https://www.linkedin.com/in/jaddesuarez/" target="_blank">
                        <LinkedInIcon /> <span><LocalPhoneIcon />+34 677 373 595</span>
                    </a>
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={5}>
                    <h4 className="teamName">David Fernández</h4>
                    <p style={{ textAlign: "justify" }}>My journey through life has gone through many stages.
                        Always studying and working at the same time, I have knowledge in Forest Management
                        and Environmental Health, which allowed me to work for several years as an Environmental
                        Quality Auditor. Now, determined to give my life a 180 degree turn, I have added Web Development
                        to my skills. I hope it's for the best.</p>
                    <a href="https://www.linkedin.com/in/davidfernandezlopez/" target="_blank">
                        <LinkedInIcon /> <span><LocalPhoneIcon />+34 670 629 076</span>
                    </a>
                </Col>
                <Col xs={5}>
                    <img className="personalImgD"
                        src="https://res.cloudinary.com/dp0abawuh/image/upload/v1671093853/SquareQuick_20221213163554460-01_nihktc.jpg"
                        alt="dav" />
                </Col>
            </Row>
            <Row className="teamRow mb-4">
                <Col xs={5}>
                    <img className="personalImgM"
                        src="https://res.cloudinary.com/dp0abawuh/image/upload/v1670944892/marta_aow4i3.jpg"
                        alt="dav" />
                </Col>
                <Col xs={5}>
                    <h4 className="teamName">Marta Salvador</h4>
                    <p style={{ textAlign: "justify" }}>Passionate about film, I studied the Audiovisual Communication Degree and collaborated in some advertising and film projects, which helped me develop aspects such as leadership or teamwork.
                        After a few years being curious about tech, I've found myself interested in Web Design & Development, that's why I took the challenge of a Full Stack Bootcamp, without any background in coding.
                        Now, I am ready for other challenges that keep me growing both professionally and personally.</p>
                    <a href="https://www.linkedin.com/in/martasalvadorberenguer/" target="_blank">
                        <LinkedInIcon />
                    </a>
                    <span style={{ marginLeft: '10px' }}>+34 622 151 066</span>
                </Col>
            </Row>
        </Container>
    )
}

export default WhoAreWe