import "./App.css";
import CardGrid from "./components/CardGrid";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState, useEffect } from "react";

function App() {
  // replace the cards array with function that fetches cards from Giphy API
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);
    async function fetchNBAGifs() {
      const { data } = await gf.search("NBA", { limit: 6 });
      return data.map((gif) => ({
        id: gif.id,
        name: gif.title
          .split(" GIF")[0]
          .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        imageUrl: gif.images.fixed_height.url,
      }));
    }

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
        <p>Match cards to win</p>
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
