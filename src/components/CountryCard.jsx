import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/85 via-teal-700/10 to-transparent" />
        <h3 className="absolute bottom-4 left-5 font-display text-2xl font-semibold text-paper">
          {country.name}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-ink/65">{country.description}</p>
        <Link
          to={`/countries/${country.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coral-500 transition group-hover:gap-2"
        >
          Explore Packages <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
