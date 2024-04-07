"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";
import {
  SectionName,
  useActiveSection,
} from "@/features/Header/context/ActiveSection";
import { useEffect } from "react";

type SectionProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
  id: SectionName;
  threshold?: number;
};

const Section = ({
  children,
  color,
  className,
  id,
  threshold,
}: SectionProps) => {
  const { ref, inView } = useInView({
    threshold: threshold ?? 0.5,
  });
  const { setActiveSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSection();

  if (typeof window !== "undefined") {
    onwheel = () => {
      setTimeOfLastClick(0);
    };
  }

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(id);
    }
  }, [id, inView, setActiveSection, timeOfLastClick]);

  return (
    <div className={twMerge("px-6 py-20", color)}>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={twMerge("m-auto max-w-screen-lg", className)}
        id={id}
      >
        {children}
      </motion.section>
    </div>
  );
};

export { Section };
