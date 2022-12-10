import { createContext, useEffect, useState } from 'react'
import unifyShoppingListItems from '../utils/unifyShoppingListItems'


const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {
    
    const [shoppingList, setShoppingList] = useState([])

    // useEffect(() => {
    //     setShoppingList(unifyShoppingListItems(shoppingList))
    // },[])

    function unifyItems () {
        console.log(shoppingList)
        setShoppingList(oldData => {
            return unifyShoppingListItems(oldData)
        })
        console.log(shoppingList)
    }
    
    console.log(shoppingList)
    

    const deleteItem = idx => {

        const shoppingListCopy = [...shoppingList]
        shoppingListCopy.splice(idx, 1)
        setShoppingList(shoppingListCopy)
    }

    return (
        <ShoppingListContext.Provider value={{ shoppingList, setShoppingList, deleteItem, unifyItems}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }