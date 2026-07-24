import genres from "../../constants/genres";
import { useNavigate } from "react-router-dom";

function GenreExplorer() {
  const navigate = useNavigate();

  return (
    <section className="px-8 py-10">
      <h2 className="text-3xl font-bold text-white mb-2">
        🎭 Browse by Genre
      </h2>

      <p className="text-zinc-400 mb-8">
        Discover movies by your favorite category.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => navigate(`/genres/${genre.id}`)}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="text-3xl mb-3">{genre.emoji}</div>

            <h3 className="text-lg font-semibold text-white">
              {genre.name}
            </h3>
          </button>
        ))}
      </div>
    </section>
  );
}

export default GenreExplorer;