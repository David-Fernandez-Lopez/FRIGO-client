import axios from 'axios'

class UserService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getUserById() {
        return this.api.get('/getUserById')
    }

    editProfile = (signupData) => {
        return this.api.put('/edit', signupData)
    }

    addRecipeToFav = (recipe_id) => {
        return this.api.put('addRecipeToFav', { favRecipes: recipe_id })
    }

    removeRecipeFromFav = (recipe_id) => {
        return this.api.put('removeRecipeFromFav', { favRecipes: recipe_id })
    }

    getFavRecipes() {
        return this.api.get('/getFavRecipes')
    }

    addItemToShoppingList = (item_obj) => {
        return this.api.put('addItemToShoppingList', { shoppingList: item_obj })
    }

    addItemsToShoppingList = (shoppingList) => {
        return this.api.put('addItemsToShoppingList', { shoppingList })
    }

    removeItemFromShoppingList = (item_obj) => {
        return this.api.put('removeItemFromShoppingList', { shoppingList: item_obj })
    }

    getShoppingList() {
        return this.api.get('/getShoppingList')
    }

}

const userService = new UserService()

export default userService