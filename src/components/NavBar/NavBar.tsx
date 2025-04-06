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
import logo from "../../../images/ted3.png";
import { PT_Sans_Narrow } from "next/font/google";

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
    <Menubar
      className={`${ptSansNarrow.className} fixed z-50 w-full flex items-center justify-between px-4 lg:px-10 h-16 text-white border-none transition-all duration-500 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      {/* Mobile: Logo + Sidebar Toggle */}
      <div className="flex w-full items-center justify-between lg:hidden">
        <Image src={logo} alt="logo" height={40} width={40} />
        <MobileSidebar />
      </div>

      {/* Desktop: Links + Social Icons */}
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
                <Link
                  className="text-lg font-bold hover:text-blue-500 transition"
                  href={href}
                >
                  {label}
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Link href="#"><FacebookIcon className="h-8 w-8 hover:text-blue-500 transition" /></Link>
          <Link href="#"><FaTiktok className="h-6 w-6 hover:text-blue-500 transition" /></Link>
          <Link href="#"><LinkedinIcon className="h-8 w-8 hover:text-blue-500 transition" /></Link>
          <Link href="#"><TwitterIcon className="h-8 w-8 hover:text-blue-500 transition" /></Link>
        </div>
      </div>
    </Menubar>
  );
}
