import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Genres() {
  const navigate = useNavigate();

  const genres = [
    { id: 28, name: "Action", emoji: "💥" },
    { id: 12, name: "Adventure", emoji: "🗺️" },
    { id: 16, name: "Animation", emoji: "🎨" },
    { id: 35, name: "Comedy", emoji: "😂" },
    { id: 80, name: "Crime", emoji: "🕵️" },
    { id: 99, name: "Documentary", emoji: "🎥" },
    { id: 18, name: "Drama", emoji: "🎭" },
    { id: 10751, name: "Family", emoji: "👨‍👩‍👧" },
    { id: 14, name: "Fantasy", emoji: "🧙" },
    { id: 36, name: "History", emoji: "🏛️" },
    { id: 27, name: "Horror", emoji: "👻" },
    { id: 10402, name: "Music", emoji: "🎵" },
    { id: 9648, name: "Mystery", emoji: "🔎" },
    { id: 10749, name: "Romance", emoji: "❤️" },
    { id: 878, name: "Science Fiction", emoji: "🚀" },
    { id: 53, name: "Thriller", emoji: "😱" },
    { id: 10752, name: "War", emoji: "⚔️" },
    { id: 37, name: "Western", emoji: "🤠" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-3">
          Browse by Genre
        </h1>

        <p className="text-gray-400 mb-10">
          Choose your favorite movie category.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre) => (
            <div
              key={genre.id}
              onClick={() => navigate(`/genres/${genre.id}`)}
              className="bg-zinc-900 hover:bg-red-600 rounded-2xl p-8 cursor-pointer transition duration-300 hover:scale-105 shadow-lg"
            >
              <div className="text-5xl mb-4">
                {genre.emoji}
              </div>

              <h2 className="text-2xl font-semibold">
                {genre.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Genres;