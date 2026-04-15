import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="Experience">
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h1>
            <div className="relative mx-auto max-w-4xl">
                {/* Vertical timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-700 md:left-1/2 md:-translate-x-1/2" />

                {EXPERIENCES.map((experience, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-12 flex flex-col md:flex-row ${isLeft ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-purple-400 bg-neutral-950 md:left-1/2 md:-translate-x-1/2" />

                            {/* Spacer for the other side */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Content card */}
                            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                                <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-purple-300">
                                        {experience.year}
                                    </p>
                                    <div className="mb-3 flex items-center gap-3">
                                        <img
                                            src={experience.image}
                                            alt={experience.company}
                                            loading="lazy"
                                            className="h-10 w-10 rounded-lg object-cover border border-neutral-700"
                                        />
                                        <div>
                                            <h6 className="font-semibold leading-tight">{experience.role}</h6>
                                            <span className="text-sm text-purple-100">{experience.company}</span>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm leading-relaxed text-neutral-400">
                                        {experience.description.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
        </section>
    );
};

export default Experience;