import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

import { AuthContext } from "../../context/auth.context"

import authService from "../../services/auth.service"
import UserMessage from "../UserMessage/UserMessage"

const LogInForm = ({fireFinalActions}) => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)
    

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(signupData)
            .then(({ data }) => {
                const tokenFromServer = data.authToken
                storeToken(tokenFromServer)
                authenticateUser()
                fireFinalActions()
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { password, email } = signupData

    return (
        <>
        <h3>Log In</h3>
        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                             <Form.Label>Password</Form.Label>
                          <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                        </Form.Group>
                            <div className="d-grid">
                            <Button variant="dark" type="submit">Start</Button>
                            </div>
            </Form>
            </>
    )
}

export default LogInForm