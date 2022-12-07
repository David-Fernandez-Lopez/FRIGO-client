import axios from 'axios'

class DishTypeService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/dishTypes`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getDishType() {
        return this.api.get(`/`)
    }


}

const dishTypeService = new DishTypeService()

export default dishTypeService