// import { useContext } from 'react'
// import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../../contexts/auth.context'

// const Navigation = () => {

//     const { user, logoutUser } = useContext(AuthContext)

//     return (
//         <Navbar bg="dark" expand="md" variant="dark" className="mb-5">
//             <Container>
//                 <Link to="/">
//                     <Navbar.Brand as="div">FRIGO</Navbar.Brand>
//                 </Link>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Link to="/galeria">
//                             <Nav.Link as="div">Galería</Nav.Link>
//                         </Link>

//                         {user ?
//                             <>
//                                 <Nav.Link as="div" onClick={logoutUser}>Cerrar sesión</Nav.Link>
//                                 <Link to="/perfil">
//                                     <Nav.Link as="div">Mi perfil</Nav.Link>
//                                 </Link>
//                             </>
//                             :
//                             <>


//                                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action/3.2">
//                                         Another action
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                                     <NavDropdown.Divider />
//                                     <NavDropdown.Item href="#action/3.4">
//                                         Separated link
//                                     </NavDropdown.Item>
//                                 </NavDropdown>



//                                 <Link to="/registro">
//                                     <Nav.Link as="div">Registro</Nav.Link>
//                                 </Link>
//                                 <Link to="/acceder">
//                                     <Nav.Link as="div">Acceder</Nav.Link>
//                                 </Link>
//                             </>
//                         }

//                         <Nav.Link as="div">¡Hola, {!user ? 'invitad@' : user.username}!</Nav.Link>

//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default Navigation