import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMoviesByGenre } from "../services/movieApi";

import MovieGrid from "../components/MovieGrid/MovieGrid";
import Navbar from "../components/Navbar/Navbar";

function GenreMovies() {
  const { genreId } = useParams();

  const genres = [
    { id: 28, name: "Action", emoji: "💥" },
    { id: 12, name: "Adventure", emoji: "🗺️" },
    { id: 16, name: "Animation", emoji: "🎨" },
    { id: 35, name: "Comedy", emoji: "😂" },
    { id: 80, name: "Crime", emoji: "🕵️" },
    { id: 99, name: "Documentary", emoji: "🎥" },
    { id: 18, name: "Drama", emoji: "🎭" },
    { id: 10751, name: "Family", emoji: "👨‍👩‍👧" },
    { id: 14, name: "Fantasy", emoji: "🧙" },
    { id: 36, name: "History", emoji: "🏛️" },
    { id: 27, name: "Horror", emoji: "👻" },
    { id: 10402, name: "Music", emoji: "🎵" },
    { id: 9648, name: "Mystery", emoji: "🔎" },
    { id: 10749, name: "Romance", emoji: "❤️" },
    { id: 878, name: "Science Fiction", emoji: "🚀" },
    { id: 53, name: "Thriller", emoji: "😱" },
    { id: 10752, name: "War", emoji: "⚔️" },
    { id: 37, name: "Western", emoji: "🤠" },
  ];

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      try {
        const data = await getMoviesByGenre(genreId);
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [genreId]);

  const currentGenre = genres.find(
    (genre) => genre.id === Number(genreId)
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl animate-pulse">
          🎬 Loading movies...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold text-white">
          {currentGenre?.emoji} {currentGenre?.name}
        </h1>

        <p className="text-zinc-400 mt-3">
          Discover the best {currentGenre?.name} movies.
        </p>
      </div>

      <MovieGrid movies={movies} />
    </div>
  );
}

export default GenreMovies;