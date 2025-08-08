"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Title = ({
  title,
  roles,
}: {
  title: string;
  roles: Array<string>;
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="flex flex-col text-center">
      <p className="mb-2 font-extralight text-accent opacity-50">{title}</p>
      <h1 className="title text-6xl font-bold text-accent">Pedro Crelier</h1>
      <div className="relative my-2 h-[1.75rem] space-y-2">
        <div className="mx-auto h-[1px] w-48 bg-accent" />
        <AnimatePresence mode="wait">
          <motion.p
            key={currentRoleIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="title absolute left-0 right-0 text-xl tracking-wider text-accent"
          >
            {roles[currentRoleIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
