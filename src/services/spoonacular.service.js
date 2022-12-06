import axios from 'axios'
const API_KEY = process.env.API_KEY

class SpoonacularService {

    constructor() {

       
        this.api = axios.create({
            baseURL: `https://api.spoonacular.com/recipes`,
            headers: {
                "X-API-KEY": API_KEY
            }
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
        return this.api.get(`/${recipe_id}/information`)
    }

    getRecipeByIngredients(ingredients) {
        return this.api.get('/findByIngredients', ingredients)
    }
  
    getRecipesByCuisine(cuisines) {
        return this.api.get('/complexSearch', cuisines)
    }
}

const spoonacularService = new SpoonacularService()

export default spoonacularService