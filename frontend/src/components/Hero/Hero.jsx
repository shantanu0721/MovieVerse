function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

      <h1 className="text-6xl md:text-7xl font-bold">
        Discover Your Next
      </h1>

      <h1 className="text-6xl md:text-7xl font-bold text-red-500 mt-2">
        Favorite Movie
      </h1>

      <p className="text-gray-400 text-lg mt-6 max-w-2xl">
        Search thousands of movies, TV shows, actors and discover
        your next binge-worthy experience.
      </p>

      <div className="mt-10 flex w-full max-w-2xl">

        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 px-6 py-4 rounded-l-xl bg-zinc-900 outline-none"
        />

        <button className="bg-red-600 px-8 rounded-r-xl hover:bg-red-700 transition">
          Search
        </button>

      </div>

    </section>
  );
}

export default Hero;