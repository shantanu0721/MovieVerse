import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { getWatchlist } from "../utils/watchlist";

function Watchlist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getWatchlist());
  }, []);

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
          <MovieGrid movies={movies} />
        )}
      </main>
    </div>
  );
}

export default Watchlist;