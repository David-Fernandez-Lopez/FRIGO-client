

const addItemToShoppingList = data => {

            const treatedData = dataTreatment(data)

            let listCopy = [...shoppingList]

                let duplicated = listCopy.find(obj => obj.name === treatedData.name && obj.unit === treatedData.unit)

                if (!duplicated) {
                listCopy.push(treatedData)
                return listCopy
                }

                const sumAmount = duplicated.amount + treatedData.amount

                const modifiedList = listCopy.map(elm => {
                        
                return {
                    ...elm,
                    amount: elm.name === treatedData.name && elm.unit === treatedData.unit ? sumAmount : elm.amount
                }
                })

                return modifiedList
        }

export default addItemToShoppingList
