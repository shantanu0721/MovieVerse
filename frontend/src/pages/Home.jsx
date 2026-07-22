import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MovieRow from "../components/MovieRow/MovieRow";

import { getTrendingMovies } from "../services/movieApi";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error("Failed to fetch trending movies:", error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white scrollbar-hide">
      <Navbar />

      <Hero />

      <SectionTitle title="🔥 Trending Movies" />
      <MovieRow movies={trendingMovies} />

      {/* We'll add these back in the next modules */}

      {/*
      <SectionTitle title="⭐ Popular Movies" />
      <MovieRow />

      <SectionTitle title="🏆 Top Rated Movies" />
      <MovieRow />

      <SectionTitle title="🎬 Upcoming Movies" />
      <MovieRow />
      */}
    </div>
  );
}

export default Home;