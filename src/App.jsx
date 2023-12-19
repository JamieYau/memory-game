import "./App.css";
import Card from "./components/Card";
import Placeholder from "./assets/placeholder.png";

function App() {
  return (
    <div className="app">
      <h1>Memory Game</h1>
      <div className="card-grid">
        <Card name="One" imageUrl={Placeholder} onClick={() => console.log("Card Clicked")}/>
      </div>
    </div>
  );
}

export default App;
