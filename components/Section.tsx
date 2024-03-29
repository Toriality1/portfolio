import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={twMerge(
        "flex flex-col min-h-screen w-full max-w-screen-xl px-4 py-12",
        className
      )}
    >
      {children}
    </motion.section>
  );
};

Section.Header = SectionHeader;

export { Section };
