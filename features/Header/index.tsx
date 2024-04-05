"use client";

import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { US } from "country-flag-icons/react/3x2";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="title fixed z-[9999] flex w-full items-center justify-between px-32 py-4 tracking-wider"
    >
      <div className="flex items-center gap-24">
        <Nav />
      </div>
      <div className="">
        <US className="size-[20px] rounded-full" />
      </div>
    </motion.header>
  );
};
