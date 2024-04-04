"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { FaRegDotCircle } from "react-icons/fa";
import { Title } from "./components/Title";
import { Info } from "./components/Info";

export const AboutMe = () => {
  return (
    <Section color="bg-gradient-to-b from-main from-95% to-main-darker">
      <div className="space-y-20">
        <Title />
        <Info />
      </div>
      <p className="mt-10 text-center font-extralight text-accent opacity-50">
        Be the change you want to see in the world
      </p>
    </Section>
  );
};

const technologies_data = [
  "Typescript",
  "React.js",
  "Next.js",
  "Tailwind",
  "HTML & CSS",
  "Node.js",
  "Express.js",
  "Mongoose",
  "MongoDB",
  "MySQL",
  "SQLite",
  "SASS/SCSS",
  "Electron.js",
] as const;
