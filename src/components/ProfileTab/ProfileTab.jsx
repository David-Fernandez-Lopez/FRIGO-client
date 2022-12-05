import './ProfileTab.css'
import { Tab, Tabs } from 'react-bootstrap'
// import { AuthContext } from './../../contexts/auth.context'
import { Link } from 'react-router-dom'
// import { useContext } from 'react'ç

function ProfileTab() {

    return (
        <>
       
            <Tabs
            defaultActiveKey="Fav Recipes"
            id="justify-tab-example"
            className="mb-3 black-text"
            justify
            >
            <Tab eventKey="Fav Recipes" title="Fav Recipes" tabClassName='black-text'>

                <section className='mt-5'>
                    <h3>aquí irá un map con todas las recetas favoritas</h3>
                </section>
            </Tab>
            <Tab eventKey="My Recipes" title="My Recipes" tabClassName='black-text'>
                <section className='mt-5'>
                    <h3>aquí irá un map con todas las recetas creadas por el usuario</h3>
                </section>
            </Tab>
            
            </Tabs>
        </>
    )

}

export default ProfileTab