"use client";

import Image from "next/image";
import Link from "next/link";
import teamImage from '../../../images/team.png'
const AboutSection = () => {
  return (
    <section className="bg-[#0f0f2c] text-white px-4 py-20 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-sm tracking-widest text-gray-400 uppercase mb-3">About Us</h2>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">We Are <span className="text-blue-400">Creative Agency</span></h1>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
          <p className="text-gray-400">
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={teamImage}
            alt="Team Discussion"
            width={500}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Bottom 3 Boxes */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-[#1f1f3d] p-6 rounded-lg text-center">
          <div className="text-4xl mb-3">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Creative Designs</h3>
          <p className="text-gray-400">Modern & intuitive visuals that bring your ideas to life.</p>
        </div>

        <div className="bg-[#6a4bb5] p-6 rounded-lg text-center">
          <div className="text-4xl mb-3">💻</div>
          <h3 className="text-xl font-semibold mb-2">Coding & UX/UI</h3>
          <p className="text-gray-100">Building fast, responsive & user-friendly interfaces.</p>
        </div>

        <div className="bg-[#27c5d9] p-6 rounded-lg text-center text-black">
          <div className="text-4xl mb-3">📈</div>
          <h3 className="text-xl font-semibold mb-2">Strategy & Consulting</h3>
          <p>Smart planning for digital success and scalable growth.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
