import MovieCard from "../MovieCard/MovieCard";

function MovieGrid({ movies }) {
  return (
    <div className="px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;