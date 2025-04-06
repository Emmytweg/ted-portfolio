"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { FacebookIcon } from "../ui/facebook";
import { TwitterIcon } from "../ui/twitter";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { useEffect, useState } from "react";
import MobileSidebar from "../../../src/components/ui/MobileSideBar";
import Image from "next/image";
import logo from "../../../images/ted4.png";
import { PT_Sans_Narrow } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        exit={{ y: -80 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${ptSansNarrow.className} fixed top-0 z-50 w-full`}
      >
        <Menubar
          className={`flex items-center justify-between px-4 lg:px-10 h-16 text-white border-none transition-all duration-500 ${
            isScrolled
              ? "bg-black/70 backdrop-blur-md shadow-md"
              : "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-opacity-90"
          }`}
        >
          {/* Mobile: Logo + Sidebar */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <Image src={logo} alt="logo" height={40} width={40} />
            <MobileSidebar />
          </div>

          {/* Desktop: Nav Links */}
          <div className="hidden lg:flex w-full justify-between items-center">
            <div className="flex items-center gap-6">
              <Image src={logo} alt="logo" height={40} width={40} />
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/project", label: "Project" },
                { href: "/contact", label: "Contact" },
                { href: "/testimonials", label: "Testimonials" },
              ].map(({ href, label }) => (
                <MenubarMenu key={label}>
                  <MenubarTrigger>
                    <motion.div
                      whileHover={{ scale: 1.1, color: "#3b82f6" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        className="text-lg font-bold transition-colors"
                        href={href}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  </MenubarTrigger>
                </MenubarMenu>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link href="#"><FacebookIcon className="h-8 w-8 hover:text-blue-500 transition" /></Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link href="#"><FaTiktok className="h-6 w-6 hover:text-blue-500 transition" /></Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link href="#"><LinkedinIcon className="h-8 w-8 hover:text-blue-500 transition" /></Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Link href="#"><TwitterIcon className="h-8 w-8 hover:text-blue-500 transition" /></Link>
              </motion.div>
            </div>
          </div>
        </Menubar>
      </motion.div>
    </AnimatePresence>
  );
}
