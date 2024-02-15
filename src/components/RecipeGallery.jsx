export const RecipeGallery = ({recipes}) => {
    return <>
        <h1>Recipes</h1>
        {
            recipes.map(recipe =>
                <div key={recipe.id}
                     style={{border: "1px solid", borderRadius: "10px", maxWidth: "500px", margin: "1em auto"}}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} style={{maxWidth: "350px", maxHeight: "350px",borderRadius:"50%"}} alt="food pic"/>
                    <h5>Ingredients:</h5>
                    <ul style={{padding: 0}}>
                        {
                            recipe.ingredients.map(ingr => <li key={ingr} style={{listStyle: "none"}}>
                                {ingr}
                            </li>)
                        }
                    </ul>
                </div>)
        }
    </>
}
