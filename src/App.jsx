import "./App.css";
import StartScreen from "./components/StartScreen";
import Scoreboard from "./components/Scoreboard";
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
  const [score, setScore] = useState({ current: 0, high: 0 });

  useEffect(() => {
    if (difficulty === null) return;
    fetchNBAGifs("NBA", difficulty, "gifs").then(setCards);
  }, [difficulty]);

  const handleStart = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const handleIncreaseScore = () => {
    setScore((prevScore) => {
      const newCurrentScore = prevScore.current + 1;
      const newHighScore = Math.max(prevScore.high, newCurrentScore);
      return { current: newCurrentScore, high: newHighScore };
    });
  };

  const resetCurrentScore = () => {
    setScore((prevScore) => ({ ...prevScore, current: 0 }));
  };

  const handleCardClick = (id) => {
    if (clickedCards.has(id)) {
      setGameStatus("lost");
    } else {
      setClickedCards(new Set(clickedCards.add(id)));
      setCards(shuffle(cards));
      handleIncreaseScore();
    }
    if (clickedCards.size === cards.length) {
      setGameStatus("won");
    }
  };

  const handleRetry = () => {
    setGameStatus("playing");
    setClickedCards(new Set());
    fetchNBAGifs("NBA", difficulty, "gifs").then(setCards);
    setCards(shuffle(cards));
    resetCurrentScore();
  };

  if (difficulty === null) {
    return <StartScreen onStart={handleStart} />;
  }

  const backToStartScreen = () => {
    setDifficulty(null);
    setClickedCards(new Set());
    resetCurrentScore();
  };

  return (
    <div className="app">
      <header>
        <img src={NbaLogo} alt="NBA Logo" onClick={backToStartScreen} />
        <h1>Memory Game</h1>
      </header>
      <main>
        <Scoreboard currentScore={score.current} highScore={score.high} />
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
