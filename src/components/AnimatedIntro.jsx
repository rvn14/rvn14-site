"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const AnimatedIntro = () => (
  <motion.div
    className="flex flex-col items-center justify-center text-center mt-4"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.4 }}
  >
    <motion.p className="font-semibold text-lg" variants={childVariants}>
      Hi! my name is <span className="text-lavender-400">Dasun Adithya</span>
    </motion.p>
    <motion.p className="text-gray-300 w-2/3" variants={childVariants}>
      <span>
        I am a <span className="text-lavender-400 font-semibold">Computer Science</span> undergraduate with strong coding skills and a passion for designing websites, interfaces, and graphics.
      </span>
    </motion.p>
  </motion.div>
);

export default AnimatedIntro;