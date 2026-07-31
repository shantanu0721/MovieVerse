import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import api from "../services/api";
import { getMovieById } from "../services/movieApi";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  async function fetchFavorites() {
    try {
      const response = await api.get("/favorites/");

      const movieDetails = await Promise.all(
        response.data.map((item) =>
          getMovieById(item.movie_id)
        )
      );

      setMovies(movieDetails);
    } catch (error) {
      console.error(error);
    }
  }

  fetchFavorites();
}, []);

const removeFromFavorites = async (movieId) => {
  try {
    await api.delete(`/favorites/${movieId}`);

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
          <MovieGrid
  movies={movies}
  onRemove={removeFromFavorites}
/>
        )}
      </main>
    </div>
  );
}

export default Favorites;