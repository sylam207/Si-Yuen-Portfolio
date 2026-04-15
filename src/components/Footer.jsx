import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { NAV_ITEMS } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6 text-sm uppercase tracking-wide text-neutral-400">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex gap-5 text-xl text-neutral-400">
          <a
            href="https://www.linkedin.com/in/si-yuen-lam/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sylam207"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/si_yuen/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Si Yuen Lam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
