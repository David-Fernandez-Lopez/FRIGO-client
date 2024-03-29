import { createContext, useEffect, useState } from 'react'
import authService from '../services/auth.service'


const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const storeToken = (token) => {
        console.log(token)
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")

        authService
            .verify(token)
            .then(({data}) => {
                // console.log(data)
                setUser(data)
                setIsLoading(false)
            })
            .catch(err => {
                // console.log(err)
                setUser(null)
                setIsLoading(false)
            })
    }

    const refreshToken = () => {
        authService
            .updateToken()
            .then(({ data }) => {
                storeToken(data)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }


    const logoutUser = () => {
        setUser(null)
        setIsLoading(false)
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        authenticateUser()
    }, [])


    return (
        <AuthContext.Provider value={{ storeToken, authenticateUser, user, logoutUser, isLoading, refreshToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }