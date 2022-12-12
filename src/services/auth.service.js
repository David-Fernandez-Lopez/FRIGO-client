import axios from 'axios'

class AuthService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api/auth`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    signup(userData) {
        return this.api.post('/signup', userData)
    }

    login(userData) {
        return this.api.post('/login', userData)
    }

    verify = token => {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }

    editProfile = (_id, signupData) => {
        return this.api.put(`/${_id}/edit`, signupData)
    }

    addRecipeToFav = (recipe_id) => {
        console.log('client', recipe_id)
        return this.api.put('addRecipeToFav', { favRecipes: recipe_id })
    }
}

const authService = new AuthService()

export default authService