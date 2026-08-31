import { Link } from "react-router-dom";

export default function PackageCard({ pkg }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl sm:h-auto sm:w-[42%] sm:rounded-l-2xl sm:rounded-tr-none">
        <img
          src={pkg.image}
          alt={`${pkg.name}, ${pkg.country}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-teal-600/90 px-3 py-1 font-mono text-[11px] tracking-wide text-paper">
          {pkg.days}D / {pkg.nights}N
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-teal-500">
              {pkg.country}
            </p>
            <span className="flex items-center gap-1 font-mono text-xs text-mustard-600">
              ★ {pkg.rating}
            </span>
          </div>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">
            {pkg.name}
          </h3>
          <p className="mt-1 text-sm text-ink/70">{pkg.tagline}</p>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-ink/60">{pkg.description}</p>
      </div>

      <div className="ticket-dashed ticket-notch relative flex items-center justify-between gap-3 border-t border-line px-5 py-4 sm:w-40 sm:flex-col sm:items-center sm:justify-center sm:border-t-0 sm:border-l sm:py-6">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">From</p>
          <p className="font-display text-2xl font-semibold text-coral-500">
            ₹{pkg.price.toLocaleString("en-IN")}
          </p>
        </div>
        <Link
          to={`/packages/${pkg.id}`}
          className="whitespace-nowrap rounded-full bg-teal-600 px-4 py-2 text-xs font-semibold text-paper transition hover:bg-teal-500"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
