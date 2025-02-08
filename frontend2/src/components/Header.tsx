"use client"
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="">
      <div className="w-full bg-gray-200 backdrop-blur-lg  py-2 px-5">
        <div className="max-w-8xl mx-auto bg-white py-4 px-10 rounded-2xl">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Xcentic Logo" width={120} height={120}></Image>
            <MenuIcon className="text-black md:hidden" />
            <nav className="hidden text-sm md:flex gap-6 text-black items-center font-medium">
              <a href="#" className=" hover:text-black/60 duration-100">About</a>
              <a href="#" className=" hover:text-black/60 duration-100">Features</a>
              <a href="#" className=" hover:text-black/60 duration-100">Customers</a>
              <a href="#" className=" hover:text-black/60 duration-100">Updates</a>
              <a href="#" className=" hover:text-black/60 duration-100">Help</a>
              <button className="bg-black text-white hover:text-black hover:bg-white/45 duration-300 border text-sm px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
