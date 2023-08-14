"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-6 w-[36rem] h-[3.5rem] bg-gray-900 left-1/2 bg-opacity-40 rounded-full border-black lg-shadow backdrop-blur-[0.5rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className=" fixed flex items-center top-[2.5rem] left-1/2 w-[30rem] -translate-x-1/2 gap-y-1 text-gray-500">
        <ul className="flex justify-between w-[30rem] ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex items-center gap-5 hover:text-white relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
