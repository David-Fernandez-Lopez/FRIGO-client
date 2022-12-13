import { createContext, useEffect, useState } from 'react'
import userService from '../services/user.service'



const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {
    
    const [shoppingList, setShoppingList] = useState([])

    useEffect(() => {

        userService
            .getShoppingList()
            .then(({ data }) => {
                    setShoppingList(data.shoppingList)
            })
            .catch(err => console.log(err))
        
    },[])
    
    const saveShoppingList = () => {

        userService.addItemsToShoppingList(shoppingList)

    }

    const deleteItem = idx => {

        const shoppingListCopy = [...shoppingList]

        const itemToDelete = shoppingListCopy[idx]
        console.log(itemToDelete)
        
        userService.removeItemFromShoppingList(itemToDelete)

        
    }
    console.log(shoppingList)
    return (
        <ShoppingListContext.Provider value={{ shoppingList, setShoppingList, deleteItem, saveShoppingList}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }