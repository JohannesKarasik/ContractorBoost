"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  companyName: string;
  businessAddress: string;
  city: string;
  postalCode: string;
  country: string;
  currentWebsite: string;
  services: string[];
  priorityServices: string[];
  serviceAreas: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICE_OPTIONS = [
  "Web Design & Development",
  "Mobile App Development",
  "SEO & Content Marketing",
  "Social Media Management",
  "Brand Identity & Design",
  "E-Commerce Solutions",
  "Cloud & DevOps",
  "IT Consulting",
  "Cybersecurity",
  "Data Analytics",
  "Digital Advertising",
  "Video Production",
];

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "Italy",
  "Portugal",
  "Belgium",
  "Austria",
  "New Zealand",
  "Ireland",
  "Singapore",
  "Japan",
  "Other",
];

const INITIAL: FormData = {
  fullName: "",
  businessEmail: "",
  businessPhone: "",
  companyName: "",
  businessAddress: "",
  city: "",
  postalCode: "",
  country: "",
  currentWebsite: "",
  services: [],
  priorityServices: [],
  serviceAreas: "",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toggle(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function validate(step: number, data: FormData): Record<string, string> {
  const e: Record<string, string> = {};

  if (step === 1) {
    if (!data.fullName.trim()) e.fullName = "Required";
    if (!data.businessEmail.trim()) e.businessEmail = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.businessEmail)) e.businessEmail = "Enter a valid email";
    if (!data.businessPhone.trim()) e.businessPhone = "Required";
    if (!data.companyName.trim()) e.companyName = "Required";
    if (!data.businessAddress.trim()) e.businessAddress = "Required";
    if (!data.city.trim()) e.city = "Required";
    if (!data.postalCode.trim()) e.postalCode = "Required";
    if (!data.country) e.country = "Required";
  }

  if (step === 2) {
    if (data.services.length === 0) e.services = "Select at least one";
    if (data.priorityServices.length === 0) e.priorityServices = "Select at least one";
    if (!data.serviceAreas.trim()) e.serviceAreas = "Required";
  }

  return e;
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  fontSize: 15,
  border: "1px solid #d1d5db",
  borderRadius: 6,
  outline: "none",
  background: "#fff",
  color: "#111",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>
        {label}
        {required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
      </label>
      {children}
      {error && <span style={{ fontSize: 12, color: "#ef4444" }}>{error}</span>}
    </div>
  );
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────

function StepOne({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: Record<string, string>;
  onChange: (key: keyof FormData, value: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        <Field label="Full Name" required error={errors.fullName}>
          <input
            style={{ ...inputStyle, borderColor: errors.fullName ? "#ef4444" : "#d1d5db" }}
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Jane Smith"
          />
        </Field>

        <Field label="Company Name" required error={errors.companyName}>
          <input
            style={{ ...inputStyle, borderColor: errors.companyName ? "#ef4444" : "#d1d5db" }}
            value={data.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            placeholder="John’s Construction Company"
          />
        </Field>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        <Field label="Business Email" required error={errors.businessEmail}>
          <input
            style={{ ...inputStyle, borderColor: errors.businessEmail ? "#ef4444" : "#d1d5db" }}
            type="email"
            value={data.businessEmail}
            onChange={(e) => onChange("businessEmail", e.target.value)}
            placeholder="jane@acme.com"
          />
        </Field>

        <Field label="Business Phone" required error={errors.businessPhone}>
          <input
            style={{ ...inputStyle, borderColor: errors.businessPhone ? "#ef4444" : "#d1d5db" }}
            type="tel"
            value={data.businessPhone}
            onChange={(e) => onChange("businessPhone", e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </Field>
      </div>

      <Field label="Business Address" required error={errors.businessAddress}>
        <input
          style={{ ...inputStyle, borderColor: errors.businessAddress ? "#ef4444" : "#d1d5db" }}
          value={data.businessAddress}
          onChange={(e) => onChange("businessAddress", e.target.value)}
          placeholder="123 Main Street"
        />
      </Field>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
        }}
      >
        <Field label="City" required error={errors.city}>
          <input
            style={{ ...inputStyle, borderColor: errors.city ? "#ef4444" : "#d1d5db" }}
            value={data.city}
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="New York"
          />
        </Field>

        <Field label="Postal Code" required error={errors.postalCode}>
          <input
            style={{ ...inputStyle, borderColor: errors.postalCode ? "#ef4444" : "#d1d5db" }}
            value={data.postalCode}
            onChange={(e) => onChange("postalCode", e.target.value)}
            placeholder="10001"
          />
        </Field>

        <Field label="Country" required error={errors.country}>
          <select
            style={{ ...inputStyle, borderColor: errors.country ? "#ef4444" : "#d1d5db", cursor: "pointer" }}
            value={data.country}
            onChange={(e) => onChange("country", e.target.value)}
          >
            <option value="">Select...</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Current Website">
        <input
          style={inputStyle}
          value={data.currentWebsite}
          onChange={(e) => onChange("currentWebsite", e.target.value)}
          placeholder="https://acme.com (optional)"
        />
      </Field>
    </div>
  );
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────

function StepTwo({
  data,
  errors,
  onChange,
}: {
  data: FormData;
  errors: Record<string, string>;
  onChange: (key: keyof FormData, value: string | string[]) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Field label="What services do you provide?" required error={errors.services}>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "2px 0 10px" }}>Select all that apply</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SERVICE_OPTIONS.map((s) => {
            const checked = data.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => onChange("services", toggle(data.services, s))}
                style={{
                  padding: "7px 13px",
                  fontSize: 13,
                  borderRadius: 6,
                  cursor: "pointer",
                  border: checked ? "1.5px solid #111" : "1.5px solid #d1d5db",
                  background: checked ? "#111" : "#fff",
                  color: checked ? "#fff" : "#374151",
                  fontFamily: "inherit",
                  transition: "all 0.12s",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Which services should we prioritize?" required error={errors.priorityServices}>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "2px 0 10px" }}>
          {data.services.length > 0 ? "From your selected services above" : "Select all that apply"}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(data.services.length > 0 ? data.services : SERVICE_OPTIONS).map((s) => {
            const checked = data.priorityServices.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => onChange("priorityServices", toggle(data.priorityServices, s))}
                style={{
                  padding: "7px 13px",
                  fontSize: 13,
                  borderRadius: 6,
                  cursor: "pointer",
                  border: checked ? "1.5px solid #111" : "1.5px solid #d1d5db",
                  background: checked ? "#111" : "#fff",
                  color: checked ? "#fff" : "#374151",
                  fontFamily: "inherit",
                  transition: "all 0.12s",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="Service areas" required error={errors.serviceAreas}>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "2px 0 10px" }}>Cities or regions where you operate</p>
        <textarea
          rows={4}
          style={{ ...inputStyle, resize: "vertical", borderColor: errors.serviceAreas ? "#ef4444" : "#d1d5db" }}
          value={data.serviceAreas}
          onChange={(e) => onChange("serviceAreas", e.target.value)}
          placeholder="e.g. New York, Los Angeles, or Nationwide"
        />
      </Field>
    </div>
  );
}

// ─── Review ───────────────────────────────────────────────────────────────────

function StepReview({ data }: { data: FormData }) {
  const Row = ({ label, value }: { label: string; value: string }) => (
    <div style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: "1px solid #f3f4f6" }}>
      <span style={{ fontSize: 13, color: "#6b7280", minWidth: 140, flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: 14, color: "#111" }}>{value || "—"}</span>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#9ca3af",
            marginBottom: 8,
          }}
        >
          Basic Information
        </p>
        <Row label="Full Name" value={data.fullName} />
        <Row label="Company Name" value={data.companyName} />
        <Row label="Business Email" value={data.businessEmail} />
        <Row label="Business Phone" value={data.businessPhone} />
        <Row
          label="Address"
          value={[data.businessAddress, data.city, data.postalCode, data.country].filter(Boolean).join(", ")}
        />
        <Row label="Website" value={data.currentWebsite || "—"} />
      </div>

      <div>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#9ca3af",
            marginBottom: 8,
          }}
        >
          Business Details
        </p>
        <Row label="Services" value={data.services.join(", ")} />
        <Row label="Priority Services" value={data.priorityServices.join(", ")} />
        <Row label="Service Areas" value={data.serviceAreas} />
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;
  const stepLabels = ["Basic Info", "Business Details", "Review"];

  const handleChange = (key: keyof FormData, value: string | string[]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const goNext = () => {
    const errs = validate(step, data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  const goBack = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    console.log("Submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <main className="min-h-screen bg-white px-6 pt-32 pb-16 text-[#07111f]">
        <div className="mx-auto max-w-4xl">
          <div
            style={{
              maxWidth: 680,
              margin: "0 auto",
              padding: "60px 24px",
              textAlign: "center",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#111",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold mb-4">Submitted successfully</h1>
            <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6 }}>
              Thanks, <strong style={{ color: "#111" }}>{data.fullName}</strong>. We&apos;ll be in touch at{" "}
              {data.businessEmail}.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 pt-32 pb-16 text-[#07111f]">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Project Form</h1>
          <p className="mt-3 text-base text-gray-600">
            Fill out the form below so we can learn more about your business and what you need.
          </p>
        </div>

        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "40px 24px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            color: "#111",
            background: "#fff",
          }}
        >
          {/* Step indicator */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 36, flexWrap: "wrap", rowGap: 12 }}>
            {stepLabels.map((label, i) => {
              const n = i + 1;
              const done = n < step;
              const active = n === step;

              return (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flex: i < stepLabels.length - 1 ? 1 : "none",
                    minWidth: 0,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: done || active ? "#111" : "#f3f4f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {done ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      ) : (
                        <span style={{ fontSize: 12, fontWeight: 600, color: active ? "#fff" : "#9ca3af" }}>{n}</span>
                      )}
                    </div>

                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: active ? 600 : 400,
                        color: active || done ? "#111" : "#9ca3af",
                      }}
                    >
                      {label}
                    </span>
                  </div>

                  {i < stepLabels.length - 1 && (
                    <div style={{ flex: 1, height: 1, background: done ? "#111" : "#e5e7eb", margin: "0 12px" }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step title */}
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>
              {step === 1 ? "Basic Information" : step === 2 ? "Business Details" : "Review & Submit"}
            </h2>
            <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4, marginBottom: 0 }}>
              {step === 1
                ? "Your contact and company details."
                : step === 2
                ? "Tell us about what you do."
                : "Make sure everything looks correct."}
            </p>
          </div>

          <div style={{ height: 1, background: "#e5e7eb", marginBottom: 24 }} />

          {/* Content */}
          {step === 1 && <StepOne data={data} errors={errors} onChange={handleChange} />}
          {step === 2 && <StepTwo data={data} errors={errors} onChange={handleChange} />}
          {step === 3 && <StepReview data={data} />}

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 32,
              paddingTop: 20,
              borderTop: "1px solid #e5e7eb",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              style={{
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 6,
                border: "1px solid #d1d5db",
                background: "#fff",
                color: "#374151",
                cursor: step === 1 ? "not-allowed" : "pointer",
                opacity: step === 1 ? 0.4 : 1,
                fontFamily: "inherit",
              }}
            >
              Back
            </button>

            <span style={{ fontSize: 13, color: "#9ca3af" }}>
              Step {step} of {totalSteps}
            </span>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={goNext}
                style={{
                  padding: "10px 24px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 6,
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                style={{
                  padding: "10px 24px",
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: 6,
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}