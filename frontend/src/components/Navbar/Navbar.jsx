import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const isMoviePage = pathname.startsWith("/movie/");

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

        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <span className="text-3xl">🎬</span>

          <span className="text-3xl font-bold tracking-tight">
            MovieVerse
          </span>
        </Link>

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
      </div>
    </header>
  );
}

export default Navbar;