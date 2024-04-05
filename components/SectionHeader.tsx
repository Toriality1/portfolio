import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type SectionHeaderProps = { children: React.ReactNode; className?: string };

export const SectionHeader = ({ children, className }: SectionHeaderProps) => {
  return (
    <h2
      className={twMerge(
        "title text-center text-5xl font-bold text-accent",
        className,
      )}
    >
      {children}
    </h2>
  );
};
