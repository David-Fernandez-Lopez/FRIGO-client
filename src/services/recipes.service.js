import axios from 'axios'

class RecipeService {

    constructor() {

       
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/recipes`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createRecipe(recipeData) {
        return this.api.post(`/create`, recipeData)

    }

    getRecipeById(recipe_id) {
        return this.api.get(`/${recipe_id}/information`)
    }

    getRecipeByIngredients(ingredients) {
        return this.api.get(`/findByIngredients?ingredients=${ingredients}`)
    }
  
    getRecipesByCuisine(cuisine) {
        return this.api.get(`/complexSearch?cuisines=${cuisine}`)
    }
}

const recipeService = new RecipeService()

export default recipeService