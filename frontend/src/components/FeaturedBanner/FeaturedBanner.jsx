import { useEffect, useState } from "react";
import { getFeaturedMovie } from "../../services/movieApi";

function FeaturedBanner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchFeaturedMovie() {
      try {
        const featuredMovie = await getFeaturedMovie();
        setMovie(featuredMovie);
      } catch (error) {
        console.error("Failed to fetch featured movie:", error);
      }
    }

    fetchFeaturedMovie();
  }, []);

  if (!movie) {
    return (
      <section className="h-[70vh] bg-zinc-900 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </section>
    );
  }

  return (
    <section className="h-[70vh] bg-zinc-900 flex items-center justify-center text-white">
      <div className="text-center max-w-3xl px-6">

        <h1 className="text-5xl font-bold mb-6">
          {movie.title}
        </h1>

        <p className="text-yellow-400 text-xl mb-4">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        <p className="text-gray-300 text-lg leading-8">
          {movie.overview}
        </p>

      </div>
    </section>
  );
}

export default FeaturedBanner;