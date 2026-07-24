import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { getFavorites } from "../utils/favorites";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getFavorites());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-8">
          ❤️ Favorite Movies
        </h1>

        {movies.length === 0 ? (
          <div className="text-center mt-24">
            <h2 className="text-3xl font-semibold">
              No favorite movies yet.
            </h2>

            <p className="text-zinc-400 mt-3">
              Add your favorite movies to see them here.
            </p>
          </div>
        ) : (
          <MovieGrid movies={movies} />
        )}
      </main>
    </div>
  );
}

export default Favorites;