import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import MovieGrid from "../components/MovieGrid/MovieGrid";

import { searchMovies } from "../services/movieApi";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setMovies([]);
        return;
      }

      setLoading(true);

      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-3">
          🔍 Search Movies
        </h1>

        <p className="text-zinc-400 mb-8">
          Search from millions of movies.
        </p>

        <input
          type="text"
          placeholder="Search by movie title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-lg outline-none focus:border-red-500"
        />

        {loading && (
          <h2 className="text-center text-xl mt-10 animate-pulse">
            Searching...
          </h2>
        )}

        {!loading && query && movies.length === 0 && (
          <h2 className="text-center text-xl mt-10 text-zinc-400">
            No movies found.
          </h2>
        )}
      </div>

      <MovieGrid movies={movies} />
    </div>
  );
}

export default Search;