import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"


const SignUpForm = () => {

    const [signupData, setSignupData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }


    const { password, email, name } = signupData

    return (
        <Form >
            <Form.Group className="mb-3" controlId="email">
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
    )
}

export default SignUpForm