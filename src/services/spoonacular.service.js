import axios from 'axios'

class SpoonacularService {

    constructor() {


        this.api = axios.create({
            baseURL: `https://api.spoonacular.com/recipes`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getRecipeById(recipe_id) {
        return this.api.get(`/${recipe_id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    }

    getRecipeByIngredients(ingredients) {
        return this.api.get(`/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}`)
    }

    getRecipesByCategory(category) {
        return this.api.get(`/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${category}`)
    }
}

const spoonacularService = new SpoonacularService()

export default spoonacularService