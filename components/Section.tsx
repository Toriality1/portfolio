"use client";

import { motion, useInView as useMotionInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useInView as useObserverInView } from "react-intersection-observer";
import { useEffect, useCallback, useRef } from "react";

import {
  SectionName,
  useActiveSection,
} from "@/features/Header/context/ActiveSection";

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
  const { setActiveSection, timeOfLastClick, setTimeOfLastClick } =
    useActiveSection();

  const animationRef = useRef<HTMLElement | null>(null);

  const isVisible = useMotionInView(animationRef, {
    once: true,
    amount: 0.15,
  });

  const { ref: observerRef, inView } = useObserverInView({
    threshold: threshold ?? 0.5,
  });

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      observerRef(node); // react-intersection-observer
      animationRef.current = node; // local ref for framer-motion
    },
    [observerRef],
  );

  useEffect(() => {
    const resetClickTime = () => setTimeOfLastClick(0);
    window.addEventListener("wheel", resetClickTime);
    return () => window.removeEventListener("wheel", resetClickTime);
  }, [setTimeOfLastClick]);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection, timeOfLastClick]);

  return (
    <div className={twMerge("px-6 py-20", color)}>
      <motion.section
        ref={setRefs}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={twMerge("m-auto max-w-screen-lg", className)}
        id={id}
      >
        {children}
      </motion.section>
    </div>
  );
};

export { Section };

