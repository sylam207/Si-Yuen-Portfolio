import ml from "../assets/ml.jpg";
import quest from "../assets/quest.jpg";
import smile from "../assets/smile.jpg";
import hack from "../assets/hack.jpg";

export const HERO_CONTENT = `I'm a full-stack developer with 5 years of experience building scalable, maintainable web applications. I work across Python, Java, C, TypeScript, and JavaScript, with hands-on experience in React, Next.js, Angular, Node.js, MongoDB, and PostgreSQL. My focus is on delivering performant, reliable software that puts the user first.`;
export const HERO_CONTENT_2 = `I am based in Toronto, Canada, and thrive in fast-paced, startup-driven environments where adaptability and ownership are key. I have contributed to building and iterating on full-stack products, quickly turning ideas into functional, user-facing features. I focus on writing clean, scalable code while continuously learning and experimenting with new technologies.`;
export const ABOUT_TEXT = `Outside of coding, I have a strong interest in language learning, particularly Japanese and French. I enjoy traveling and exploring diverse cultures, from Asia to Europe, which broadens my perspective and adaptability. I stay active through badminton, pickleball, fitness training, and preparing for a half marathon, reflecting my discipline and consistency. I also have a passion for digital drawing, anime, and manga, which influence my creativity and attention to detail in design and user experience. In my free time, I explore electronics and Arduino projects, combining software and hardware to build hands-on solutions.`;
export const ABOUT_TEXT_2 = `I've had a long-standing passion for video games that began at a young age, starting with a Nintendo DS when I was five and later a Wii at ten, which sparked my curiosity for interactive experiences. As I grew older, that interest evolved into building my own computer, deepening my understanding of both hardware and software. Nintendo remains my favorite gaming franchise, with Mario Kart and Super Smash Bros. holding a special place due to their competitive and social nature. I'm also drawn to immersive storytelling and world-building found in series like The Legend of Zelda, Pokémon, Final Fantasy, Kingdom Hearts, and Persona.`;

export const EXPERIENCES = [
  {
    year: "Sept 2020 - Present",
    role: "Full Stack Developer",
    company: "Hack the Valley",
    description: [
      "Designed a FastAPI and GraphQL backend with AI-driven schedule recommendation and automated conflict detection, powering event registration and real-time updates for 1,000+ participants.",
      "Optimized React rendering pipeline and component architecture, cutting page load times by 50% and maintaining sub-2s response times for 500+ concurrent users.",
      "Integrated progressive disclosure and smart input validation into a mobile-first auth redesign, increasing registration completion by 40%.",
    ],
    image: hack,
  },
  {
    year: "May 2022 - Jan 2023",
    role: "Software Developer Intern",
    company: "Smile Digital Health",
    description: [
      "Delivered full-stack features in Node.js, TypeScript, and Angular enabling HL7 FHIR-compliant patient data across distributed healthcare systems, supporting secure interoperability for 5+ integrated endpoints.",
      "Expanded Jest unit and integration test coverage from 50% to 65% across service APIs and Angular components, catching 20+ pre-release regressions and reducing CI failure rate by 30%.",
      "Refactored 10+ API endpoints with schema-level input validation and standardized error handling, reducing invalid patient data exchange failures by 30%.",
    ],
    image: smile,
  },
  {
    year: "Sept 2021 - Dec 2021",
    role: "Software Developer Intern",
    company: "Questrade Financial Group",
    description: [
      "Consolidated 15+ Angular components by extracting duplicated logic into reusable shared modules, shrinking bundle size by 40% and decreasing average feature development time by 30%.",
      "Engineered 10+ backend service endpoints in .NET Core and MongoDB, eliminating direct cross-service database calls and dropping backend latency by 25% under production load.",
      "Instrumented distributed services with OpenTelemetry and Datadog, surfacing 50+ real-time metrics and reducing mean time to resolution by 50% across production incidents.",
    ],
    image: quest,
  },
  {
    year: "Sept 2020 - Dec 2020",
    role: "Software Developer Intern",
    company: "ML Analytix",
    description: [
      "Built React dashboards visualizing computer vision outputs and warehouse inventory metrics in real time, lowering operator response time to production anomalies by 35%.",
      "Streamlined Django service endpoints and optimized MySQL queries to automate multi-source data retrieval, eliminating 8+ hours of manual weekly reporting and cutting query execution time by 40%.",
    ],
    image: ml,
  },
];

export const CONTACT = {
  email: "siyuenlam@gmail.com",
};

export const NAV_ITEMS = [
  { href: "#About", label: "About" },
  { href: "#Experience", label: "Experience" },
  { href: "#Languages", label: "Tech" },
  { href: "#Contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { url: "https://www.linkedin.com/in/si-yuen-lam/", label: "LinkedIn", icon: "FaLinkedin", hoverColor: "hover:text-blue-400" },
  { url: "https://github.com/sylam207", label: "GitHub", icon: "FaGithub", hoverColor: "hover:text-white" },
  { url: "https://www.instagram.com/si_yuen/", label: "Instagram", icon: "FaInstagram", hoverColor: "hover:text-pink-400" },
];
