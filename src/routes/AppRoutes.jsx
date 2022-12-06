import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/Home/HomePage"
import RecipeDetailsPage from "../pages/RecipeDetails/RecipeDetailsPage"
import RecipesPage from "../pages/Recipes/RecipesPage"
import AboutPage from "../pages/About/AboutPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import ShoppingListPage from "../pages/ShoppingList/ShoppingListPage"

/* import PrivateRoute from "./PrivateRoutes" */



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:id/information" element={<RecipeDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
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