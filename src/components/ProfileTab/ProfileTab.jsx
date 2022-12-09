import './ProfileTab.css'
import { useState, useContext } from 'react'
import { Tab, Tabs, Button, Modal } from 'react-bootstrap'
// import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded'
import NewRecipeForm from '../NewRecipeForm/NewRecipeForm'
import { MessageContext } from "../../context/userMessage.context"

function ProfileTab() {

    const [showModal, setShowModal] = useState(false)
    const { setShowToast, setToastMessage } = useContext(MessageContext)
    


    const closeModal = () => setShowModal(false)
    
    const openModal = () => setShowModal(true)

    const fireFinalActions = () => {
        setShowToast(true)
        setToastMessage('Recipe created successfully')
        closeModal()
    }


    return (
        <>

            <Tabs
                defaultActiveKey="Fav Recipes"
                id="justify-tab-example"
                className="mb-3 black-text"
                justify
        
            >
                <Tab eventKey="Fav Recipes" title="Fav Recipes" tabClassName='favTab'>

                    <section className='mt-5'>
                        <h3>aquí irá un map con todas las recetas favoritas</h3>
                        </section>
                </Tab>
                <Tab eventKey="My Recipes" title="My Recipes" tabClassName='myRecTab'>
                    <section className='mt-5'>
                        <h3>aquí irá un map con todas las recetas creadas por el usuario</h3>

                        <Modal size='xl' show={showModal} onHide={closeModal}>                            
                            <Modal.Header closeButton>
                                <img src="#" alt="LOGO FRIGO" /> 
                                <p>New Recipe</p>
                            </Modal.Header>                            
                            <Modal.Body>                                
                                <NewRecipeForm fireFinalActions={fireFinalActions} />                            
                            </Modal.Body>                            
                        </Modal>
                        <Button onClick={openModal}> <LibraryBooksRoundedIcon/> New Recipe</Button>
                    </section>
                </Tab>

            </Tabs>
        </>
    )

}

export default ProfileTab