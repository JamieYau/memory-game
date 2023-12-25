import "./App.css";
import CardGrid from "./components/CardGrid";
import { fetchNBAGifs } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    fetchNBAGifs().then(setCards);
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.has(id)) {
      setGameStatus("lost");
      setClickedCards(new Set());
    } else {
      setClickedCards(new Set(clickedCards.add(id)));
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <p>Score: {clickedCards.size}</p>
        <p>Status: {gameStatus}</p>
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
