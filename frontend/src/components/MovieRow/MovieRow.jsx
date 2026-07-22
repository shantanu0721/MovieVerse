import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ movies }) {
  return (
    <div className="flex gap-6 overflow-x-auto px-10 pb-6 scrollbar-hide">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average.toFixed(1)}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

export default MovieRow;