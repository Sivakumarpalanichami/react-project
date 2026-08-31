import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/packages", label: "Packages" },
  { to: "/group-tours", label: "Group Tours" },
  { to: "/countries", label: "Countries" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium tracking-wide transition-colors ${
      isActive ? "text-coral-500" : "text-teal-50/90 hover:text-coral-400"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-teal-600 shadow-lg shadow-teal-700/20" : "bg-teal-600/95"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-mustard-400/70 font-display text-lg text-mustard-400">
            SK
          </span>
          <span className="font-display text-xl font-semibold text-paper">
            SK Travels
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-coral-600 md:inline-block"
        >
          Plan My Trip
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-teal-100/30 text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-teal-100/10 bg-teal-600 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? "bg-teal-500/60 text-coral-400" : "text-teal-50/90"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-coral-500 px-4 py-3 text-center text-sm font-semibold text-paper"
              >
                Plan My Trip
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
