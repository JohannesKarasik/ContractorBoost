"use client";

import { useState } from "react";

export default function ContactPage() {
  const [phone, setPhone] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length < 4) return digits;
    if (digits.length < 7) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }

    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  return (
    <main className="min-h-screen flex flex-col pt-24">
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-2xl space-y-4 rounded-2xl border p-6 shadow"
        >
          <input
            type="hidden"
            name="access_key"
            value="eee1bc41-1bcb-4bef-886a-5150e7bfd37b"
          />

          <h2 className="text-xl font-semibold">Basic Info</h2>

          <input
            type="text"
            name="last_name"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="legal_business_name"
            placeholder="Legal Business Name"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="tel"
            name="business_phone"
            placeholder="(123) 456-7890"
            required
            value={phone}
            onChange={handlePhoneChange}
            className="w-full rounded-lg border px-4 py-3"
          />

          <label className="flex items-center gap-2">
            <input type="checkbox" name="same_phone" />
            Is your business phone the same as your personal?
          </label>

          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="state"
            placeholder="State/Region"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="zip"
            placeholder="Zip/Postal Code"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="url"
            name="website"
            placeholder="Current Website (optional)"
            className="w-full rounded-lg border px-4 py-3"
          />

          <h2 className="text-xl font-semibold pt-4">Required Info for Website</h2>

          <textarea
            name="services"
            placeholder="Which services do you offer?"
            required
            rows={3}
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="main_area"
            placeholder="Main area you operate in"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="text"
            name="radius"
            placeholder="Service radius (e.g. 40 km)"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <h2 className="text-xl font-semibold pt-4">Optional Info (Recommended)</h2>

          <input
            type="number"
            name="years_in_business"
            placeholder="Years in business"
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="number"
            name="projects_completed"
            placeholder="Projects completed"
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            name="about"
            placeholder="About your business (values, story, etc.)"
            rows={4}
            className="w-full rounded-lg border px-4 py-3"
          />

          <h2 className="text-xl font-semibold pt-4">Additional Context</h2>

          <textarea
            name="additional"
            placeholder="Anything else you'd like to tell us"
            rows={4}
            className="w-full rounded-lg border px-4 py-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-3 text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}