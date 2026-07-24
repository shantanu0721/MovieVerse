import MovieCard from "../MovieCard/MovieCard";

function SimilarMovies({ movies }) {
  if (!movies?.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        🎬 Similar Movies
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {movies.slice(0, 12).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default SimilarMovies;