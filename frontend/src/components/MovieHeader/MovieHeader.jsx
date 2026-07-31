import { useEffect, useState } from "react";
import {
  isInWatchlist,
  toggleWatchlist,
} from "../../utils/watchlist";


const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

function MovieHeader({
  movie,
  trailer,
  onTrailerClick,
  onAddToWatchlist,
  onAddToFavorites,
  children,
}) {
  const [saved, setSaved] = useState(false);
  

    useEffect(() => {
    setSaved(isInWatchlist(movie.id));
    
  }, [movie]);
  const backdrop = movie.backdrop_path
    ? `${IMAGE_BASE}${movie.backdrop_path}`
    : "";

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div
          className="h-[65vh] min-h-[550px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backdrop})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        {/* Movie Info */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 -mt-72 pb-16">

          <div className="flex flex-col lg:flex-row gap-10">

            {/* Poster */}
            <div className="flex justify-center lg:justify-start flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-72 rounded-3xl object-cover shadow-2xl border border-zinc-800"
              />
            </div>

            {/* Right Side */}
            <div className="flex-1 pt-10">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-3 mt-6">

                <div className="bg-zinc-900/80 backdrop-blur px-4 py-2 rounded-xl">
                  ⭐ {movie.vote_average.toFixed(1)}
                </div>

                <div className="bg-zinc-900/80 backdrop-blur px-4 py-2 rounded-xl">
                  📅 {new Date(movie.release_date).getFullYear()}
                </div>

                <div className="bg-zinc-900/80 backdrop-blur px-4 py-2 rounded-xl">
                  ⏱ {movie.runtime} min
                </div>

              </div>

              <div className="flex flex-wrap gap-3 mt-6">

                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500 text-red-300"
                  >
                    {genre.name}
                  </span>
                ))}

              </div>

              {movie.tagline && (
                <p className="mt-8 text-xl italic text-zinc-300">
                  "{movie.tagline}"
                </p>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                {trailer && (
                  <button
                    onClick={onTrailerClick}
                    className="bg-red-600 hover:bg-red-700 transition px-7 py-3 rounded-xl font-semibold"
                  >
                    ▶ Watch Trailer
                  </button>
                )}

                <button
                  onClick={onAddToWatchlist}
                  className={`px-7 py-3 rounded-xl font-semibold transition ${
                    saved
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  }`}
                >
                  {saved ? "✔ In Watchlist" : "+ Add to Watchlist"}
                </button>
                <button
                  onClick={onAddToFavorites}
                  className="px-7 py-3 rounded-xl font-semibold bg-zinc-800 hover:bg-zinc-700 transition"
>
❤️ Add to Favorites
                </button>
              </div>

              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">
                  Overview
                </h2>

                <p className="text-zinc-300 leading-8">
                  {movie.overview}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Rest of Page */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {children}
      </div>
    </>
  );
}

export default MovieHeader;