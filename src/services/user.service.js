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

    addRecipeToFav = (recipe_id) => {
        return this.api.put('addRecipeToFav', { favRecipes: recipe_id })
    }

    removeRecipeFromFav = (recipe_id) => {
        return this.api.put('removeRecipeFromFav', { favRecipes: recipe_id })
    }

}

const userService = new UserService()

export default userService