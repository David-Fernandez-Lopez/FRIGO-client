import { Container } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import Category from "../../components/Category/Category"

const homePage = () => {

    return (
        <Container>
            <h1>Home Page</h1>
            <hr />
            <Category />
        </Container>
    )
}

export default homePage