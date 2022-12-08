import { useContext, useState } from 'react'
import { Nav, Container, Navbar, NavDropdown, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import LogInForm from '../LogInForm/LogInForm'
import SignUpForm from '../SignUpForm/SignUpForm'

import { AuthContext } from '../../context/auth.context'
import { MessageContext } from '../../context/userMessage.context'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const [showModal, setShowModal] = useState(false)
    const [showingForm, setShowingForm] = useState('')

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const signUp = () => {
        setShowModal(true)
        setShowingForm('signUp')
    }

    const login = () => {
        setShowModal(true)
        setShowingForm('login')
    }

    const fireFinalActions = () => {
        console.log('entro aqui')
        setShowToast(true)
        setToastMessage('Hola')
        closeModal()
    }

    return (
        <>
            <Navbar expand="md" className="navbar">
                <Container>
                    <Link to="/">
                        <Navbar.Brand as="div">FRIGO LOGO</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ width: '100%', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex' }}>

                                <Link to="/" className='navlink'>
                                    <Nav.Link as="div">Home</Nav.Link>
                                </Link>
                                <Link to="/recipes" className='navlink'>
                                    <Nav.Link as="div">Recipes</Nav.Link>
                                </Link>
                                <Link to="/about" className='navlink'>
                                    <Nav.Link as="div">About Us</Nav.Link>
                                </Link>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {user ?
                                    <>
                                        <Nav.Link as="div" onClick={logoutUser}>Log Out</Nav.Link>

                                        <NavDropdown title={`¡Welcome ${user.name}!`} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/profile/:id"> My Profile </NavDropdown.Item>
                                            <NavDropdown.Item href="/shopping-list"> Shopping List </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/profile/:id/edit"> Account Settings </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    :
                                    <>
                                        <Link className='navlink'>
                                            <Nav.Link as="div" onClick={login}>Log In</Nav.Link>
                                        </Link>
                                        <Link className='navlink'>
                                            <Nav.Link as="div" onClick={signUp}>Sign Up</Nav.Link>
                                        </Link>

                                        <Modal show={showModal} onHide={closeModal}>
                                            <Modal.Header closeButton>
                                                <img src="#" alt="LOGO FRIGO" />
                                            </Modal.Header>
                                            <Modal.Body>
                                                {showingForm === 'login' && <LogInForm fireFinalActions={fireFinalActions} />}
                                                {showingForm === 'signUp' && <SignUpForm fireFinalActions={fireFinalActions} />}
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation