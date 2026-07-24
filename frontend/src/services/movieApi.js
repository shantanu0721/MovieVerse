import tmdb from "./tmdb";

export async function getTrendingMovies() {
  const response = await tmdb.get("/trending/movie/week");
  return response.data.results;
}

export async function getFeaturedMovie() {
  const response = await tmdb.get("/trending/movie/week");

  const movies = response.data.results;
  const randomIndex = Math.floor(Math.random() * movies.length);

  return movies[randomIndex];
}

export async function getMoviesByGenre(genreId) {
  const response = await tmdb.get("/discover/movie", {
    params: {
      with_genres: genreId,
    },
  });

  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
}

export async function getMovieTrailer(movieId) {
  const response = await tmdb.get(`/movie/${movieId}/videos`);

  return (
    response.data.results.find(
      (video) =>
        video.type === "Trailer" &&
        video.site === "YouTube"
    ) || null
  );
}

export async function getWatchProviders(movieId) {
  const response = await tmdb.get(
    `/movie/${movieId}/watch/providers`
  );

  return response.data.results.IN || null;
}

export async function getMovieCast(movieId) {
  const response = await tmdb.get(
    `/movie/${movieId}/credits`
  );

  return response.data.cast;
}

export async function getSimilarMovies(movieId) {
  const response = await tmdb.get(
    `/movie/${movieId}/similar`
  );

  return response.data.results;
}
export async function getPopularMovies() {
  const response = await tmdb.get("/movie/popular");
  return response.data.results;
}

export async function getTopRatedMovies() {
  const response = await tmdb.get("/movie/top_rated");
  return response.data.results;
}

export async function getNowPlayingMovies() {
  const response = await tmdb.get("/movie/now_playing");
  return response.data.results;
}

export async function getUpcomingMovies() {
  const response = await tmdb.get("/movie/upcoming");
  return response.data.results;
}
export async function searchMovies(query) {
  if (!query.trim()) return [];

  const response = await tmdb.get("/search/movie", {
    params: {
      query,
    },
  });

  return response.data.results;
}