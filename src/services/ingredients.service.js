import axios from 'axios'

class IngredientsService {

    constructor() {

       
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/ingredients`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getIngredients() {
        return this.api.get(`/`)
    }

    
}

const ingredientsService = new IngredientsService()

export default ingredientsService