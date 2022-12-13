
const spoonacularUnitsConversor = array => array.map(elm => {

        const ingredient = { name: elm.name.toUpperCase(), amount: +elm.amount, unit: elm.unit } 
        const {name, amount , unit } = ingredient
        
        if (unit === 'teaspoon' || unit === 'teaspoons') {
            let newAmount = amount * 5.69
            return {name, amount: +newAmount.toFixed(2) , unit: 'g'}
        } else if (unit === 'tablespoon' || unit === 'tablespoons') {
            let newAmount = amount * 14.175
            return {name, amount: +newAmount.toFixed(2), unit: 'g'}
        } else if (unit === 'cup' || unit === 'cups') {
            let newAmount = amount * 200
            return {name, amount: +newAmount.toFixed(2) , unit: 'g'}
        } else if (unit === 'ounce' || unit === 'ounces') {
            let newAmount = amount * 28.3495
            return {name, amount: +newAmount.toFixed(2) , unit: 'g'}
        }  else {
            return ingredient
        }

    })

export default spoonacularUnitsConversor