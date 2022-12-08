import './RecipesResults.css'

const RecipesResults = ({ recipesToSerach }) => {

    console.log(recipesToSerach)

    return (
        <>
            {recipesToSerach && <section className="CountriesList" style={{ "maxHeight": "50vh", "overflow": "scroll" }}>
                {recipesToSerach.map(elm => {
                    return <h1>{elm.title}</h1>
                }
                )}
            </section>}
        </>
    )
}

export default RecipesResults