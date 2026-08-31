import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-coral-500">
        404 · Wrong Gate
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">
        This page took a different flight
      </h1>
      <p className="mt-3 text-sm text-ink/60">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-teal-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
