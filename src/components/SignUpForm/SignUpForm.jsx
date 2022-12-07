import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"

import authService from "../../services/auth.service"
import { MessageContext } from './../../context/userMessage.context'

const SignUpForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        name: '',
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

const { setShowToast, setToastMessage } = useContext(MessageContext)

const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => {
                setShowToast(true)
                setToastMessage('User Created')
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { password, email, name } = signupData

    return (
        <>
        <h3>Sign Up</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Register</Button>
            </div>
            </Form>
              </>
    )
}

export default SignUpForm