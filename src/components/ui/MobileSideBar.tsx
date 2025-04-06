"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { FaTimes, FaTiktok } from "react-icons/fa";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { FacebookIcon } from "../ui/facebook";
import { TwitterIcon } from "../ui/twitter";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </SheetTrigger>

      {/* Sidebar Content */}
      <SheetContent side="left" className="w-80 p-6 flex flex-col bg-white">
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <button onClick={() => setOpen(false)}>
            {/* <FaTimes className="w-6 h-6 text-gray-500 hover:text-blue-500 transition" /> */}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/project", label: "Project" },
            { href: "/contact", label: "Contact" },
            { href: "/testimonials", label: "Testimonials" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-lg flex flex-col p-6 font-semibold border-b pb-2 hover:text-blue-900 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Link href="#"><FacebookIcon className="w-10 h-10" /></Link>
            <Link href="#"><FaTiktok className="w-6 h-6" /></Link>
            <Link href="#"><LinkedinIcon className="w-10 h-10" /></Link>
            <Link href="#"><TwitterIcon className="w-10 h-10" /></Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
