import "./App.css";
import CardGrid from "./components/CardGrid";
import { fetchNBAGifs } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchNBAGifs().then(setCards);
  }, []);

  const handleCardClick = (card) => {
    console.log(card);
  };

  return (
    <div className="app">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <p>Click each card ONCE to Win</p>
        <CardGrid cards={cards} onCardClick={handleCardClick} />
      </main>
      <footer>
        <p>
          Powered by <a href="https://giphy.com/">Giphy</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
