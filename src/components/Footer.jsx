import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { NAV_ITEMS, SOCIAL_LINKS } from "../constants";

const iconMap = { FaLinkedin, FaGithub, FaInstagram };

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
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition ${link.hoverColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded`}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Si Yuen Lam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
