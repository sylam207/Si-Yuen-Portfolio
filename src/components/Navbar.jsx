import logo from "../assets/SYlogo.png";
import { NAV_ITEMS, SOCIAL_LINKS } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = { FaLinkedin, FaGithub, FaInstagram };

const sectionIds = ["About", "Experience", "Languages", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkClass = (href) => {
    const id = href.replace("#", "");
    return `transition ${activeSection === id ? "text-purple-400" : "hover:text-purple-400"}`;
  };

  return (
    <nav className="sticky top-0 z-50 mb-20 py-6 backdrop-blur-md bg-neutral-950/80">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <a href="#" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded">
          <img src={logo} alt="logo" className="w-10" />
        </a>
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-6 text-sm uppercase tracking-wide text-neutral-300">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} className={`${linkClass(item.href)} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-2xl">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  className={`transition hover:scale-110 ${link.hoverColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded`}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <button
          className="text-2xl text-neutral-200 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden mx-8"
            id="mobile-menu"
          >
            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6">
              <div className="flex flex-col gap-4 text-neutral-300 text-center">
                {NAV_ITEMS.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className={`${linkClass(item.href)} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded`}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-6 text-2xl">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                      className={`transition hover:scale-110 ${link.hoverColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded`}>
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
