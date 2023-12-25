import "./App.css";
import CardGrid from "./components/CardGrid";
import Modal from "./components/Modal";
import { fetchNBAGifs } from "./services/api";
import { useState, useEffect } from "react";
import { shuffle } from "./utils/utils";

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
    } else {
      setClickedCards(new Set(clickedCards.add(id)));
      setCards(shuffle(cards));
      if (clickedCards.size === cards.length) {
        setGameStatus("won");
      }
    }
  };

  const handleRetry = () => {
    setGameStatus("playing");
    setClickedCards(new Set());
    fetchNBAGifs().then(setCards);
    setCards(shuffle(cards));
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
      <Modal gameStatus={gameStatus} onRetry={handleRetry} />
    </div>
  );
}

export default App;
