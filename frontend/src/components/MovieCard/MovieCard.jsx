function MovieCard({ title, rating, poster }) {
  return (
    <div className="flex-shrink-0 w-52 bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300">

      <img
        src={poster}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-3">

        <h3
          className="font-semibold text-white line-clamp-1"
          title={title}
        >
          {title}
        </h3>

        <p className="text-yellow-400 text-sm mt-1">
          ⭐ {rating}
        </p>

      </div>

    </div>
  );
}

export default MovieCard;