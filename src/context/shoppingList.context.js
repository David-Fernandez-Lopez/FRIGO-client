import { createContext, useEffect, useState } from 'react'



const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {
    
    const [shoppingList, setShoppingList] = useState(null)

    useEffect(() => {
        setShoppingList([])
    },[])
    
    const deleteItem = idx => {

        const shoppingListCopy = [...shoppingList]
        shoppingListCopy.splice(idx, 1)
        setShoppingList(shoppingListCopy)
    }

    return (
        <ShoppingListContext.Provider value={{ shoppingList, setShoppingList, deleteItem}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }