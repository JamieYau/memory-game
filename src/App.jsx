import "./App.css";
import CardGrid from "./components/CardGrid";
import Placeholder from "./assets/placeholder.png";

function App() {
  const cards = [
    { id: 1, name: "One", imageUrl: Placeholder },
    { id: 2, name: "Two", imageUrl: Placeholder },
    { id: 3, name: "Three", imageUrl: Placeholder },
    { id: 4, name: "Four", imageUrl: Placeholder },
    { id: 5, name: "Five", imageUrl: Placeholder },
    { id: 6, name: "Six", imageUrl: Placeholder },
  ];

  return (
    <div className="app">
      <h1>Memory Game</h1>
      <CardGrid cards={cards} />
    </div>
  );
}

export default App;
