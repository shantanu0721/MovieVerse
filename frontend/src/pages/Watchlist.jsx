import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieGrid from "../components/MovieGrid/MovieGrid";

import api from "../services/api";
import { getMovieById } from "../services/movieApi";

function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  async function fetchWatchlist() {
    try {
      const response = await api.get("/watchlist/");
      const movieDetails = await Promise.all(
            response.data.map((item) => getMovieById(item.movie_id))
          );

setMovies(movieDetails);
    } catch (error) {
      console.error(error);
    }
  }

  fetchWatchlist();
}, []);

const removeFromWatchlist = async (movieId) => {
  try {
    await api.delete(`/watchlist/${movieId}`);

    setMovies((prev) =>
      prev.filter((movie) => movie.id !== movieId)
    );
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-8">
          📺 My Watchlist
        </h1>

        {movies.length === 0 ? (
          <div className="text-center mt-24">
            <h2 className="text-3xl font-semibold">
              Your watchlist is empty.
            </h2>

            <p className="text-zinc-400 mt-3">
              Add movies to watch them later.
            </p>
          </div>
        ) : (
          <MovieGrid
              movies={movies}
              onRemove={removeFromWatchlist}
            />
        )}
      </main>
    </div>
  );
}

export default Watchlist;