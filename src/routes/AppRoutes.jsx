import { Routes, Route } from "react-router-dom"
import homePage from "../pages/home/homePage"
import signupPage from "../pages/signup/signupPage"
import loginPage from "../pages/login/loginPage"
import recipeDetailsPage from "../pages/recipeDetails/recipeDetailsPage"
import aboutPage from "../pages/about/aboutPage"
import profilePage from "../pages/profile/profilePage"
import shoppingListPage from "../pages/shoppingList/shoppingListPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/home" element={<homePage />} />
            <Route path="/signup" element={<signupPage />} />
            <Route path="/login" element={<loginPage />} />
            <Route path="/recipe/:id" element={<recipeDetailsPage />} />
        {/*     <Route path="/recipe/:id/edit" element={XXX} /> */}
            <Route path="/about" element={<aboutPage />} />
            <Route path="/profile/:id" element={<profilePage />} />
           {/*  <Route path="/profile/:id/edit" element={XXX} /> */}
            <Route path="/shopping-list" element={<shoppingListPage />} />
            <Route path="/*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes