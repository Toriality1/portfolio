import Image from "next/image";
import { SectionHeader } from "../../components/SectionHeader";

const projects_data = [
  {
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.png",
    tags: ["React", "NextJS", "Tailwind", "Typescript", "NodeJS"],
  },
  {
    name: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.png",
    tags: ["React", "NextJS", "Tailwind", "Typescript", "NodeJS"],
  },
  {
    name: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.png",
    tags: ["React", "NextJS", "Tailwind", "Typescript", "NodeJS"],
  },
  {
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/image.png",
    tags: ["React", "NextJS", "Tailwind", "Typescript", "NodeJS"],
  },
];

export const Projects = () => {
  return (
    <section className="mb-20 w-full">
      <SectionHeader>Projects</SectionHeader>
      <ul className="flex flex-col w-2/3 m-auto gap-8">
        {projects_data.map((item) => (
          <li
            key={item.name}
            className="w-full relative group bg-slate-900/50 rounded ring-2 ring-slate-800/80 p-5 overflow-hidden h-[20rem]"
          >
            <div className="w-1/2 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-5">{item.name}</h3>
              <p>{item.description}</p>
              <ul className="mt-auto flex">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <Image
              className="absolute bottom-0 -right-[30%] rounded group-hover:-rotate-3 group-hover:scale-105 group-hover:-right-[25%] transition"
              src={item.image}
              alt="Project Image"
              width={620}
              height={600}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
