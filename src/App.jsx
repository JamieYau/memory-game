import "./App.css";
import StartScreen from "./components/StartScreen";
import CardGrid from "./components/CardGrid";
import Modal from "./components/Modal";
import { fetchNBAGifs } from "./services/api";
import { useState, useEffect } from "react";
import { shuffle } from "./utils/utils";
import NbaLogo from "./assets/nba-logo.svg";

function App() {
  const [cards, setCards] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    if (difficulty === null) return;
    fetchNBAGifs("NBA", difficulty, "gifs").then(setCards);
  }, [difficulty]);

  const handleStart = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

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
    fetchNBAGifs("NBA", difficulty, "gifs").then(setCards);
    setCards(shuffle(cards));
  };

  if (difficulty === null) {
    return <StartScreen onStart={handleStart} />;
  }

  const backToStartScreen = () => {
    setDifficulty(null);
    setClickedCards(new Set());
  };

  return (
    <div className="app">
      <header>
        <img src={NbaLogo} alt="NBA Logo" onClick={backToStartScreen} />
        <h1>Memory Game</h1>
      </header>
      <main>
        <p>Score: {clickedCards.size}</p>
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
