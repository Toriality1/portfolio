"use client";

import { AnimatePresence, motion } from "framer-motion";

type SectionHeaderProps = { children: React.ReactNode };

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  if (!children) return null;
  return (
    <div className="mb-12 space-y-1">
      <div className="flex items-center">
        <div className="absolute size-2 -translate-x-16 rounded-full bg-emerald-600" />
        <div
          className={`h-[0.08rem] w-48 rounded bg-emerald-600`}
          style={{
            width: children?.toString().length * 1.5 + "ch",
          }}
        />
      </div>
      <div className="relative h-10 overflow-hidden">
        <AnimatePresence>
          <motion.h2
            // key={roles[currentRoleIndex]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, display: "absolute" }}
            transition={{ duration: 0.5 }}
            className="title absolute ml-1 mt-2 font-bold tracking-wider text-emerald-500 "
          >
            {children}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
};
