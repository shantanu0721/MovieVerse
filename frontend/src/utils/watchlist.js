const WATCHLIST_KEY = "movieverse_watchlist";

export function getWatchlist() {
  return JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
}

export function isInWatchlist(id) {
  return getWatchlist().some((movie) => movie.id === id);
}

export function toggleWatchlist(movie) {
  const watchlist = getWatchlist();

  const exists = watchlist.some((m) => m.id === movie.id);

  if (exists) {
    localStorage.setItem(
      WATCHLIST_KEY,
      JSON.stringify(watchlist.filter((m) => m.id !== movie.id))
    );
  } else {
    localStorage.setItem(
      WATCHLIST_KEY,
      JSON.stringify([...watchlist, movie])
    );
  }
}