import { Container } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import Category from "../../components/Category/Category"
import UserMessage from "../../components/UserMessage/UserMessage"


const homePage = () => {

    return (
        <Container>
            <h1>Home Page</h1>
            <hr />
            <Category />
            <UserMessage />
        </Container>
    )
}

export default homePage