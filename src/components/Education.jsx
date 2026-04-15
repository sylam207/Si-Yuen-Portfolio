import uoftLogo from "../assets/uoft.svg";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="Education">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
            <div className="flex items-center gap-4">
              <img
                src={uoftLogo}
                alt="University of Toronto crest"
                className="h-14 w-14 shrink-0 rounded-lg object-contain"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">University of Toronto</h3>
                <p className="text-sm text-purple-300">
                  Bachelor of Science in Statistics, Data Science and Machine Learning
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-neutral-400">
                  <span>September 2018 – June 2024</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Toronto, ON</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
