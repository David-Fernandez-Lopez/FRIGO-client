import axios from 'axios'

class CuisineService {

    constructor() {

       
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/cuisines`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getCuisines() {
        return this.api.get(`/`)
    }

    
}

const cuisineService = new CuisineService()

export default cuisineService