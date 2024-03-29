"use client";
import { Logo } from "./components/Logo";
import { motion } from "framer-motion";
import { Nav } from "./components/Nav";
import { Settings } from "./components/Settings";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="title fixed flex w-full items-center justify-between bg-red-100 px-32 py-4"
    >
      <div className="flex items-center gap-24">
        <Logo />
        <Nav />
      </div>
      <div className="flex items-center gap-6">
        <Settings />
      </div>
    </motion.header>
  );
};
