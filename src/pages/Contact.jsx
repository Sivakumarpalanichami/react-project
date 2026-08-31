import { useLocation } from "react-router-dom";
import EnquiryForm from "../components/EnquiryForm.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Contact() {
  const { state } = useLocation();

  return (
    <div>
      <section className="bg-teal-700">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-mustard-400">
            Get In Touch
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
            Let's plan your trip
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-teal-50/80">
            Fill in a few details and a travel planner will follow up with an
            itinerary and pricing.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <SectionHeading title="Enquiry Form" description="Every field except message is required." />
          <div className="mt-8">
            <EnquiryForm
              presetCountry={state?.countrySlug || ""}
              presetPackage={state?.packageId || ""}
              presetMessage={state?.message || ""}
            />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-cream p-6">
            <h3 className="font-display text-lg font-semibold text-ink">Call Us</h3>
            <p className="mt-1 text-sm text-ink/65">+91 98765 43210</p>
          </div>
          <div className="rounded-2xl border border-line bg-cream p-6">
            <h3 className="font-display text-lg font-semibold text-ink">Email</h3>
            <p className="mt-1 text-sm text-ink/65">hello@sktravels.com</p>
          </div>
          <div className="rounded-2xl border border-line bg-cream p-6">
            <h3 className="font-display text-lg font-semibold text-ink">Visit</h3>
            <p className="mt-1 text-sm text-ink/65">
              4th Floor, Anna Salai, Chennai, Tamil Nadu, India
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
