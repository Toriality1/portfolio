"use client";

import { motion } from "framer-motion";
import { US, BR } from "country-flag-icons/react/3x2";
import { useActiveSection } from "./context/ActiveSection";
import { nav_data } from "@/data/nav";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { createElement } from "react";

type Props = {
  names: {
    [key: string]: string;
  };
  locale: string;
};

export const Header = ({ names, locale }: Props) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="title fixed z-[9999] flex w-full items-center justify-between px-32 py-4 tracking-wider"
    >
      <div className="flex items-center gap-24">
        <nav>
          <ul className="flex gap-8">
            {nav_data.map((item) => (
              <li key={item.name}>
                <Link
                  href={"#" + item.name}
                  className={twMerge(
                    "flex items-center text-button-link hover:text-white",
                    item.name === activeSection &&
                      "text-white underline underline-offset-8",
                    item.name === activeSection &&
                      activeSection === "Contact" &&
                      "text-accent",
                    activeSection === "Contact" && "hover:text-accent-darker",
                  )}
                  onClick={() => {
                    setActiveSection(item.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {names[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        {createElement(locale === "en" ? US : BR, {
          className: "size-[20px] rounded-full cursor-pointer",
          onClick: () => {
            window.location.href = locale === "en" ? "/pt" : "/en";
          },
        })}
      </div>
    </motion.header>
  );
};
