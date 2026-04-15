import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="Contact">
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl"
      >
        <p className="mb-8 text-center text-neutral-300">
          I'm currently open to software developer opportunities. Feel free to reach out
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-neutral-400">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-neutral-400">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === "sending"}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-neutral-400">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={status === "sending"}
              className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              mt-4 rounded-xl px-8 py-3 text-lg font-medium text-white
              bg-linear-to-r from-pink-300 via-slate-500 to-purple-500
              transition duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400
              disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none">
            {status === "sending" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : "Send Message"}
          </button>

          {status === "success" && (
            <p role="alert" className="mt-2 text-center text-green-400">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-2 text-center text-red-400">
              Failed to send message. Please try again.
            </p>
          )}
        </form>

        <p className="mt-8 text-center text-sm text-neutral-400">
          Based in Toronto, ON
        </p>
      </motion.div>
    </div>
    </section>
  );
};

export default Contact;
