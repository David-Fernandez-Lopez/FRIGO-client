import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/home/HomePage"
import SignupPage from "../pages/signup/SignupPage"
import LoginPage from "../pages/login/LoginPage"
import RecipeDetailsPage from "../pages/recipeDetails/RecipeDetailsPage"
import RecipesPage from "../pages/recipes/RecipesPage"
import AboutPage from "../pages/about/AboutPage"
import ProfilePage from "../pages/profile/ProfilePage"
import EditProfilePage from "../pages/editProfile/EditProfilePage"
import ShoppingListPage from "../pages/shoppingList/ShoppingListPage"

/* import PrivateRoute from "./PrivateRoutes" */



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/home" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
            {/*  <Route path="/recipe/:id/edit" element={XXX} /> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/profile/:id/edit" element={<EditProfilePage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />

            {/* <Route element={<PrivateRoute />}>
                <Route path="/perfil" element={<h1>MI PERFIL (PROTEGIDA)</h1>} />
                <Route path="/admin" element={<h1>ADMIN (PROTEGIDA)</h1>} />
            </Route> */}

            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes