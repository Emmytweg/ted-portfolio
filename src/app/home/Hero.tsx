'use client'

import ScannerCard from "@/components/ScannerCard";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const text = "I am a Graphic Designer & Video Creator, Living in Your Imagination.";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50); // Adjust speed of typing
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center h-screen w-full px-6 sm:px-16 lg:px-24 text-center sm:text-left">
      {/* ScannerCard with Bounce Animation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 1,
        }}
        className="  sm:w-[400px] md:w-[500px] lg:w-[600px]"
      >
        <ScannerCard />
      </motion.div>

      {/* Text Content with Typing Animation */}
      <div className="max-w-3xl">
        <h1 className="text-[40px] text-start  md:text-[70px] lg:text-[60px] lg:leading-tight font-extrabold bg-gradient-to-r from-gray-600 via-gray-300 to-gray-500 bg-clip-text text-transparent">
          {displayText}
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            |
          </motion.span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
