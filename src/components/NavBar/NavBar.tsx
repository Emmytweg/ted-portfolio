"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { FacebookIcon } from "../ui/facebook";
import { TwitterIcon } from "../ui/twitter";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { DarkMode } from "../../../Helper/DarkMode";
import { useEffect, useState } from "react";
import MobileSidebar from "../ui/MobileSideBar"; // Import the mobile sidebar

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Menubar
      className={`flex justify-between items-center rounded-b-none pl-10 pr-10 h-16 bg-transparent text-white border-none w-full overflow-hidden fixed z-10 transition-all duration-500 ${
        isScrolled ? "bg-black" : " fixed"
      }`}
    >
      {/* Mobile Sidebar (visible only on small screens) */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>

      {/* Logo */}
      <Image src="/favicon.ico" alt="logo" height={40} width={40} />

      {/* Desktop Navigation Links (Hidden on small screens) */}
      <div className="hidden lg:flex gap-6">
        <MenubarMenu>
          <MenubarTrigger>
            <Link
              className="text-lg font-bold  hover:text-blue-950 transition-all duration-300 "
              href="/"
            >
              Home
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link
              className="text-lg font-bold  hover:text-blue-950 transition-all duration-300 font-poppins"
              href="/about"
            >
              About
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link
              className="text-lg font-bold  hover:text-blue-950 transition-all duration-300 font-poppins"
              href="/project"
            >
              Project
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link
              className="text-lg font-bold  hover:text-blue-950 transition-all duration-300 font-poppins"
              href="/contact"
            >
              Contact
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>

      {/* Social Media Icons */}
      <div className="hidden lg:flex gap-6 items-center">
        <Link href="#">
          <FacebookIcon className="h-16 w-16 hover:text-blue-950 transition-all duration-300" />
        </Link>
        <Link href="#">
          <FaTiktok className="h-6 w-6 hover:text-blue-950 transition-all duration-300" />
        </Link>
        <Link href="#">
          <LinkedinIcon className="h-16 w-16  hover:text-blue-950 transition-all duration-300" />
        </Link>
        <Link href="#">
          <TwitterIcon className="h-16 w-16  hover:text-blue-950 transition-all duration-300" />
        </Link>
 
      </div>
    </Menubar>
  );
}
