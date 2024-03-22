"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const header_data = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About Me",
    hash: "#about-me",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact Me",
    hash: "#contact",
  },
] as const;

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full left-0 flex justify-between items-center px-10 title"
    >
      <Image src="/vercel.svg" alt="Portfolio Logo" quality={90} width={50} height={50} />

      <nav>
        <ul className="flex">
          {header_data.map((item) => (
            <li key={item.name}>
              <Link
                href={item.hash}
                className="text-emerald-500 tracking-wide font-bold flex items-center py-4 px-6 hover:text-slate-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
