import { Container } from "react-bootstrap"
import ShoppingList from './../../components/ShoppingList/ShppingList.jsx'

const ShoppingListPage = () => {

    return (
        <Container>
            <h1>Shopping List Page</h1>
            <hr />
            <ShoppingList />
        </Container>
    )
}

export default ShoppingListPage