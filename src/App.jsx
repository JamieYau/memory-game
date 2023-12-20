import "./App.css";
import CardGrid from "./components/CardGrid";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState, useEffect } from "react";

function App() {
  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
  // replace the cards array with function that fetches cards from Giphy API
  async function fetchNBAGifs() {
    const { data } = await gf.search("NBA", { limit: 6 });
    return data.map((gif) => ({
      id: gif.id,
      name: gif.title,
      imageUrl: gif.images.fixed_height.url,
    }));
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchNBAGifs().then(setCards);
  }, []);

  const handleCardClick = (card) => {
    console.log(card);
    console.log(import.meta.env.VITE_GIPHY_API_KEY);
  };

  return (
    <div className="app">
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <p>Match cards to win</p>
        <CardGrid cards={cards} onCardClick={handleCardClick} />
      </main>
    </div>
  );
}

export default App;
