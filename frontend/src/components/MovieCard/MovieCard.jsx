function MovieCard({
  title,
  rating,
  poster,
}) {
  return (
    <div className="w-56 h-80 bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300">

      <img
        src={poster}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold truncate">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          ⭐ {rating}
        </p>

      </div>

    </div>
  );
}

export default MovieCard;