import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import { Button } from "@/components/Button";
import Link from "next/link";

export const HomeButtons = () => {
  return (
    <div className="space-y-10">
      <div className="flex">
        <Button href="/cv.pdf" className="group flex items-center gap-3">
          <FaPaperclip className="group-hover:rotate-[360deg] transition-transform duration-500" />
          View Resume
        </Button>
      </div>
      <div className="ml-1 flex space-x-6 text-2xl text-slate-500">
        <Link href="https://linkedin.com/in/pedro-crelier">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/toriality">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};
