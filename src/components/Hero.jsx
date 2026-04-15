import { HERO_CONTENT } from "../constants";
import { HERO_CONTENT_2 } from "../constants";
import profile from "../assets/profile.webp";
import resume from "../assets/Resume.pdf"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = ["Software Developer", "React Specialist", "Problem Solver"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Si Yuen Lam
                        </motion.h1>
                        <div className="h-12 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="block bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
                                    text-4xl tracking-tight text-transparent"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="my-2 max-w-xl py-6 font-light"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="my-2 max-w-xl py-6 font-light"
                        >
                            {HERO_CONTENT_2}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <a href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                w-full sm:w-auto text-center
                                rounded-xl px-6 sm:px-10 py-3 text-lg font-medium text-white
                                bg-linear-to-r from-pink-300 via-slate-500 to-purple-500
                                transition duration-300
                                hover:scale-105
                                hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">
                                Resume
                                </a>
                            </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full lg:w-1/3 flex justify-center lg:justify-end"
                >
                    <div className="flex justify-center">
                        <img src={profile} alt="Si Yuen Lam portrait photo" loading="lazy" className="h-190 object-cover rounded-2xl"/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;