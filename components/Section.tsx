import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

const Section = ({ children, color, className }: SectionProps) => {
  return (
    <div className={twMerge("px-32 py-20", color)}>
      <section className={twMerge("m-auto max-w-screen-lg", className)}>
        {children}
      </section>
    </div>
  );
};

Section.Header = SectionHeader;

export { Section };
