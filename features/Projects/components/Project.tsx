import Link from "next/link";
import { FaCode, FaLink } from "react-icons/fa";
import { Tooltip } from "@/components/Tooltip";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ProjectProps = {
  title: string;
  href: string;
  source: string;
  image: string;
};

export const Project = ({ title, href, source, image }: ProjectProps) => {
  const t = useTranslations("Projects");
  return (
    <div className="basis-1/2 p-2 lg:basis-1/3">
      <div className="group relative aspect-video border-2 border-main p-1">
        <div className="absolute bottom-[100%] left-0 right-0 z-10 m-1 hidden translate-y-full  rounded-t-sm bg-main p-2 opacity-0 transition-none group-hover:translate-y-1 group-hover:opacity-100 group-hover:transition group-hover:duration-500 sm:block">
          <h3 className="title text-center text-xl tracking-wide">{title}</h3>
          <p className="text-sm text-gray-300">{t(title)}</p>
        </div>
        <div className="absolute left-0 right-0 top-[100%] m-1 hidden -translate-y-full justify-center gap-6 rounded-b-sm bg-main p-2 text-xl text-button-link opacity-0 transition-none group-hover:z-20 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:transition group-hover:duration-500 sm:flex">
          <Tooltip text={t("visit")}>
            <Link href={href} target="_blank">
              <FaLink className="cursor-pointer hover:text-gray-300" />
            </Link>
          </Tooltip>
          <Tooltip text={t("source")}>
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
