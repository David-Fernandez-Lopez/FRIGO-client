import { Container } from "react-bootstrap"
import ShoppingList from './../../components/ShoppingList/ShoppingList.jsx'

import NewShoppingListItem from "../../components/NewShoppingListItem/NewShoppingListItem.jsx"


const ShoppingListPage = () => {



    return (
        <Container>
            <h1>Shopping List Page</h1>
            <hr />
            <NewShoppingListItem/>
            <ShoppingList />
        </Container>
    )
}

export default ShoppingListPage