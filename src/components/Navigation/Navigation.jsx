import { useContext } from 'react'
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
// import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    // const { user, logoutUser } = useContext(AuthContext)

    return (
        <>  
        <Navbar expand="md" className="navbar mb-5">
            <Container>
                <Link to="/">
                    <Navbar.Brand as="div">FRIGO LOGO</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='navlink'>
                            <Nav.Link as="div">Home</Nav.Link>
                        </Link>
                        <Link to="/recipes" className='navlink'>
                            <Nav.Link as="div">Recipes</Nav.Link>
                        </Link>
                        <Link to="/about" className='navlink'>
                            <Nav.Link as="div">About Us</Nav.Link>
                        </Link>
                        <Link to="/login" className='navlink'>
                            <Nav.Link as="div">Log In</Nav.Link>
                            </Link>
                            
                             <NavDropdown title="Profile" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/profile/:id"> My Profile </NavDropdown.Item>
                                    <NavDropdown.Item href="/shopping-list"> Shopping List </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/profile/:id"> Account Settings </NavDropdown.Item>
                             </NavDropdown>


                        {/* {user ?
                            <>
                                <Nav.Link as="div" onClick={logoutUser}>Log Out</Nav.Link>

                                <NavDropdown title="Profile" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/profile/:id"> My Profile </NavDropdown.Item>
                                    <NavDropdown.Item href="/shopping-list"> Shopping List </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/profile/:id"> Account Settings </NavDropdown.Item>
                                </NavDropdown>
                            </>
                                :
                            <>
                                <Link to="/login">
                                    <Nav.Link as="div">Log In</Nav.Link>
                                </Link>
                            </>
                        } */}

                        {/* <Nav.Link as="div">¡Welcome, {!user ? '' : user.username}!</Nav.Link> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
    )
}

export default Navigation