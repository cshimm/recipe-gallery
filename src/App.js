import './App.css';
import {RecipeGallery} from "./components/RecipeGallery";
import {recipes} from "./data/recipes";

function App() {
  return (
    <div className="App">
      <RecipeGallery recipes={recipes}/>
    </div>
  );
}

export default App;
