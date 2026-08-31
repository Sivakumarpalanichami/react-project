import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";

const features = [
  { title: "Custom Itineraries", body: "Every trip is built from scratch around your dates, budget and pace." },
  { title: "Group Departures", body: "Fixed-date group tours with an escort, for travellers who prefer company on the road." },
  { title: "Visa & Documentation", body: "We handle the paperwork trail so you're not stuck in a queue before you've even left." },
  { title: "24/7 Trip Support", body: "A direct line to your travel planner for the entire length of your trip." },
];

export default function About() {
  return (
    <div>
      <section className="bg-teal-700">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-mustard-400">
            About Us
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
            We plan trips like we'd plan our own
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-teal-50/80">
            SK Travels started with a simple idea: travel planning should
            feel like a conversation with a well-travelled friend, not a
            transaction with a booking engine.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading eyebrow="Our Story" title="Company Introduction" />
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            What began as a two-person desk booking road trips across South
            India has grown into a full travel design studio, planning
            everything from weekend hill getaways to multi-country group
            tours across Southeast Asia and Europe. What hasn't changed is
            how we work: small teams, real local knowledge, and itineraries
            that get revised until they actually fit the traveller.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Today, SK Travels' planners have collectively mapped out trips
            across more than three dozen countries — but every single
            itinerary still gets reviewed by a human before it reaches you.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://picsum.photos/seed/about-sk-travels/900/700"
            alt="SK Travels planning desk"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-line bg-paper p-8">
            <h3 className="font-display text-2xl font-semibold text-teal-600">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              To make well-planned, honestly priced travel accessible to
              anyone — whether that's a first solo trip or a twenty-person
              family reunion abroad.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-8">
            <h3 className="font-display text-2xl font-semibold text-coral-500">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              To be the travel partner people recommend by name — not
              because we're the cheapest, but because we get the details
              right, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Customers Choose Us"
          title="Travel services built around you"
          description="A few things every SK Travels itinerary includes, no matter the destination."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-line bg-paper p-6">
              <h4 className="font-display text-lg font-semibold text-ink">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/packages"
            className="rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-teal-500"
          >
            See Our Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
