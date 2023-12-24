import { GiphyFetch } from "@giphy/js-fetch-api";

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

export async function fetchNBAGifs(
  searchTerm = "NBA",
  limit = 6,
  type = "gifs"
) {
  const { data } = await gf.search(searchTerm, { limit, type });
  return data.map((gif) => ({
    id: gif.id,
    name: gif.title
      .split(" GIF")[0]
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
    imageUrl: gif.images.fixed_height.url,
  }));
}