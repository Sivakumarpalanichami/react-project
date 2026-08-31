import { Link } from "react-router-dom";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/group-tours", label: "Group Tours" },
  { to: "/countries", label: "Countries" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-teal-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-mustard-400/70 font-display text-lg text-mustard-400">
              SK
            </span>
            <span className="font-display text-xl font-semibold text-paper">SK Travels</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-teal-50/70">
            We plan trips the way we'd plan our own — well-paced itineraries,
            honest pricing and real support from the day you book to the day
            you land back home.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-mustard-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-teal-50/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-coral-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-mustard-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-teal-50/80">
            <li>+91 98765 43210</li>
            <li>hello@sktravels.com</li>
            <li>4th Floor, Anna Salai, Chennai, Tamil Nadu, India</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-mustard-400">
            Follow Along
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-teal-50/80">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-coral-400"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-50/10 px-5 py-5 text-center font-mono text-xs text-teal-50/50 lg:px-8">
        © {new Date().getFullYear()} SK Travels. All boarding passes are fictional.
      </div>
    </footer>
  );
}
