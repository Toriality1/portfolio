import Link from "next/link";
import { FaCode, FaLink } from "react-icons/fa";
import { Tooltip } from "@/components/Tooltip";
import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  href: string;
  source: string;
  image: string;
};

export const Project = ({
  title,
  description,
  href,
  source,
  image,
}: ProjectProps) => {
  return (
    <div className="basis-1/3 p-2">
      <div className="group relative aspect-video border-2 border-main p-1">
        <div className="absolute bottom-[100%] left-0 right-0 z-10 m-1  translate-y-full rounded-t-sm bg-main p-2 opacity-0 transition-none group-hover:translate-y-1 group-hover:opacity-100 group-hover:transition group-hover:duration-500">
          <h3 className="title text-center text-xl tracking-wide">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <div className="absolute left-0 right-0 top-[100%] m-1 flex -translate-y-full justify-center gap-6 rounded-b-sm bg-main p-2 text-xl opacity-0 transition-none group-hover:z-20 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:transition group-hover:duration-500">
          <Tooltip text="Visit project">
            <Link href={href} target="_blank">
              <FaLink className="cursor-pointer hover:text-gray-300" />
            </Link>
          </Tooltip>
          <Tooltip text="Source code">
            <Link href={source} target="_blank">
              <FaCode className="cursor-pointer hover:text-gray-300" />
            </Link>
          </Tooltip>
        </div>
        <Link
          href={href}
          target="_blank"
          className="absolute left-0 top-0 size-full group-hover:z-20"
        >
          <div className="absolute left-0 top-0 size-full p-1 ">
            <div className="size-full bg-accent mix-blend-color transition duration-500 group-hover:opacity-0" />
          </div>
          <Image
            src={image}
            width={1600}
            height={900}
            alt={`${title} image`}
            className="size-full p-1"
          />
        </Link>
      </div>
    </div>
  );
};
