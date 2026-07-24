import { useNavigate } from "react-router-dom";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w300";
const FALLBACK =
  "https://placehold.co/300x450/18181b/ffffff?text=No+Image";

function CastSection({ cast }) {
  const navigate = useNavigate();

  if (!cast?.length) return null;

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        🎭 Top Cast
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-4">
        {cast.slice(0, 12).map((actor) => (
          <div
            key={actor.id}
            className="w-40 flex-shrink-0 bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <img
              src={
                actor.profile_path
                  ? `${IMAGE_BASE}${actor.profile_path}`
                  : FALLBACK
              }
              alt={actor.name}
              className="w-full h-60 object-cover"
              onError={(e) => {
                e.currentTarget.src = FALLBACK;
              }}
            />

            <div className="p-3">
              <h3
                className="font-semibold text-white truncate"
                title={actor.name}
              >
                {actor.name}
              </h3>

              <p
                className="text-sm text-zinc-400 truncate mt-1"
                title={actor.character}
              >
                {actor.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CastSection;