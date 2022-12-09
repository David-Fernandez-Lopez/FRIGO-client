import { createContext, useState } from 'react'


const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {

    const [shoppingList, setShoppingList] = useState([])

    return (
        <ShoppingListContext.Provider value={{ shoppingList, setShoppingList}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }