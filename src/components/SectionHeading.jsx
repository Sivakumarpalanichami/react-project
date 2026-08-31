export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-coral-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink/65">{description}</p>
      )}
    </div>
  );
}
