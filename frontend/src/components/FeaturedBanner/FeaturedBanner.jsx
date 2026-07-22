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
      <section className="h-[80vh] bg-zinc-900 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </section>
    );
  }

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-16">
        <div className="max-w-2xl">

          <h1 className="text-6xl font-bold text-white mb-6">
            {movie.title}
          </h1>

          <p className="text-yellow-400 text-xl mb-4">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <p className="text-gray-200 text-lg leading-8">
            {movie.overview}
          </p>

        </div>
      </div>
    </section>
  );
}

export default FeaturedBanner;