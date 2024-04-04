import { Tooltip } from "@/components/Tooltip";
import Link from "next/link";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

export const Bio = () => {
  return (
    <div className="flex basis-1/2 flex-col">
      <h3 className="title mt-1 text-3xl text-accent">About me...</h3>
      <div className="flex h-full flex-col gap-8">
        <p className="leading-loose">
          Detail-oriented Fullstack Developer with 4+ years of experience in web
          technologies with a effective and creative approach for every project.
          Since 2019, I have been developing and contributing to open-source
          applications, websites and games.
        </p>
        <p className="leading-loose">
          Proficient in Front-end frameworks and libraries such as React.js,
          Next.js, and Tailwind. I also have experience with Back-end
          technologies such as Node.js, Express.js, and both relational and
          non-relational databases.
        </p>
        <Link
          href={"#"}
          className="group w-fit border-2 border-button-main/25 p-1 transition hover:border-white/25"
        >
          <p className="title flex items-center gap-2 bg-button-main px-4 py-2 text-lg font-bold uppercase tracking-wide text-white transition group-hover:bg-white group-hover:text-button-main">
            <FaFilePdf className="mb-0.5" />
            View Resume
          </p>
        </Link>
        <div className="flex gap-4 text-lg text-accent">
          <Tooltip text="Github">
            <Link
              href={"https://github.com/toriality"}
              target="_blank"
              className="hover:text-white"
            >
              <FaGithub />
            </Link>
          </Tooltip>
          <Tooltip text="Linkedin">
            <Link
              href={"https://linkedin.com/in/toriality"}
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedin />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
