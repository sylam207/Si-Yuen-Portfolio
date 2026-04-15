import ml from "../assets/ml.jpg";
import quest from "../assets/quest.jpg";
import smile from "../assets/smile.jpg";
import hack from "../assets/hack.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with 5 years of experience building scalable and maintainable web applications. I have honed my skills in languages such as Python, Java, C, TypeScript and JavaScript with experience across modern frameworks including React, Next.js, Angular, and Node.js as well as databases such as MongoDB and PostgreSQL. My goal is to leverage my expertise to create innovative solutions for user-centric solutions that improve performance, reliability, and overall user experience.`;
export const HERO_CONTENT_2 = `I am based in Toronto, Canada, and thrive in fast-paced, startup-driven environments where adaptability and ownership are key. I have contributed to building and iterating on full-stack products, quickly turning ideas into functional, user-facing features. I focus on writing clean, scalable code while continuously learning and experimenting with new technologies.`;
export const ABOUT_TEXT = `Outside of coding, I have a strong interest in language learning, particularly Japanese and French. I enjoy traveling and exploring diverse cultures, from Asia to Europe, which broadens my perspective and adaptability. I stay active through badminton, pickleball, fitness training, and preparing for a half marathon, reflecting my discipline and consistency. I also have a passion for digital drawing, anime, and manga, which influence my creativity and attention to detail in design and user experience. In my free time, I explore electronics and Arduino projects, combining software and hardware to build hands-on solutions.`;
export const ABOUT_TEXT_2 = `I’ve had a long-standing passion for video games that began at a young age, starting with a Nintendo DS when I was five and later a Wii at ten, which sparked my curiosity for interactive experiences. As I grew older, that interest evolved into building my own computer, deepening my understanding of both hardware and software. Nintendo remains my favorite gaming franchise, with Mario Kart and Super Smash Bros. holding a special place due to their competitive and social nature. I’m also drawn to immersive storytelling and world-building found in series like The Legend of Zelda, Pokémon, Final Fantasy, Kingdom Hearts, and Persona.`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Full Stack Developer",
    company: "Hack the Valley",
    description: `Developed a Django and GraphQL backend supporting 1,000+ participants with event registration, user
                  authentication, and real-time schedule updates for one of Toronto’s largest hackathons.
                  Improved frontend performance by optimizing React component rendering and state management, reducing
                  page load times by 50% and improving responsiveness during peak event traffic.
                  Redesigned the signup and login experience with a mobile-first responsive UI, improving usability and reducing
                  registration drop-off during mobile onboarding, increasing mobile form completion by 40%. `,
    image: hack,
  },
  {
    year: "May 2022 - Jan 2023",
    role: "Software Developer",
    company: "Smile Digital Health",
    description: `Developed full-stack application features using Node.js, TypeScript, and Angular to support secure patient
                  data exchange across distributed healthcare systems using HL7 FHIR standards.
                  Increased Jest unit and integration test coverage from 50% to 65%, helping catch regressions earlier and
                  improving release confidence across APIs and frontend components.
                  Refactored 10+ REST APIs by adding input validation and standardized error handling, improving reliability
                  and reducing failed patient data exchanges.`,
    image: smile,
  },
  {
    year: "Sept 2021 - Jan 2022",
    role: "Software Developer",
    company: "Questrade Inc.",
    description: `Refactored 15+ Angular components to remove duplicated logic across shared modules, reducing shared module
    size by 40% and simplifying future frontend development. Developed and integrated 10+ RESTful APIs using ASP.NET Core and MongoDB, replacing direct
cross-service database calls and reducing backend latency by 25%. Set up OpenTelemetry + Datadog observability across services, tracking 50+ metrics and cutting incident
resolution time by 50%.`,
    image: quest,
  },
  {
    year: "Sept 2020 - Jan 2021",
    role: "Software Developer",
    company: "ML Analytix",
    description: `Built React dashboards with real-time data visualizations to monitor warehouse inventory and computer vision
outputs, improving operational visibility for daily production workflows.
                  Developed Django REST API endpoints and optimized MySQL queries to automate multi-source data
retrieval, replacing manual exports and saving hours of weekly reporting time.
                  Added dynamic filtering and drill-down functionality to analytics dashboards, reducing time spent navigating data
for analysis and improving reporting efficiency.`,
    image: ml,
  },
];

/*export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
]; */

export const CONTACT = {
  email: "siyuenlam@gmail.com",
};
