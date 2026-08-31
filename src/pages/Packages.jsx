import { useMemo, useState } from "react";
import PackageCard from "../components/PackageCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import packages from "../data/packages.js";

export default function Packages() {
  const [countryFilter, setCountryFilter] = useState("All");
  const countryOptions = useMemo(
    () => ["All", ...new Set(packages.map((p) => p.country))],
    []
  );

  const visible =
    countryFilter === "All"
      ? packages
      : packages.filter((p) => p.country === countryFilter);

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="All Packages"
        title="Pick a trip, or start close to one"
        description="Every package below is a fixed itinerary you can book directly, or adjust with your travel planner."
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {countryOptions.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCountryFilter(c)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              countryFilter === c
                ? "border-teal-600 bg-teal-600 text-paper"
                : "border-line bg-paper text-ink/70 hover:border-teal-400"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6">
        {visible.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
        {visible.length === 0 && (
          <p className="text-sm text-ink/60">No packages found for that filter yet.</p>
        )}
      </div>
    </div>
  );
}
