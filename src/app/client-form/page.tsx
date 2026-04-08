"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-xl space-y-4 rounded-2xl border p-6 shadow"
        >
          <input
            type="hidden"
            name="access_key"
            value="eee1bc41-1bcb-4bef-886a-5150e7bfd37b"
          />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border px-4 py-3"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={6}
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