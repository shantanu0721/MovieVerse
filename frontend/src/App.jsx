import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Genres from "./pages/Genres";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import Favorites from "./pages/Favorites";
import GenreMovies from "./pages/GenreMovies";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/genres" element={<Genres />} />

        <Route path="/search" element={<Search />} />

        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <Watchlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />

        <Route path="/genres/:genreId" element={<GenreMovies />} />

        <Route path="/movie/:movieId" element={<MovieDetails />} />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;