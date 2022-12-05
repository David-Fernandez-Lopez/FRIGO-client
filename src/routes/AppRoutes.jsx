import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/home/HomePage"
import RecipeDetailsPage from "../pages/recipeDetails/RecipeDetailsPage"
import RecipesPage from "../pages/recipes/RecipesPage"
import AboutPage from "../pages/about/AboutPage"
import ProfilePage from "../pages/profile/ProfilePage"
import ShoppingListPage from "../pages/shoppingList/ShoppingListPage"

/* import PrivateRoute from "./PrivateRoutes" */



const AppRoutes = () => {

    return (
        <Routes>
         {/*    <Route path="/signup" element={ Modal de Sign up } />
            <Route path="/login" element={ Modal de Log in } /> */}

            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
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