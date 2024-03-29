"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { FaRegDotCircle } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <Section>
      <Section.Header>About Me</Section.Header>
      {/* TODO */}

      <div className="flex items-start justify-between">
        <div className="w-[70ch] space-y-8 leading-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            quaerat omnis quia fugit, fuga aperiam corporis modi sunt optio
            dolores earum vitae! Quasi deleniti ducimus, minus inventore ad quam
            aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            quaerat omnis quia fugit, fuga aperiam corporis modi sunt optio
            dolores earum vitae! Quasi deleniti ducimus, minus inventore ad quam
            aliquam.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-4 gap-x-12 p-2.5 text-xs">
          {technologies_data.map((item) => (
            <li key={item}>
              <p className="flex items-center gap-3">
                <FaRegDotCircle className="text-emerald-500" size={8} />
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
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
