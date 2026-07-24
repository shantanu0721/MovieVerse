import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/MovieCard/MovieCard";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from "../services/movieApi";

function Movies() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const [
          popularData,
          topRatedData,
          nowPlayingData,
          upcomingData,
        ] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getNowPlayingMovies(),
          getUpcomingMovies(),
        ]);

        setPopular(popularData);
        setTopRated(topRatedData);
        setNowPlaying(nowPlayingData);
        setUpcoming(upcomingData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const renderSection = (title, movies) => (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl animate-pulse">
          🎬 Loading Movies...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <h1 className="text-5xl font-bold mb-12">
          🎬 Movies
        </h1>

        {renderSection("🔥 Popular", popular)}

        {renderSection("⭐ Top Rated", topRated)}

        {renderSection("🎥 Now Playing", nowPlaying)}

        {renderSection("🚀 Upcoming", upcoming)}
      </main>
    </div>
  );
}

export default Movies;