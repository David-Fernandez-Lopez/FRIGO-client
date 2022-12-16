import '../../components/ShoppingList/ShoppingList.css'
import { Container, Form } from "react-bootstrap"
import ShoppingList from './../../components/ShoppingList/ShoppingList.jsx'
import Map from './../../components/Map/Map'
import NewShoppingListItem from "../../components/NewShoppingListItem/NewShoppingListItem.jsx"
import { useState } from 'react'
import './ShoppingListPage.css'


const ShoppingListPage = () => {



    return (
        <div className='shopListBg'>
            <Container style={{ width: '100vw' }}>
                <h1 className='shopListPageTitle'>Your Shopping List</h1>
                <p className='shopListPageIntro1'>Add the ingredients you need and unify your shopping list</p>
                <p className='shopListPageIntro2'>all in one place</p>
            </Container>
            <Container >
                <NewShoppingListItem />
                <ShoppingList /> 
            <hr className='mt-4'/>
            </Container>
            
                <Map></Map>
         
        </div>
    )
}

export default ShoppingListPage