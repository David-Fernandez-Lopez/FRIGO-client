import axios from 'axios'

class RecipeService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/recipes`
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

    editRecipe(recipe_id, recipeData) {
        return this.api.get(`/${recipe_id}/edit`, recipeData)
    }

    getRecipeById(recipe_id) {
        return this.api.get(`/${recipe_id}/information`)
    }

    getRecipeByOwner() {
        return this.api.get('/findByOwner')
    }

    getRecipeByIngredients(ingredients) {
        return this.api.get(`/findByIngredients?ingredients=${ingredients}`)
    }

    getRecipesByCuisine(cuisines) {
        return this.api.get(`/complexSearch?query=${cuisines}`)
    }

    getRecipesByTitle(title) {
        return this.api.get(`/findByTitle?title=${title}`)
    }

    deleteRecipe(recipe_id) {
        return this.api.delete(`/${recipe_id}/deleteRecipe`)
    }
}

const recipeService = new RecipeService()

export default recipeService