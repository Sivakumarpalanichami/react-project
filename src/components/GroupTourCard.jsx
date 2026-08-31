export default function GroupTourCard({ tour, onEnquire }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">
      <div className="h-48 w-full overflow-hidden sm:h-auto sm:w-2/5">
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-teal-500">
            {tour.destination}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">{tour.name}</h3>
          <p className="mt-2 text-sm text-ink/65">{tour.description}</p>

          <dl className="mt-4 grid grid-cols-3 gap-3 text-center font-mono text-xs">
            <div className="rounded-lg bg-cream px-2 py-2">
              <dt className="text-ink/50">Group Size</dt>
              <dd className="mt-1 font-semibold text-ink">{tour.people}</dd>
            </div>
            <div className="rounded-lg bg-cream px-2 py-2">
              <dt className="text-ink/50">Duration</dt>
              <dd className="mt-1 font-semibold text-ink">{tour.duration}</dd>
            </div>
            <div className="rounded-lg bg-cream px-2 py-2">
              <dt className="text-ink/50">Price</dt>
              <dd className="mt-1 font-semibold text-coral-500">
                ₹{tour.price.toLocaleString("en-IN")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onEnquire?.(tour)}
            className="rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-coral-600"
          >
            Enquire Now
          </button>
          <button
            type="button"
            onClick={() => onEnquire?.(tour)}
            className="rounded-full border border-teal-500 px-5 py-2.5 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
          >
            View Tour
          </button>
        </div>
      </div>
    </article>
  );
}
