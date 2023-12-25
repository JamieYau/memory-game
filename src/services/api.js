import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

export async function fetchNBAGifs(searchTerm = "NBA", difficulty = "easy", type = "") {
  let limit;
  switch (difficulty) {
    case "easy":
      limit = 6;
      break;
    case "medium":
      limit = 12;
      break;
    case "hard":
      limit = 18;
      break;
    default:
      throw new Error(`Unknown difficulty level: ${difficulty}`);
  }
  try {
    const { data } = await gf.search(searchTerm, { limit, type });
    return data.map((gif) => ({
      id: gif.id,
      name: gif.title
        .split(" GIF")[0]
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
      imageUrl: gif.images.fixed_height.url,
    }));
  } catch (error) {
    console.error(`Error fetching ${searchTerm} gifs:`, error);
    return [];
  }
}
