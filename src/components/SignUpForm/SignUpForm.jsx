import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"

import authService from "../../services/auth.service"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { MessageContext } from '../../context/userMessage.context'

const SignUpForm = ({ fireFinalActions}) => {

const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: ''
})
    
    const [errors, setErrors] = useState([])
    
    const { setShowToast, setToastMessage } = useContext(MessageContext)


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }


    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => {
                fireFinalActions()
                setShowToast(true)
                setToastMessage('User created successfully')
                navigate('/')
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const { password, email, name } = signupData

    return (
        <>
        <h3 className="mb-3 mt-3 loginT">Sign Up</h3>
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
                {errors.length ? <ErrorMessage>{errors.map(elm => <p key={elm}>{elm}</p>)}</ErrorMessage> : undefined}

             {/*    [elm].forEach ((error) => */}
            <div className="d-grid">
                <Button className="formBtn" type="submit">Register</Button>
            </div>
                
            </Form>
              </>
    )
}

export default SignUpForm