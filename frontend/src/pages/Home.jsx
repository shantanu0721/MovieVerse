import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MovieRow from "../components/MovieRow/MovieRow";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white scrollbar-hide">

      <Navbar />

      <Hero />

      <SectionTitle title="🔥 Trending Movies" />
      <MovieRow />

      <SectionTitle title="⭐ Popular Movies" />
      <MovieRow />

      <SectionTitle title="🏆 Top Rated Movies" />
      <MovieRow />

      <SectionTitle title="🎬 Upcoming Movies" />
      <MovieRow />

    </div>
  );
}

export default Home;