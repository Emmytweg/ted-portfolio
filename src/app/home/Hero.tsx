"use client";

import React from "react";
import { motion } from "framer-motion";
import { PT_Sans_Narrow, Outfit } from "next/font/google";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const outfitMedium = Outfit({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-blue-200 via-black to-blue-400 text-white font-sans overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0  z-0 backdrop-blur-sm" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center sm:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className={`${ptSansNarrow.className} text-center sm:text-4xl lg:text-3xl text-white tracking-widest font-light mb-3`}
        >
          THIS IS TED CREATIVE AGENCY
        </motion.h2>

        <motion.h1
          variants={itemVariants}
          className={`${outfitMedium.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center leading-tight drop-shadow-lg`}
        >
          A CREATIVE & VISUAL
          <br />
          AGENCY
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`${ptSansNarrow.className} mt-6 text-sm sm:text-base lg:text-lg text-gray-200 text-center max-w-2xl leading-relaxed`}
        >
          Empowering brands to shine with creativity and excellence.
          <br className="hidden sm:block" />
          Let us bring your vision to life with our expertise.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-300 transition-all duration-300"
        >
          Read More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
