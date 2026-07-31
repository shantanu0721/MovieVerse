import { useNavigate } from "react-router-dom";

function MovieCard({
  movie,
  onRemove,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="flex-shrink-0 w-52 bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-3">
        <h3
          className="font-semibold text-white truncate"
          title={movie.title}
        >
          {movie.title}
        </h3>

        <p className="text-yellow-400 text-sm mt-1">
          ⭐ {movie.vote_average.toFixed(1)}
        </p>

        {onRemove && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(movie.id);
              }}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm font-medium transition"
            >
              Remove
            </button>
          )}
        
      </div>
    </div>
  );
}

export default MovieCard;