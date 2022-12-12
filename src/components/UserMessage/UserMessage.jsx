import { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { MessageContext } from '../../context/userMessage.context'

import './UserMessage.css'

const UserMessage = () => {

    const { setShowToast, toastMessage, showToast } = useContext(MessageContext)

    return (
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={13000} autohide style={{ position: 'fixed', bottom: 50, right: 50, backgroundColor: '#66ac8150' }}>
            <Toast.Header  style={{backgroundColor: 'white'}}>
                <strong className="frigoTeam me-auto"> 🥑 FRIGO Team </strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>

    )
}

export default UserMessage