import "../styles/App.css";
import exampleData from "../data/data";
import Recipes from "./Recipes";

function App() {
  return (
    <div className="App">
      {exampleData.map((recipe) => {
        return <Recipes recipe={recipe} />;
      })}
    </div>
  );
}

export default App;
