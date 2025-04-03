"use client";
import React from "react";
import Image from "next/image";
import ProfileImage from "../../images/dp.jpg";

const ScannerCard: React.FC = () => {
  return (
    <div className="relative w-[90%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm h-auto sm:h-96 bg-transparent rounded-lg shadow-xl overflow-hidden">
      {/* Card Content */}
      <div className="p-4 sm:p-6 flex justify-center">
        <Image
          src={ProfileImage}
          alt="PROFILE"
          // Adjust height accordingly
          className=" w-[450px] md:w-[400px] lg:w-[300px] rounded-sm border border-blue-950 transition-all duration-300"
        />
      </div>

      {/* Scanner Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent opacity-60 animate-scan"></div>
    </div>
  );
};

export default ScannerCard;
