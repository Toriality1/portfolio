import { Tooltip } from "@/components/Tooltip";
import { cloneElement } from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";

const front_data = [
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "React.js",
    icon: <SiReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
];

const databases_data = [
  {
    name: "SQLite",
    icon: <SiSqlite />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
];

const back_data = [
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
];

const design_data = [
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
];

const skills_data = [
  {
    for: "Front-end",
    data: front_data,
  },
  {
    for: "Databases",
    data: databases_data,
  },
  {
    for: "Back-end",
    data: back_data,
  },
  {
    for: "Design",
    data: design_data,
  },
];

export const Skills = () => {
  return (
    <div className="basis-1/2">
      {skills_data.map((item) => (
        <div key={item.for} className="pt-2 text-accent">
          <div className="flex items-center gap-4">
            <p className="title text-sm tracking-wider">{item.for}</p>
            <div className="h-[1px] grow bg-accent opacity-20" />
          </div>
          <div className="py-4">
            <ul className="flex gap-4">
              {item.data.map((data) => (
                <li key={data.name}>
                  <Tooltip text={data.name}>
                    {cloneElement(data.icon, { size: 24 })}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
