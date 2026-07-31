import {
  NavLink,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isMoviePage = pathname.startsWith("/movie/");

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-red-500 font-semibold"
        : "text-white hover:text-red-400"
    }`;

  return (
    <header
      className={`${
        isMoviePage
          ? "fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10"
          : "sticky top-0 z-50 bg-black border-b border-zinc-800"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <span className="text-3xl">🎬</span>

          <span className="text-3xl font-bold tracking-tight text-white">
            MovieVerse
          </span>
        </Link>

        {/* Navigation + Auth */}
        <div className="flex items-center gap-8">

          <nav className="flex items-center gap-8 text-[17px]">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/movies" className={navLinkClass}>
              Movies
            </NavLink>

            <NavLink to="/genres" className={navLinkClass}>
              Genres
            </NavLink>

            <NavLink to="/search" className={navLinkClass}>
              Search
            </NavLink>

            <NavLink to="/watchlist" className={navLinkClass}>
              Watchlist
            </NavLink>

            <NavLink to="/favorites" className={navLinkClass}>
              Favorites
            </NavLink>

          </nav>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-medium transition"
            >
              Login
            </Link>
          )}

        </div>

      </div>
    </header>
  );
}

export default Navbar;