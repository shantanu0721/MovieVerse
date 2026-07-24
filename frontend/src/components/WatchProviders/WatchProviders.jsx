function WatchProviders({ providers }) {
  const renderSection = (title, data) => {
    if (!data?.length) return null;

    return (
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-5">{title}</h3>

        <div className="flex flex-wrap gap-5">
          {data.map((provider) => (
            <div
              key={provider.provider_id}
              className="w-28 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-center hover:border-red-500 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                alt={provider.provider_name}
                className="w-14 h-14 mx-auto rounded-xl"
              />

              <p className="text-xs mt-3 text-zinc-300 leading-5">
                {provider.provider_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">
        📺 Where to Watch
      </h2>

      {!providers ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-zinc-400">
          Streaming information is not available for your region.
        </div>
      ) : (
        <>
          {renderSection("Included with Subscription", providers.flatrate)}
          {renderSection("Rent", providers.rent)}
          {renderSection("Buy", providers.buy)}
        </>
      )}
    </section>
  );
}

export default WatchProviders;