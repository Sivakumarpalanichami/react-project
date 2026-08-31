import { Link } from "react-router-dom";
import PackageCard from "../components/PackageCard.jsx";
import CountryCard from "../components/CountryCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import packages from "../data/packages.js";
import countries from "../data/countries.js";

const stats = [
  { value: "12,400+", label: "Travellers guided" },
  { value: "38", label: "Countries covered" },
  { value: "4.8 / 5", label: "Average trip rating" },
  { value: "9 yrs", label: "Planning trips" },
];

const whyUs = [
  {
    title: "Itineraries, not templates",
    body: "Every trip is paced around what you actually want to do — no filler days, no rushed checklists.",
  },
  {
    title: "24/7 on-trip support",
    body: "A real phone number you can call if a flight shifts or plans change mid-trip.",
  },
  {
    title: "Transparent pricing",
    body: "The price you see is what you pay — no surprise add-ons once you're on the ground.",
  },
  {
    title: "Local, vetted partners",
    body: "Hotels, guides and drivers we've personally worked with, trip after trip.",
  },
];

export default function Home() {
  const featured = packages.slice(0, 3);
  const popularCountries = countries.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-700">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-coral-500/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-mustard-400">
              SK Travels · Est. since day one
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
              Explore the World with{" "}
              <span className="text-coral-400">SK Travels</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-teal-50/80">
              From backwater houseboats to Alpine train rides, we design
              trips around how you actually want to travel — well-paced,
              honestly priced, and backed by people who've been there.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/packages"
                className="rounded-full bg-coral-500 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-coral-600"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-teal-50/30 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-teal-50/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-teal-50/10 shadow-2xl">
              <img
                src="https://picsum.photos/seed/hero-travel/900/700"
                alt="Traveller looking out over a mountain valley"
                className="h-80 w-full object-cover sm:h-[26rem]"
              />
            </div>
            <div className="ticket-dashed ticket-notch absolute -bottom-8 left-1/2 w-64 -translate-x-1/2 rounded-2xl border border-line bg-paper p-4 shadow-xl sm:left-auto sm:right-0 sm:translate-x-0">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
                Next departure
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">
                CHN → KER
              </p>
              <p className="mt-1 text-xs text-ink/60">5 Days · Backwaters & Hills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-teal-600">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink/55">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular destinations */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular Destinations"
            title="Where travellers are headed this season"
            description="A handful of the countries our clients keep returning to."
          />
          <Link to="/countries" className="text-sm font-semibold text-coral-500">
            View all countries →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularCountries.map((c) => (
            <CountryCard key={c.slug} country={c} />
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <section className="bg-teal-50/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Packages"
              title="Ready-made trips, fully planned"
              description="Fixed itineraries you can book as-is, or use as a starting point."
            />
            <Link to="/packages" className="text-sm font-semibold text-coral-500">
              View all packages →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-1 xl:grid-cols-1">
            {featured.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose SK Travels"
          title="Planning that actually pays attention"
          description="We keep our group of travel designers small on purpose — every itinerary gets a real second look."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-line bg-paper p-6">
              <span className="font-mono text-xs text-coral-500">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-16 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Ready to book your next trip?
          </h2>
          <p className="max-w-xl text-teal-50/75">
            Tell us where you'd like to go and we'll put together an
            itinerary within a day — no obligation, no pushy follow-ups.
          </p>
          <Link
            to="/contact"
            className="rounded-full bg-coral-500 px-8 py-3.5 text-sm font-semibold text-paper transition hover:bg-coral-600"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}
