'use client'

import React from "react";
import { motion } from "framer-motion";
import { Poppins, PT_Sans_Narrow } from "next/font/google";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/stars-bg.jpg')] bg-cover bg-center text-white font-sans overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center sm:text-left">
        <h2
          className={`${ptSansNarrow.className} text-center sm:text-4xl lg:text-3xl text-white tracking-wider font-light mb-3`}
        >
          THIS IS TED CREATIVE AGENCY
        </h2>
        <h1 className="text-6xl text-center sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          A CREATIVE & VISUAL
          <br />
          AGENCY
        </h1>
        <p
          className={`${ptSansNarrow.className} text-center mt-4 text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl`}
        >
          Empowering brands to shine with creativity and excellence.
          <br className="hidden sm:block" />
          Let us bring your vision to life with our expertise.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-md hover:bg-cyan-300 transition duration-300"
        >
          Read More
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
