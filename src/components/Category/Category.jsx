import './Category.css'
import CategoryCard from '../CategoryCard/CategoryCard'

function Category(props) {

    // const [recipes, setRecipes] = useState()

    // const loadRecipes = () => {
    //     recipesService
    //         .getRecipes()
    //         .then(({ data }) => setRecipes(data))
    //         .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     loadRecipes()
    // }, [])


    return (
        <>
            <CategoryCard />
            <CategoryCard />
        </>
    )

}

export default Category