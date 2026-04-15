import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import jsLogo from "../assets/javascript.png";
import tsLogo from "../assets/typescript.png";
import cLogo from "../assets/C.png";
import rLogo from "../assets/R.png";
import { motion } from "framer-motion";


const Languages = () => {
  const cardStyle = "flex h-28 w-28 items-center justify-center rounded-2xl border border-neutral-800 p-4 transition hover:scale-110 hover:border-neutral-700";
  const imgStyle = "h-20 w-20 object-contain";

  return (
    <section id="Languages">
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Languages
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className={cardStyle}>
          <img src={pythonLogo} alt="Python" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={javaLogo} alt="Java" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={cLogo} alt="C" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={jsLogo} alt="JavaScript" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={tsLogo} alt="TypeScript" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className={imgStyle} onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className={cardStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS" className={imgStyle} onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className={cardStyle}>
          <img src={rLogo} alt="R" className={imgStyle} />
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default Languages;