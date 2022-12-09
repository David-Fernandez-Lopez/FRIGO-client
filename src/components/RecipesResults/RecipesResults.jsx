import './RecipesResults.css'

const RecipesResults = ({ recipesToSearch }) => {

    console.log(recipesToSearch)

    return (
        <>
            {recipesToSearch && <section className="CountriesList" style={{ "maxHeight": "50vh", "overflow": "scroll" }}>
                {recipesToSearch.map(elm => {
                    return <h1>{elm.title}</h1>
                }
                )}
            </section>}
        </>
    )
}

export default RecipesResults