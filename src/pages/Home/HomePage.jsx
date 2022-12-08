import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import Category from "../../components/Category/Category"
import UserMessage from "../../components/UserMessage/UserMessage"
import './HomePage.css'


const homePage = () => {

    return (
        <Container className="homepageForm">
            <h2 className="homepageTitle mb-3">What's in your fridge?</h2>

        <Form >
                <Form.Group className="mb-3" controlId="ingredient">
                    <Row>
                        <Col md={{ span: 6, offset: 2 }} >
                        <Form.Control type="text" name="ingredient" placeholder='Search by ingredient'/>
                        </Col>
                        <Col md={{ span: 2 }}>
                            <Button variant="dark" type="submit">Find Recipes</Button>
                        </Col>
                    </Row>
            </Form.Group>
        </Form>
            {/* <Category /> */}
            <h2>Placeholder Categories</h2>
            <UserMessage />

        </Container>
    )
}

export default homePage