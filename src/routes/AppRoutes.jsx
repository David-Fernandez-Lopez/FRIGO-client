import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"

import HomePage from "../pages/Home/HomePage"
import RecipeDetailsPage from "../pages/RecipeDetails/RecipeDetailsPage"
import RecipesPage from "../pages/Recipes/RecipesPage"
import AboutPage from "../pages/About/AboutPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import ShoppingListPage from "../pages/ShoppingList/ShoppingListPage"
import LogInForm from "../components/LogInForm/LogInForm"
import EditProfilePage from "../pages/EditProfile/EditProfilePage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:id/information" element={<RecipeDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/*  <Route path="/login" element={<LogInForm /> } /> */}

            <Route element={<PrivateRoutes />}>
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/profile/:id/edit" element={<EditProfilePage />} />
                <Route path="/shopping-list" element={<ShoppingListPage />} />
            </Route>

            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes