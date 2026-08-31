import { useParams, Link } from "react-router-dom";
import PackageCard from "../components/PackageCard.jsx";
import countries from "../data/countries.js";
import packages from "../data/packages.js";

export default function CountryPackages() {
  const { country: countrySlug } = useParams();
  const country = countries.find((c) => c.slug === countrySlug);
  const matches = packages.filter((p) => p.countrySlug === countrySlug);

  if (!country) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">
          We don't have that country listed
        </h1>
        <Link
          to="/countries"
          className="mt-6 inline-block rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-paper"
        >
          Browse All Countries
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-64 w-full overflow-hidden sm:h-80">
        <img src={country.image} alt={country.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/90 via-teal-700/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-5 pb-8 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-mustard-400">
            Destination
          </p>
          <h1 className="mt-1 font-display text-4xl font-semibold text-paper">
            {country.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <p className="max-w-2xl text-sm leading-relaxed text-ink/65">{country.description}</p>

        <div className="mt-10 grid gap-6">
          {matches.length > 0 ? (
            matches.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-line p-10 text-center">
              <p className="text-sm text-ink/60">
                We don't have a fixed package for {country.name} just yet —
                but we can build one for you.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-paper"
              >
                Enquire About {country.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
