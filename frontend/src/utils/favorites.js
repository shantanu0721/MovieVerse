const FAVORITES_KEY = "movieverse_favorites";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function isFavorite(id) {
  return getFavorites().some((movie) => movie.id === id);
}

export function toggleFavorite(movie) {
  const favorites = getFavorites();

  const exists = favorites.some((m) => m.id === movie.id);

  if (exists) {
    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(favorites.filter((m) => m.id !== movie.id))
    );
  } else {
    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify([...favorites, movie])
    );
  }
}