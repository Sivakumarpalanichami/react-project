import { useNavigate } from "react-router-dom";
import GroupTourCard from "../components/GroupTourCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import groupTours from "../data/groupTours.js";

export default function GroupTours() {
  const navigate = useNavigate();

  const handleEnquire = (tour) => {
    navigate("/contact", {
      state: { message: `I'd like to enquire about the "${tour.name}" group tour.` },
    });
  };

  return (
    <div>
      <section className="bg-teal-700">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-mustard-400">
            Group Tours
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-paper sm:text-5xl">
            Better with company
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-teal-50/80">
            Fixed-date escorted tours for travellers who'd rather share the
            trip — and the planning — with a group.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Upcoming Departures"
          title="Group tours with fixed dates"
          description="Every group tour includes a dedicated tour manager and pre-arranged transport between cities."
        />
        <div className="mt-10 grid gap-6">
          {groupTours.map((tour) => (
            <GroupTourCard key={tour.id} tour={tour} onEnquire={handleEnquire} />
          ))}
        </div>
      </div>
    </div>
  );
}
