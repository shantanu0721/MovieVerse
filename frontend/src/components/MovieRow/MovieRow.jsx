import MovieCard from "../MovieCard/MovieCard";

const dummyMovies = [
  {
    title: "Interstellar",
    rating: 8.7,
    poster: "https://placehold.co/400x600/1f1f23/ffffff?text=Movie",
  },
  {
    title: "Inception",
    rating: 8.8,
    poster: "https://placehold.co/400x600/1f1f23/ffffff?text=Movie",
  },
  {
    title: "The Batman",
    rating: 8.0,
    poster: "https://placehold.co/400x600/1f1f23/ffffff?text=Movie",
  },
  {
    title: "Dune",
    rating: 8.3,
    poster: "https://placehold.co/400x600/1f1f23/ffffff?text=Movie",
  },
  {
    title: "Oppenheimer",
    rating: 8.5,
    poster: "https://placehold.co/400x600/1f1f23/ffffff?text=Movie",
  },
  {
    title: "Avatar",
    rating: 7.9,
    poster: "https://placehold.co/400x600/1f1f23/ffffff?text=Movie",
  },
];

function MovieRow() {
  return (
    <div className="flex gap-6 overflow-x-auto px-10 pb-4">
      {dummyMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          rating={movie.rating}
          poster={movie.poster}
        />
      ))}
    </div>
  );
}

export default MovieRow;