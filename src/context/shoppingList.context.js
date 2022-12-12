import { createContext, useEffect, useState } from 'react'
import userService from '../services/user.service'



const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {
    
    const [shoppingList, setShoppingList] = useState([])

    useEffect(() => {

        userService
            .getShoppingList()
            .then(({ data }) => {
                console.log(data)
                    setShoppingList(data.shoppingList)
            })
            .catch(err => console.log(err))
        
    },[])
    
    const adItem = (data) => {

        addItemToShoppingList(data)
        setShoppingList()

    }

    const deleteItem = idx => {

        const shoppingListCopy = [...shoppingList]

        const itemToDelete = shoppingListCopy[idx]
        
        userService.removeItemFromShoppingList(itemToDelete)
            
        shoppingListCopy.splice(idx, 1)
        setShoppingList(shoppingListCopy)
        
    }
    console.log(shoppingList)
    return (
        <ShoppingListContext.Provider value={{ shoppingList, setShoppingList, deleteItem}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }