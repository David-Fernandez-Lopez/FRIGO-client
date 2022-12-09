import '../../components/ShoppingList/ShoppingList.css'
import { Container } from "react-bootstrap"
import ShoppingList from './../../components/ShoppingList/ShoppingList.jsx'

import NewShoppingListItem from "../../components/NewShoppingListItem/NewShoppingListItem.jsx"


const ShoppingListPage = () => {



    return (
        <div className='shopListBg'>
        <Container  style={{ width: '100vw'}}>
            <h1 className='shopListPageTitle'>Your Shopping List</h1>
            <p className='shopListPageIntro1'>Add the ingredients you need and unify your shopping list</p>
            <p className='shopListPageIntro2'>all in one place</p>

            <NewShoppingListItem />
            <ShoppingList />
            </Container>
        </div>
    )
}

export default ShoppingListPage