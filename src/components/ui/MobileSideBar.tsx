"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react"; // Menu icon
import { FaTimes, FaTiktok } from "react-icons/fa"; // Close & Tiktok icon
import { LinkedinIcon } from "@/components/ui/linkedin";
import { FacebookIcon } from "../ui/facebook";
import { TwitterIcon } from "../ui/twitter";
import { DarkMode } from "../../../Helper/DarkMode";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen} >
      {/* Menu Button for opening the sidebar */}
      <SheetTrigger asChild>
        {/* <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hidden text-gray-700 hover:text-black transition"
        >
         
        </Button> */}
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      {/* Sidebar Content */}
      <SheetContent side="left" className=" w-96 p-6 flex flex-col">
        {/* Header Section with Close Button */}
        <div className="flex justify-between items-center -mt-4 mb-6">
      
   
    
                  
            {/* <FaTimes  onClick={() => setOpen(false)} className="w-6 h-6 text-gray-500 hover:text-blue-500 transition" /> */}
      
      
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-8" >
          <Link
            href="/"
            className="text-lg font-semibold  border-b-2 p-6  hover:text-blue-900 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold border-b-2 p-6  hover:text-blue-900 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/project"
            className="text-lg font-semibold border-b-2 p-6  hover:text-blue-900 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold border-b-2 p-6  hover:text-blue-900 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          </div>
      
          
          {/* Social Icons & Dark Mode */}
          <div className="flex w-[80%] justify-center items-center space-x-4">
            <Link href="#" className=" hover:text-blue-900 transition">
              <FacebookIcon className="w-16 h-16" />
            </Link>
            <Link href="#" className=" hover:text-blue-900 transition">
              <FaTiktok className="w-6 h-6" />
            </Link>
            <Link href="#" className=" hover:text-blue-900 transition">
              <LinkedinIcon className="w-16 h-16" />
            </Link>
            <Link href="#" className=" hover:text-blue-900 transition">
              <TwitterIcon className="w-16 h-16" />
            </Link>
          </div>
        </nav>

        

         
     </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
