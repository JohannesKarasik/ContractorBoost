"use client";

export default function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input
        type="hidden"
        name="access_key"
        value="eee1bc41-1bcb-4bef-886a-5150e7bfd37b"
      />
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <textarea name="message" required />
      <button type="submit">Submit</button>
    </form>
  );
}