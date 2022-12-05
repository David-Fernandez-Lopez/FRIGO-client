import './ProfileHeader.css'

import { Col, Row } from 'react-bootstrap'
// import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'ç

function ProfileHeader() {

    return (
        
        <Row className='my-5'>
            <Col xs={{ span: 3, offset: 3 }} className='d-flex justify-content-center'>
                <div className="profile-image">
                </div>
            </Col>
            <Col xs={6} className='d-flex justify-content-center flex-column'>
                <div>
                    <h3>User name and lastname</h3>
                </div>
            </Col>
        </Row>
    )

}

export default ProfileHeader