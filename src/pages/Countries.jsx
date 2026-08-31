import CountryCard from "../components/CountryCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import countries from "../data/countries.js";

export default function Countries() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionHeading
        eyebrow="Destinations"
        title="Countries we plan trips to"
        description="Pick a country to see the packages we currently offer there."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <CountryCard key={country.slug} country={country} />
        ))}
      </div>
    </div>
  );
}
