import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar/Navbar";
import MovieHeader from "../components/MovieHeader/MovieHeader";
import TrailerModal from "../components/TrailerModal/TrailerModal";
import WatchProviders from "../components/WatchProviders/WatchProviders";
import CastSection from "../components/CastSection/CastSection";
import SimilarMovies from "../components/SimilarMovies/SimilarMovies";

import {
  getMovieDetails,
  getMovieTrailer,
  getWatchProviders,
  getMovieCast,
  getSimilarMovies,
} from "../services/movieApi";

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [providers, setProviders] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);

      try {
        const [
          movieData,
          trailerData,
          providerData,
          castData,
          similarData,
        ] = await Promise.all([
          getMovieDetails(movieId),
          getMovieTrailer(movieId),
          getWatchProviders(movieId),
          getMovieCast(movieId),
          getSimilarMovies(movieId),
        ]);

        setMovie(movieData);
        setTrailer(trailerData);
        setProviders(providerData);
        setCast(castData);
        setSimilarMovies(similarData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [movieId]);

  const addToWatchlist = async () => {
  try {
    await api.post(`/watchlist/${movie.id}`);

    alert("Movie added to Watchlist ✅");
  } catch (error) {
    alert(error.response?.data?.detail || "Something went wrong");
  }
};

  const addToFavorites = async () => {
  try {
    await api.post(`/favorites/${movie.id}`);
    alert("Movie added to Favorites ❤️");
  } catch (error) {
    alert(
      error.response?.data?.detail || "Something went wrong"
    );
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl animate-pulse">
          🎬 Loading Movie...
        </h2>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Movie not found.
      </div>
    );
  }

    return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <MovieHeader
        movie={movie}
        trailer={trailer}
        onTrailerClick={() => setShowTrailer(true)}
        onAddToWatchlist={addToWatchlist}
        onAddToFavorites={addToFavorites}
      >
        <WatchProviders providers={providers} />

        <CastSection cast={cast} />

        
      </MovieHeader>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">

          <SimilarMovies movies={similarMovies} />

      </div>

      <TrailerModal
        trailerKey={trailer?.key}
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
      />
    </div>
  );
}

export default MovieDetails;