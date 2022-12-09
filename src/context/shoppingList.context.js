import { createContext, useState } from 'react'
import unifyShopingListItems from '../utils/unifyShopingListItems'


const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {

    const [shoppingList, setShoppingList] = useState([])

    const unifyItems = () => setShoppingList(unifyShopingListItems(shoppingList))

    const deleteItem = idx => {

        const shoppingListCopy = [...shoppingList]
        shoppingListCopy.splice(idx, 1)
        setShoppingList(shoppingListCopy)
    }

    console.log(shoppingList)

    return (
        <ShoppingListContext.Provider value={{ shoppingList, setShoppingList, deleteItem, unifyItems}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }