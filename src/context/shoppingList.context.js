import { createContext, useEffect, useState } from 'react'
import userService from '../services/user.service'



const ShoppingListContext = createContext()

function ShoppingListWrapper(props) {
    
    const [localShoppingList, setLocalShoppingList] = useState(null)

    useEffect(() => {
       loadShoppingList()
    }, [])

    useEffect(() => {
        saveShoppingList()
    }, [localShoppingList])
        
    
    const loadShoppingList = () => {

         userService
            .getShoppingList()
             .then(({ data }) => {
                //  console.log(data)
                 data.shoppingList
                    ?
                    setLocalShoppingList(data.shoppingList)
                    :
                    setLocalShoppingList([])
            })
            .catch(err => console.log(err))
        
    }
    
    const saveShoppingList = () => {

        localShoppingList && userService.addItemsToShoppingList(localShoppingList)
    }

    const deleteItem = itemToDelete => {

        const shoppingListCopy = [...localShoppingList]
        const filteredShoppingList = shoppingListCopy.filter(elm => elm !== itemToDelete)
        setLocalShoppingList(filteredShoppingList)
    }

    return (
        <ShoppingListContext.Provider value={{ localShoppingList, setLocalShoppingList, deleteItem}}>
            {props.children}
        </ShoppingListContext.Provider>
    )
}

export { ShoppingListContext, ShoppingListWrapper }