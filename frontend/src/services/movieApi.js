import tmdb from "./tmdb";

export async function getTrendingMovies() {
  const response = await tmdb.get("/trending/movie/week");

  return response.data.results;
}