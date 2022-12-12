const sortShoppingList = (currentList) => {
        
        if(currentList.length >= 2){
        const sortedByName = [...currentList]

        sortedByName.sort((a, b) => {
            // console.log(a.name)
            return (a.name).localeCompare(b.name)
        })
            return sortedByName
        } else {
            return currentList
        }

    }

export default sortShoppingList