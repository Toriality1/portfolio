import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "@/components/Tooltip";
import Link from "next/link";

export const SocialIcons = () => {
  return (
    <div className="flex gap-8 text-2xl text-accent md:gap-4 md:text-xl">
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
  );
};
