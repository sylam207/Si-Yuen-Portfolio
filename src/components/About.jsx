import about from "../assets/about.png";
import uoftLogo from "../assets/uoft.svg";
import { motion } from "framer-motion";
import { FaLanguage, FaPlane, FaRunning, FaPaintBrush, FaGamepad, FaMicrochip, FaCode, FaGlobe, FaLaptopCode, FaTrophy } from "react-icons/fa";

const interests = [
    { icon: FaLanguage, label: "Languages", desc: "Japanese & French", color: "text-pink-400" },
    { icon: FaPlane, label: "Travel", desc: "Asia & Europe", color: "text-sky-400" },
    { icon: FaRunning, label: "Sports", desc: "Badminton, Pickleball & Running", color: "text-green-400" },
    { icon: FaPaintBrush, label: "Art", desc: "Digital Drawing, Anime & Manga", color: "text-purple-400" },
    { icon: FaGamepad, label: "Gaming", desc: "Nintendo, Zelda, Pokémon & more", color: "text-yellow-400" },
    { icon: FaMicrochip, label: "Electronics", desc: "Arduino & Hardware Projects", color: "text-orange-400" },
];

const quickFacts = [
    { icon: FaCode, value: "5+", label: "Years Coding", color: "text-purple-400" },
    { icon: FaLaptopCode, value: "4", label: "Companies", color: "text-cyan-400" },
    { icon: FaGlobe, value: "3", label: "Languages Spoken", color: "text-pink-400" },
    { icon: FaTrophy, value: "1000+", label: "Hackathon Users Served", color: "text-yellow-400" },
];

const About = () => {
    return (
        <section id="About">
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
            About
            <span className="text-neutral-400"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img src={about} alt="Si Yuen's hobbies and interests illustration" loading="lazy"/>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2"
                >
                    <p className="my-2 max-w-xl py-4 text-neutral-300">
                        Outside of coding, I'm passionate about a variety of hobbies and interests that keep me creative, active, and curious.
                    </p>
                    <div className="grid grid-cols-2 gap-3 max-w-xl sm:grid-cols-3">
                        {interests.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-center transition hover:border-neutral-600 hover:scale-105"
                            >
                                <item.icon className={`mx-auto text-2xl ${item.color}`} />
                                <p className="mt-2 text-sm font-medium">{item.label}</p>
                                <p className="mt-1 text-xs text-neutral-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick facts strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 grid grid-cols-2 gap-3 max-w-xl sm:grid-cols-4"
                    >
                        {quickFacts.map((fact) => (
                            <div key={fact.label} className="text-center">
                                <fact.icon className={`mx-auto text-xl ${fact.color}`} />
                                <p className="mt-1 text-2xl font-bold">{fact.value}</p>
                                <p className="text-xs text-neutral-400">{fact.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-6 max-w-xl rounded-xl border border-neutral-800 bg-neutral-900/60 p-5"
                    >
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">Education</p>
                        <div className="flex items-center gap-4">
                            <img
                                src={uoftLogo}
                                alt="University of Toronto crest"
                                className="h-12 w-12 shrink-0 object-contain"
                            />
                            <div>
                                <p className="font-semibold">University of Toronto</p>
                                <p className="text-sm text-purple-300">BSc in Statistics, Data Science & Machine Learning</p>
                                <p className="mt-0.5 text-xs text-neutral-400">September 2018 – June 2024 · Toronto, ON</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
    );
};

export default About;