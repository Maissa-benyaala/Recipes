import '../styles/App.css';
import exampleData from '../data/data';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        {exampleData.map(img => {
          return (
          <div className='card'>
            <div className='text'>
             <h1> {img.title} </h1>
              <p> {img.description} </p>   
            </div>
            <div className='main'>
              <img src={img.imgUrl} alt={img.name} />        
            </div>
           </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
