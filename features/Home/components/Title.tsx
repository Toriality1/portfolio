"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Title = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
    }, 5000);

    console.log(currentRoleIndex);

    return () => clearInterval(interval);
  }, [currentRoleIndex]);

  return (
    <div>
      <h1
        className="relative z-10 text-7xl font-bold text-slate-400"
        style={{
          textShadow: "0 0 20px black",
        }}
      >
        Pedro Crelier
      </h1>
      <div className="mt-3 flex -translate-x-1 items-center ">
        <div className="size-2 -translate-x-16 rounded-full bg-emerald-600" />
        <div className="h-0.5 w-2/3 rounded bg-emerald-600" />
      </div>
      <div className="relative h-10 overflow-hidden">
        <AnimatePresence>
          <motion.p
            key={roles[currentRoleIndex]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, display: "absolute" }}
            transition={{ duration: 0.5 }}
            className="title absolute ml-1 mt-2 font-bold tracking-wider text-emerald-500 "
          >
            {roles[currentRoleIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

const roles = [
  "Software Engineer",
  "Fullstack Developer",
  "React.js Enthusiast",
  "UI/UX Student",
] as const;
