import logo from "../assets/SYlogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const navItems = [
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Languages", label: "Tech" },
    { href: "#Contact", label: "Contact" },
];

const sectionIds = ["About", "Experience", "Languages", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    <nav className="mb-20 py-6">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="logo" className="w-10" />
        </a>
        <div className="hidden lg:flex items-center gap-43">
          <div className="flex items-center gap-6 text-sm uppercase tracking-wide text-neutral-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/si-yuen-lam/" target="_blank" rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sylam207" target="_blank" rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/si_yuen/" target="_blank" rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        <button
          className="text-2xl text-neutral-200 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-6 mx-8 rounded-2xl border border-neutral-800 bg-neutral-900/95 p-6">
          <div className="flex flex-col gap-4 text-neutral-300 text-center">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className={linkClass(item.href)}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-6 text-2xl">
            <a href="https://www.linkedin.com/in/si-yuen-lam/" target="_blank" rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sylam207" target="_blank" rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/si_yuen/" target="_blank" rel="noopener noreferrer"
              className="transition hover:scale-110 hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
