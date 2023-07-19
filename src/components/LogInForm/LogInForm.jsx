import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

import { AuthContext } from "../../context/auth.context"
import { ShoppingListContext } from "../../context/shoppingList.context"

import authService from "../../services/auth.service"
import UserMessage from "../UserMessage/UserMessage"
import { MessageContext } from '../../context/userMessage.context'
import ErrorMessage from "../ErrorMessage/ErrorMessage"

import './LogInForm.css'

const LogInForm = ({ fireFinalActions }) => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: ''
    })

    const { user } = useContext(AuthContext)
    const { loadShoppingList } = useContext(ShoppingListContext)


    const { setShowToast, setToastMessage } = useContext(MessageContext)


    const [errors, setErrors] = useState([])

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
                setShowToast(true)
                setToastMessage(`Welcome ${email}`)
                navigate('/')
                loadShoppingList()
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const { password, email } = signupData

    return (
        <>
            <h3 className="mb-3 mt-3 loginT">Log In</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                {errors.length ? <ErrorMessage>{errors.map(e => <p key={e}>{e}</p>)}</ErrorMessage> : undefined}

                <div className="d-grid">
                    <Button className="formBtn" type="submit">Start</Button>
                </div>
            </Form>
        </>
    )
}

export default LogInForm