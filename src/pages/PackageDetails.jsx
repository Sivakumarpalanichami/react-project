import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import packages from "../data/packages.js";

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!pkg) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">
          We couldn't find that package
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          It may have been renamed or retired. Take a look at the full list instead.
        </p>
        <Link
          to="/packages"
          className="mt-6 inline-block rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-paper"
        >
          Browse All Packages
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-72 w-full overflow-hidden sm:h-96">
        <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/90 via-teal-700/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-5 pb-8 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-mustard-400">
            {pkg.country} · {pkg.code}
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold text-paper sm:text-4xl">
            {pkg.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-base leading-relaxed text-ink/70">{pkg.description}</p>

          {pkg.gallery?.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {pkg.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={pkg.name}
                  className="h-32 w-full rounded-xl object-cover sm:h-36"
                />
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <InfoBlock title="Places Included">
              <ul className="flex flex-wrap gap-2">
                {pkg.placesIncluded.map((place) => (
                  <li
                    key={place}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </InfoBlock>
            <InfoBlock title="Hotel">
              <p className="text-sm text-ink/65">{pkg.hotel}</p>
            </InfoBlock>
            <InfoBlock title="Transportation" full>
              <p className="text-sm text-ink/65">{pkg.transport}</p>
            </InfoBlock>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-2xl font-semibold text-ink">Itinerary</h3>
            <ol className="mt-5 space-y-5 border-l border-line pl-6">
              {pkg.itinerary.map((step) => (
                <li key={step.day} className="relative">
                  <span className="absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full bg-coral-500 font-mono text-[10px] text-paper">
                    {step.day}
                  </span>
                  <h4 className="font-display text-base font-semibold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm text-ink/60">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-line bg-cream p-6 lg:sticky lg:top-24">
          <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
            Starting from
          </p>
          <p className="mt-1 font-display text-4xl font-semibold text-coral-500">
            ₹{pkg.price.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-ink/50">per person, twin sharing</p>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-line pb-3">
              <dt className="text-ink/55">Duration</dt>
              <dd className="font-medium text-ink">
                {pkg.days} Days / {pkg.nights} Nights
              </dd>
            </div>
            <div className="flex justify-between border-b border-line pb-3">
              <dt className="text-ink/55">Destination</dt>
              <dd className="font-medium text-ink">{pkg.country}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/55">Rating</dt>
              <dd className="font-medium text-ink">★ {pkg.rating}</dd>
            </div>
          </dl>

          <button
            type="button"
            onClick={() =>
              navigate("/contact", { state: { packageId: pkg.id, countrySlug: pkg.countrySlug } })
            }
            className="mt-6 w-full rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-coral-600"
          >
            Enquire Now
          </button>
        </aside>
      </div>
    </div>
  );
}

function InfoBlock({ title, children, full }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-500">
        {title}
      </h4>
      <div className="mt-2">{children}</div>
    </div>
  );
}
