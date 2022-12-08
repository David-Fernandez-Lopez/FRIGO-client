import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import './EditProfilePage.css'

import authService from "../../services/auth.service"


const EditProfilePage = () => {


const [editData, setEditData] = useState({
        name: '',
        email: '',
        password: '',
        lastName: '',
        profileImg: ''
    })

 const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
    }

const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .editProfile(editData)
            .then(() => {
                navigate('/profile/:id')
            })
            .catch(err => console.log(err))
    }

    const { password, email, name, lastName, profileImg } = editData

    return (
        <Container className="homepageForm">
            <h2 className="homepageTitle mb-3">Edit your profile</h2>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Edit</Button>
            </div>
            </Form>
        </Container>
    )
}

export default EditProfilePage
