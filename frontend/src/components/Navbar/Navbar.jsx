import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold transition"
      : "hover:text-red-500 transition";

  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold cursor-pointer">
        🎬 MovieVerse
      </h1>

      <div className="flex items-center gap-8">

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

      </div>

    </nav>
  );
}

export default Navbar;