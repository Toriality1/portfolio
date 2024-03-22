"use client";

import Link from "next/link";
import { Button } from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="space-y-32 h-screen pt-48 w-full"
    >
      <h1>
        <span className="text-7xl font-bold text-slate-400">Pedro Crelier</span>
        <br />
        <span className="leading-10 font-medium">Software Engineer</span>
      </h1>
      <div className="space-y-10">
        <div className="flex">
          <Button href="/cv.pdf">Download CV</Button>
        </div>
        {/* <Button href="https://linkedin.com/in/pedro-crelier">LinkedIn</Button>
        <Button href="https://github.com/toriality">GitHub</Button> */}
        <div className="ml-1 flex space-x-4 text-2xl text-slate-500">
          <Link href="https://linkedin.com/in/pedro-crelier">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/toriality">
            <FaGithub />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
