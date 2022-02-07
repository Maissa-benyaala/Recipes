import "../styles/App.css";
import exampleData from "../data/data";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      {exampleData.map((recipe) => {
        return <Blog recipe={recipe} />;
      })}
    </div>
  );
}

export default App;
