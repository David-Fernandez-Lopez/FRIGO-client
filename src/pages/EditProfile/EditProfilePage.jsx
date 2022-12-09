import { Container, Form, Button, Row, Col } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import uploadServices from "../../services/upload.service"
import './EditProfilePage.css'

import authService from "../../services/auth.service"
import { AuthContext } from "../../context/auth.context"

// NO ACTUALIZA LA INFO SI NO HACES LOG OUT
// CUANDO HACES LOG OUT TE LLEVA A LOG IN NO SE POR QUE

const EditProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [editData, setEditData] = useState({
        name: user.name,
        email: user.email,
        password: '',
        lastName: user.lastName,
        profileImg: user.profileImg,
    })

    const [loadingImage, setLoadingImage] = useState(false)
    const [changed, setChanged] = useState(false)

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setEditData({ ...editData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleInputChange = e => {
        const { value, name } = e.target
        setEditData({ ...editData, [name]: value })
        setChanged(true)
    }

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .editProfile(user._id, editData)
            .then(() => {
                navigate('/profile/:id')
            })
            .catch(err => console.log(err))
    }

    const { password, email, name, lastName, profileImg } = editData

    return (
        <>
            <div className="background">
                <Container >
                    <h2 className="edit-profile-title p-5">Edit your profile</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" value={name} onChange={handleInputChange} name="name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control type="lastName" value={lastName} onChange={handleInputChange} name="lastName" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="file" value={profileImg} onChange={handleFileUpload} />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Edit</Button>
                        </div>
                        {changed ? <p>Changed</p> : null}
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default EditProfilePage
