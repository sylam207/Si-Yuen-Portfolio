import { CONTACT } from "../constants";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="Contact">
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact Me</h1>
      <div className="mx-auto max-w-xl">
        <p className="mb-8 text-center text-neutral-300">
          I’m currently open to software developer opportunities. Feel free to reach out
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400"
          />

          <button
            type="submit"
            className="
              mt-4 rounded-xl px-8 py-3 text-lg font-medium text-white
              bg-linear-to-r from-pink-300 via-slate-500 to-purple-500
              transition duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            Send Message
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Based in Toronto, ON 
        </p>

        <p className="mt-4 text-center text-sm text-neutral-500">
          © 2026 Si Yuen Lam
        </p>
      </div>
    </div>
    </section>
  );
};

export default Contact;