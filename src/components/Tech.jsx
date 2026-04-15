import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoAngular } from 'react-icons/io';
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from 'react-icons/si';
import { motion } from "framer-motion";

const Tech = () => {
    const cardStyle ="flex h-28 w-28 items-center justify-center rounded-2xl border border-neutral-800 p-4 transition hover:scale-110 hover:border-neutral-700";
    return (

        <section id="Tech" className="border-b border-neutral-800 pb-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies & Tools
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <div className={cardStyle}>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className={cardStyle}>
                    <TbBrandNextjs className="text-7xl"/>
                </div>
                <div className={cardStyle}>
                    <IoLogoAngular className="text-7xl text-red-700"/>
                </div>
                <div className={cardStyle}>
                    <SiExpress className="text-7xl"/>
                </div>
                <div className={cardStyle}>
                    <FaNodeJs className="text-7xl text-green-400"/>
                </div>
                <div className={cardStyle}>
                    <img alt="Tailwind CSS" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" onError={(e) => { e.target.style.display = 'none'; }}/>
                </div>
                <div className={cardStyle}>
                    <SiMongodb className="text-7xl text-green-400"/>
                </div>
                <div className={cardStyle}>
                    <BiLogoPostgresql className="text-7xl text-sky-700"/>
                </div>
                <div className={cardStyle}>
                    <img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" onError={(e) => { e.target.style.display = 'none'; }}/>
                </div>
                <div className={cardStyle}>
                    <img alt="Postman" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" onError={(e) => { e.target.style.display = 'none'; }}/>
                </div>
                <div className={cardStyle}>
                    <img alt="Docker" src="https://skillicons.dev/icons?i=docker&theme=dark" onError={(e) => { e.target.style.display = 'none'; }}/>
                </div>
            </motion.div>
        </section>
    );
};

export default Tech;