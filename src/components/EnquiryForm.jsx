import { useState } from "react";
import countries from "../data/countries.js";
import packages from "../data/packages.js";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  package: "",
  travellers: "1",
  travelDate: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!form.country) errors.country = "Please select a country.";
  if (!form.travelDate) errors.travelDate = "Please pick a travel date.";
  if (!form.travellers || Number(form.travellers) < 1)
    errors.travellers = "At least 1 traveller is required.";
  return errors;
}

export default function EnquiryForm({ presetCountry = "", presetPackage = "", presetMessage = "" }) {
  const [form, setForm] = useState({
    ...initialForm,
    country: presetCountry,
    package: presetPackage,
    message: presetMessage,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const relevantPackages = form.country
    ? packages.filter((p) => p.countrySlug === form.country)
    : packages;

  if (submitted) {
    return (
      <div className="rounded-2xl border border-teal-100 bg-teal-50 p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal-500 text-2xl text-paper">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-teal-700">
          Enquiry received, {form.fullName.split(" ")[0]}!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/65">
          Thanks for reaching out. One of our travel planners will get back to
          you at {form.email} within 24 hours with a tailored itinerary.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-paper transition hover:bg-teal-500"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Full Name" error={errors.fullName}>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass(errors.fullName)}
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass(errors.email)}
        />
      </Field>

      <Field label="Phone Number" error={errors.phone}>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={inputClass(errors.phone)}
        />
      </Field>

      <Field label="Number of Travellers" error={errors.travellers}>
        <input
          type="number"
          min="1"
          name="travellers"
          value={form.travellers}
          onChange={handleChange}
          className={inputClass(errors.travellers)}
        />
      </Field>

      <Field label="Select Country" error={errors.country}>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className={inputClass(errors.country)}
        >
          <option value="">Choose a country</option>
          {countries.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Select Package" error={errors.package}>
        <select
          name="package"
          value={form.package}
          onChange={handleChange}
          className={inputClass(errors.package)}
        >
          <option value="">Any / Not sure yet</option>
          {relevantPackages.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Travel Date" error={errors.travelDate}>
        <input
          type="date"
          name="travelDate"
          value={form.travelDate}
          onChange={handleChange}
          className={inputClass(errors.travelDate)}
        />
      </Field>

      <Field label="Message" error={errors.message} full>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us anything else about your trip..."
          className={inputClass(errors.message)}
        />
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-coral-600 sm:w-auto"
        >
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children, full }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="font-medium text-ink/80">{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-coral-600">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `rounded-xl border bg-paper px-4 py-2.5 text-sm text-ink outline-none transition focus:border-teal-500 ${
    error ? "border-coral-500" : "border-line"
  }`;
}
