import ml from "../assets/ml.jpg";
import quest from "../assets/quest.jpg";
import smile from "../assets/smile.jpg";
import hack from "../assets/hack.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with 5 years of experience building scalable and maintainable web applications. I have honed my skills in languages such as Python, Java, C, TypeScript and JavaScript with experience across modern frameworks including React, Next.js, Angular, and Node.js as well as databases such as MongoDB and PostgreSQL. My goal is to leverage my expertise to create innovative solutions for user-centric solutions that improve performance, reliability, and overall user experience.`;
export const HERO_CONTENT_2 = `I am based in Toronto, Canada, and thrive in fast-paced, startup-driven environments where adaptability and ownership are key. I have contributed to building and iterating on full-stack products, quickly turning ideas into functional, user-facing features. I focus on writing clean, scalable code while continuously learning and experimenting with new technologies.`
export const ABOUT_TEXT = `Outside of coding, I have a strong interest in language learning, particularly Japanese and French. I enjoy traveling and exploring diverse cultures, from Asia to Europe, which broadens my perspective and adaptability. I stay active through badminton, pickleball, fitness training, and preparing for a half marathon, reflecting my discipline and consistency. I also have a passion for digital drawing, anime, and manga, which influence my creativity and attention to detail in design and user experience. In my free time, I explore electronics and Arduino projects, combining software and hardware to build hands-on solutions.`;
export const ABOUT_TEXT_2 = `I’ve had a long-standing passion for video games that began at a young age, starting with a Nintendo DS when I was five and later a Wii at ten, which sparked my curiosity for interactive experiences. As I grew older, that interest evolved into building my own computer, deepening my understanding of both hardware and software. Nintendo remains my favorite gaming franchise, with Mario Kart and Super Smash Bros. holding a special place due to their competitive and social nature. I’m also drawn to immersive storytelling and world-building found in series like The Legend of Zelda, Pokémon, Final Fantasy, Kingdom Hearts, and Persona.`

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Full Stack Developer",
    company: "Hack the Valley",
    description: `Optimized React.js components and client-side performance by improving rendering efficiency and state
                  management, reducing load times by 50% and delivering a smoother user navigation experience.
                  Improved application and login flow through mobile-first responsive UI design, increasing event signup completion
                  rates and user conversion.
                  Architected and maintained a Django + GraphQL backend supporting 1,000+ participants, enabling event
                  registration, authentication, and real-time updates.`,
    image: hack
  },
  {
    year: "May 2022 - Jan 2023",
    role: "Software Developer",
    company: "Smile Digital Health",
    description: `Developed full-stack features using Node.js, TypeScript, and Angular to enable data exchange across distributed
                  healthcare systems (HL7 FHIR), improving system reliability and data integrity.
                  Increased Jest test coverage from 50% to 65% by adding unit and integration tests for REST APIs and Angular
                  components, reducing production bugs.
                  Refactored 10+ RESTful APIs in Node.js/TypeScript to improve data validation and consistency, reducing
                  end-to-end processing delays.`,
    image: smile
  },
  {
    year: "Sept 2021 - Jan 2022",
    role: "Software Developer",
    company: "Questrade Inc.",
    description: `Refactored 15+ Angular components, improving code clarity and reducing duplicated logic by 40%, which increased
    overall front-end maintainability. Engineered and integrated 10+ REST APIs using ASP.NET Core + MongoDB, streamlining service-to-service data
    flow and reducing backend latency 25%. Implemented end-to-end observability with OpenTelemetry + Datadog, enabling monitoring of 50+ metrics and
    improving issue detection and resolution time by 50%.`,
    image: quest
  },
  {
    year: "Sept 2020 - Jan 2021",
    role: "Software Developer",
    company: "ML Analytix",
    description: `Built interactive React dashboards using charting libraries to visualize warehouse and computer vision data,
                  enabling real-time monitoring of inventory and operations.
                  Developed Django REST API endpoints and MySQL queries to retrieve and process data, improving accessibility
                  and reducing manual data retrieval.
                  Implemented dynamic visualization and filtering features, streamlining analysis workflows and improving
                  decision-making efficiency`,
    image: ml
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