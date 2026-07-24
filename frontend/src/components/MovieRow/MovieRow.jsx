import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ movies }) {
  return (
    <div className="flex gap-6 overflow-x-auto px-10 pb-6 scrollbar-hide">
      {movies.map((movie) => (
        <MovieCard

          key={movie.id}

          movie={movie}

        />
      ))}
    </div>
  );
}

export default MovieRow;